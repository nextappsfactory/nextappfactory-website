import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 68,
        background: 'rgba(7,5,15,0.80)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Image src="/hugeappfactory-icon.svg" alt="Huge App Factory" width={32} height={32} style={{ borderRadius: 8 }} />
          <span style={{ fontSize: 15, fontWeight: 700, color: '#fff', letterSpacing: '-0.3px' }}>
            Huge App Factory
          </span>
        </Link>

        {/* Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {[
            { href: '/apps-list', label: 'Apps' },
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.55)', transition: 'color 0.15s' }}
              className="hover:text-white"
            >
              {label}
            </Link>
          ))}

          <Link
            href="/apps-list"
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: '#fff',
              background: '#7C3AED',
              padding: '8px 18px',
              borderRadius: 8,
              transition: 'background 0.15s',
            }}
            className="hover:bg-violet-700"
          >
            Browse Apps
          </Link>
        </nav>

      </div>
    </header>
  )
}
