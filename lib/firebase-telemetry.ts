import { getApps, initializeApp, cert, type App } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { adminDb } from './firebase-admin'

// Dedicated telemetry Firestore (separate Firebase project) so per-app logs are
// isolated from the website's data — own free quota, own rules/TTL, own blast
// radius. Configure with a service-account key from the telemetry project:
//   TELEMETRY_FIREBASE_PROJECT_ID
//   TELEMETRY_FIREBASE_CLIENT_EMAIL
//   TELEMETRY_FIREBASE_PRIVATE_KEY   (with literal \n escapes)
// If those aren't set, we fall back to the website's default project so logging
// never breaks before the dedicated project is wired up.

const NAME = 'telemetry'

function resolveApp(): App | null {
  const existing = getApps().find((a) => a.name === NAME)
  if (existing) return existing

  const projectId = process.env.TELEMETRY_FIREBASE_PROJECT_ID
  const clientEmail = process.env.TELEMETRY_FIREBASE_CLIENT_EMAIL
  const privateKey = process.env.TELEMETRY_FIREBASE_PRIVATE_KEY

  if (projectId && clientEmail && privateKey) {
    return initializeApp(
      {
        credential: cert({
          projectId,
          clientEmail,
          privateKey: privateKey.replace(/\\n/g, '\n'),
        }),
      },
      NAME
    )
  }
  return null
}

const app = resolveApp()

export const usingDedicatedTelemetry = !!app
export const telemetryDb = app ? getFirestore(app) : adminDb
