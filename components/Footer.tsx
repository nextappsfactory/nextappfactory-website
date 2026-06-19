import Link from 'next/link'
import Image from 'next/image'

const LINKS = {
  Studio: [
    { label: 'About',    href: '/about' },
    { label: 'All Apps', href: '/apps-list' },
    { label: 'Contact',  href: '/contact' },
  ],
  Apps: [
    { label: 'StockLens',  href: 'http://stocklens.nextappfactory.com' },
    { label: 'FlipScout',  href: 'http://flipscout.nextappfactory.com' },
    { label: 'TomeScout',  href: 'http://tomescout.nextappfactory.com' },
  ],
  Legal: [
    { label: 'Privacy Policy',   href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: '#07050F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 32px 32px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 56 }}>

          {/* Brand column */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <Image src="/hugeappfactory-icon.svg" alt="Huge App Factory" width={30} height={30} style={{ borderRadius: 8 }} />
              <span style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>Huge App Factory</span>
            </Link>
            <p style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(255,255,255,0.4)', maxWidth: 240, marginBottom: 20 }}>
              Indie iOS studio building native apps with SwiftUI. No subscriptions. No compromises.
            </p>
            <a
              href="mailto:contact@nextappfactory.com"
              style={{ fontSize: 13, color: '#A78BFA', fontWeight: 500 }}
            >
              contact@nextappfactory.com
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([col, items]) => (
            <div key={col}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>
                {col}
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {items.map(({ label, href }) => {
                  const isExternal = href.startsWith('http')
                  return (
                    <li key={label}>
                      {isExternal ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', transition: 'color 0.15s' }}
                          className="hover:text-white"
                        >
                          {label}
                        </a>
                      ) : (
                        <Link
                          href={href}
                          style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', transition: 'color 0.15s' }}
                          className="hover:text-white"
                        >
                          {label}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>
            © {new Date().getFullYear()} Huge App Factory LLC. All rights reserved.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>
            Made with SwiftUI ·{' '}
            <span style={{ color: 'rgba(124,58,237,0.6)' }}>nextappfactory.com</span>
          </p>
        </div>

      </div>
    </footer>
  )
}
