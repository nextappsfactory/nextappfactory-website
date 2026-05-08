import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #6C5CE7, #A855F7)' }}>
            H
          </div>
          <span className="font-bold text-gray-900 text-sm">Huge App Factory</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-gray-500 font-medium">
          <Link href="/apps-list" className="hover:text-gray-900 transition-colors">Apps</Link>
          <Link href="/about" className="hover:text-gray-900 transition-colors">Studio</Link>
          <Link href="/about" className="hover:text-gray-900 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-gray-900 transition-colors">Contact</Link>
        </nav>

        <Link
          href="/apps-list"
          className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #6C5CE7, #A855F7)' }}
        >
          Get Started
        </Link>
      </div>
    </header>
  )
}
