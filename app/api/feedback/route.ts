import { NextResponse } from 'next/server'
import { adminDb } from '@/lib/firebase-admin'

// Problem reports from inside the apps. Auto-attached diagnostics make each
// report actionable; `category` lets us aggregate the most common issues.
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

  try {
    await adminDb.collection('problem_reports').add({
      app: cap(body.app, 60) || 'tvremote',
      category: cap(body.category, 80) || 'general',
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
      status: 'new',
      createdAt: new Date().toISOString(),
    })
  } catch (err) {
    console.error('Firestore feedback write error:', err)
    return NextResponse.json({ error: 'Failed to save report' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
