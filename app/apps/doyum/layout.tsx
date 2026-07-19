import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Doyum AI — AI-powered calorie tracking, together',
  description: 'Take a photo of any meal and Doyum AI instantly logs the calories, macros, and nutrients. Share Moments with friends and groups, and keep each other on track — in 29 languages.',
  metadataBase: new URL('https://doyum.ai'),
  icons: {
    icon: '/doyum/icon.png',
    apple: '/doyum/icon.png',
  },
  openGraph: {
    title: 'Doyum AI — AI-powered calorie tracking, together',
    description: 'Snap a photo to log calories and macros, and share the journey with friends and groups.',
    url: 'https://doyum.ai',
    siteName: 'Doyum AI',
    images: ['/doyum/icon.png'],
  },
}

export default function DoyumLayout({ children }: { children: React.ReactNode }) {
  return children
}
