import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Huge App Factory — iOS Apps',
  description: 'We build beautifully crafted iOS apps. Explore our collection.',
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
