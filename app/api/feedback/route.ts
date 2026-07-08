import { NextResponse } from 'next/server'
import { telemetryDb } from '@/lib/firebase-telemetry'
import { FieldValue, Timestamp } from 'firebase-admin/firestore'

// Auto-diagnostics are high-volume and disposable — expire them after this many
// days via a Firestore TTL policy on the `logs` collection group (field:
// expiresAt). User reports have no expiresAt, so they're kept indefinitely.
const LOG_TTL_DAYS = 90

// Inbound telemetry from every app (TV Remote, Pay My Ticket, OathPath, …).
//
// Per-app "tables": each app's data lives under its own subcollection so it can
// be traced in isolation —
//   apps/{appId}/logs      ← auto diagnostics (category "diag_*")
//   apps/{appId}/reports   ← user-submitted problem reports / contact
// A parent `apps/{appId}` doc holds rollup metadata (last seen, counts) so each
// app shows up as its own node in the Firestore console.
//
// Client contract is unchanged: POST { app, category, message, tv*, … }.

// App ids are turned into safe collection keys; anything off-pattern → "unknown"
// so a bad client can't spawn arbitrary collections.
function appId(raw: unknown): string {
  const s = String(raw || '').toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 40)
  return s || 'unknown'
}

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }

  const message = String(body.message || '').trim()
  if (!message) {
    return NextResponse.json({ error: 'Message is required' }, { status: 400 })
  }

  // Cap field sizes so a bad client can't write huge docs.
  const cap = (v: unknown, n: number) => (v == null ? '' : String(v).slice(0, n))

  const app = appId(body.app)
  const category = cap(body.category, 80) || 'general'
  // Diagnostics events (auto-sent) are logs; everything else is a user report.
  const isLog = category.startsWith('diag_')
  const sub = isLog ? 'logs' : 'reports'

  const doc = {
    app,
    category,
    message: message.slice(0, 4000),
    email: cap(body.email, 200),
    errorContext: cap(body.errorContext, 500),
    appVersion: cap(body.appVersion, 40),
    os: cap(body.os, 60),
    device: cap(body.device, 120),
    tvBrand: cap(body.tvBrand, 60),
    tvModel: cap(body.tvModel, 120),
    tvHost: cap(body.tvHost, 60),
    logs: cap(body.logs, 4000),
    status: isLog ? 'logged' : 'new',
    createdAt: new Date().toISOString(),
    // Only logs carry a TTL timestamp; reports are kept indefinitely.
    ...(isLog
      ? { expiresAt: Timestamp.fromMillis(Date.now() + LOG_TTL_DAYS * 86400000) }
      : {}),
  }

  try {
    const appRef = telemetryDb.collection('apps').doc(app)

    await Promise.all([
      // The per-app table.
      appRef.collection(sub).add(doc),
      // Rollup on the parent doc so each app is visible + summarizable.
      appRef.set(
        {
          app,
          updatedAt: new Date().toISOString(),
          lastCategory: category,
          counts: { [isLog ? 'logs' : 'reports']: FieldValue.increment(1) },
        },
        { merge: true }
      ),
      // Keep a unified cross-app inbox of USER reports (not high-volume logs).
      isLog ? Promise.resolve(undefined) : telemetryDb.collection('problem_reports').add(doc),
    ])
  } catch (err) {
    console.error('Firestore telemetry write error:', err)
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
