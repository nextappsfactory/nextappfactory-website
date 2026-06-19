import Link from 'next/link'

interface AppNavProps {
  appName: string
  accentColor: string
  gradient: string
  homeUrl: string
  privacyUrl: string
  supportUrl: string
}

export default function AppNav({ appName, accentColor, gradient, homeUrl, privacyUrl, supportUrl }: AppNavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-[#f5f5fa]/80 border-b border-[#e8e8f0]">
      <div className="flex items-center gap-4">
        <Link href="http://nextappfactory.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="hidden sm:inline">Huge App Factory</span>
        </Link>
        <span className="text-gray-200 hidden sm:inline">/</span>
        <Link href={homeUrl} className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors hidden sm:inline">
          {appName}
        </Link>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-400">
        <Link href={supportUrl} className="hover:text-gray-900 transition-colors">Support</Link>
        <Link href={privacyUrl} className="hover:text-gray-900 transition-colors">Privacy</Link>
        <a
          href="#download"
          className="px-4 py-1.5 rounded-full text-xs font-semibold text-white shadow-sm"
          style={{ background: gradient }}
        >
          Download
        </a>
      </div>
    </nav>
  )
}
