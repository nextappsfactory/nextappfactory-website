import { NextResponse } from 'next/server'
import { adminDb } from '@/lib/firebase-admin'

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    await adminDb.collection('contact_submissions').add({
      name,
      email,
      subject: subject || '',
      message,
      createdAt: new Date().toISOString(),
    })
  } catch (err) {
    console.error('Firestore write error:', err)
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
