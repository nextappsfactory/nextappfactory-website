import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Doyum AI — AI-powered calorie tracking',
  description: 'Take a photo of any meal and Doyum AI instantly logs the calories, macros, and nutrients. No manual entry — just eat, snap, and stay on track.',
  metadataBase: new URL('https://doyum.ai'),
  icons: {
    icon: '/doyum/icon.png',
    apple: '/doyum/icon.png',
  },
  openGraph: {
    title: 'Doyum AI — AI-powered calorie tracking',
    description: 'Take a photo of any meal and Doyum AI instantly logs the calories, macros, and nutrients.',
    url: 'https://doyum.ai',
    siteName: 'Doyum AI',
    images: ['/doyum/icon.png'],
  },
}

export default function DoyumLayout({ children }: { children: React.ReactNode }) {
  return children
}
