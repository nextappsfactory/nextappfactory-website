import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

/* ─── App data ──────────────────────────────────────────────── */
const APPS = [
  {
    slug: 'stocklens',
    name: 'StockLens',
    tagline: 'Smart stock tracking and portfolio analysis.',
    category: 'Finance',
    icon: '📊',
    color: '#0EA5E9',
    gradient: 'linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)',
    lightBg: '#EFF6FF',
    price: '$4.99',
    priceLabel: 'one-time',
    href: 'http://stocklens.nextappfactory.com',
    features: [
      'Real-time stock & ETF quotes',
      'Custom price alerts',
      'Portfolio tracking & charts',
      'Unlimited watchlists',
    ],
    mockup: {
      title: 'Portfolio',
      value: '$24,891',
      delta: '+$582 today',
      deltaUp: true,
      rows: [
        { t: 'AAPL', v: '$8,420', c: '+1.2%', up: true },
        { t: 'NVDA', v: '$6,210', c: '+3.8%', up: true },
        { t: 'MSFT', v: '$5,180', c: '-0.4%', up: false },
      ],
    },
  },
  {
    slug: 'flipscout',
    name: 'FlipScout',
    tagline: 'Instant property profit analysis on the spot.',
    category: 'Real Estate',
    icon: '🏠',
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    lightBg: '#ECFDF5',
    price: '$6.99',
    priceLabel: 'one-time',
    href: 'http://flipscout.nextappfactory.com',
    features: [
      'Instant profit & ROI calculator',
      'After Repair Value estimation',
      'Save & compare properties',
      'Camera-based deal logging',
    ],
    mockup: null,
  },
  {
    slug: 'tomescout',
    name: 'TomeScout',
    tagline: 'Scan books, see buyback prices, flip for profit.',
    category: 'Books & Resale',
    icon: '📚',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    lightBg: '#FFFBEB',
    price: 'Free',
    priceLabel: '+ $4.99 unlock',
    href: 'http://tomescout.nextappfactory.com',
    features: [
      'Barcode scanner — instant results',
      'Live buyback prices from Amazon & eBay',
      'Profit calculator with fee estimates',
      'Book inventory tracker',
    ],
    mockup: null,
  },
  {
    slug: 'doyumai',
    name: 'Doyum AI',
    tagline: 'Snap a photo, instantly count calories & macros.',
    category: 'Health & Fitness',
    icon: '🥗',
    color: '#FF6B6B',
    gradient: 'linear-gradient(135deg, #33CDBE 0%, #FF6B6B 100%)',
    lightBg: '#FFF1F1',
    price: 'Free',
    priceLabel: 'Coming soon',
    href: 'https://doyumai.nextappfactory.com',
    features: [
      'AI calorie & macro estimates from a photo',
      'Daily targets, streaks & progress',
      'Water, weight & trend tracking',
      'Available in 29 languages',
    ],
    mockup: null,
  },
]

const REVIEWS = [
  {
    name: 'Marcus T.',
    handle: '@marcust_dev',
    app: 'StockLens',
    appColor: '#0EA5E9',
    text: 'Finally a stock tracker that doesn\'t feel like a Bloomberg terminal. Clean, fast, and no subscription fees.',
  },
  {
    name: 'Sarah K.',
    handle: '@sarahkflips',
    app: 'FlipScout',
    appColor: '#10B981',
    text: 'I use FlipScout on every property walk. The profit calculator alone saved me from two bad deals this month.',
  },
  {
    name: 'Alex R.',
    handle: '@alexr_ios',
    app: 'StockLens',
    appColor: '#0EA5E9',
    text: 'Switched from three different apps to just StockLens. Everything I need, nothing I don\'t. Night mode is gorgeous.',
  },
]

const MARQUEE_ITEMS = [
  'SwiftUI', 'Native iOS', 'No Subscriptions', 'Privacy First',
  'App Store Ready', 'Dark Mode', 'Offline Support', 'Indie Studio',
  'Swift 5.9', 'Real-Time Data',
  'SwiftUI', 'Native iOS', 'No Subscriptions', 'Privacy First',
  'App Store Ready', 'Dark Mode', 'Offline Support', 'Indie Studio',
  'Swift 5.9', 'Real-Time Data',
]

/* ─── Component ─────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div style={{ background: '#fff' }}>
      <Header />

      {/* ╔══════════════════════════════════════════════════════════╗
          ║  HERO                                                    ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <section
        style={{
          background: '#07050F',
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Background radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '40%',
            transform: 'translate(-50%,-50%)',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        {/* Subtle grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 32px',
            paddingTop: 120,
            paddingBottom: 100,
            width: '100%',
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'center',
          }}
        >
          {/* Left: copy */}
          <div className="fade-in">
            {/* Studio badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(124,58,237,0.15)',
                border: '1px solid rgba(124,58,237,0.3)',
                borderRadius: 99,
                padding: '6px 14px',
                marginBottom: 32,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ADE80', animation: 'glowPulse 2s infinite' }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#A78BFA', letterSpacing: '0.5px' }}>
                3 apps live on the App Store
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(44px, 5.5vw, 72px)',
                fontWeight: 800,
                letterSpacing: '-2px',
                lineHeight: 1.05,
                color: '#fff',
                marginBottom: 24,
              }}
            >
              Beautiful iOS apps.<br />
              <span style={{ color: '#A78BFA' }}>No compromises.</span>
            </h1>

            <p
              style={{
                fontSize: 17,
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.5)',
                maxWidth: 440,
                marginBottom: 40,
              }}
            >
              We&rsquo;re a small indie studio obsessed with quality. Every app we ship is native SwiftUI, respects your privacy, and costs a fair one-time price.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 56 }}>
              <Link href="/apps-list" className="btn-primary">
                Browse All Apps
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/contact" className="btn-ghost-white">
                Get in Touch
              </Link>
            </div>

            {/* Trust indicators */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex' }}>
                  {'★★★★★'.split('').map((s, i) => (
                    <span key={i} style={{ fontSize: 15, color: '#FBBF24' }}>{s}</span>
                  ))}
                </div>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>4.8 avg rating</span>
              </div>
              <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,0.1)' }} />
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>100K+ downloads</span>
              <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,0.1)' }} />
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>50+ countries</span>
            </div>
          </div>

          {/* Right: 3 app preview cards */}
          <div
            className="fade-in-2"
            style={{ position: 'relative', height: 480, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {/* FlipScout — back left */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-60%) rotate(-6deg)',
                width: 200,
                background: 'linear-gradient(160deg, #0D3026 0%, #064E3B 100%)',
                border: '1px solid rgba(16,185,129,0.25)',
                borderRadius: 20,
                padding: '20px 18px',
                boxShadow: '0 24px 48px rgba(0,0,0,0.4)',
                zIndex: 1,
                animation: 'float 6s ease-in-out infinite',
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 12 }}>🏠</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 4 }}>FlipScout</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', marginBottom: 16 }}>Real Estate</div>
              <div style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: 8, padding: '10px 12px' }}>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', marginBottom: 3 }}>Est. Profit</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: '#34D399' }}>$68,000</div>
              </div>
            </div>

            {/* StockLens — front center */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: 220,
                background: 'linear-gradient(160deg, #0C1A2E 0%, #0F172A 100%)',
                border: '1px solid rgba(14,165,233,0.3)',
                borderRadius: 20,
                padding: '22px 20px',
                boxShadow: '0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(14,165,233,0.1)',
                zIndex: 3,
                animation: 'float 5s ease-in-out infinite',
                animationDelay: '-2s',
              }}
            >
              <div style={{ fontSize: 30, marginBottom: 14 }}>📊</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 4 }}>StockLens</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 18 }}>Finance</div>
              <div style={{ background: 'rgba(14,165,233,0.12)', border: '1px solid rgba(14,165,233,0.2)', borderRadius: 10, padding: '12px 14px', marginBottom: 10 }}>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>Portfolio</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>$24,891</div>
                <div style={{ fontSize: 11, color: '#34D399', fontWeight: 600, marginTop: 3 }}>▲ +$582 today</div>
              </div>
              {[
                { t: 'AAPL', c: '+1.2%', up: true },
                { t: 'NVDA', c: '+3.8%', up: true },
              ].map(s => (
                <div key={s.t} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>{s.t}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: s.up ? '#34D399' : '#F87171' }}>{s.c}</span>
                </div>
              ))}
            </div>

            {/* TomeScout — back right */}
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-40%) rotate(6deg)',
                width: 200,
                background: 'linear-gradient(160deg, #2D1A03 0%, #451A03 100%)',
                border: '1px solid rgba(245,158,11,0.25)',
                borderRadius: 20,
                padding: '20px 18px',
                boxShadow: '0 24px 48px rgba(0,0,0,0.4)',
                zIndex: 2,
                animation: 'float 7s ease-in-out infinite',
                animationDelay: '-4s',
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 12 }}>📚</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 4 }}>TomeScout</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', marginBottom: 16 }}>Books & Resale</div>
              <div style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: 8, padding: '10px 12px' }}>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', marginBottom: 3 }}>Best offer</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: '#FCD34D' }}>$12.00</div>
                <div style={{ fontSize: 10, color: 'rgba(245,158,11,0.6)', marginTop: 2 }}>via eBay</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════════╗
          ║  MARQUEE                                                  ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <div
        style={{
          background: '#0D0A1C',
          borderTop: '1px solid rgba(124,58,237,0.18)',
          borderBottom: '1px solid rgba(124,58,237,0.18)',
          padding: '16px 0',
          overflow: 'hidden',
        }}
      >
        <div className="marquee-track" style={{ display: 'flex', gap: 40, whiteSpace: 'nowrap' }}>
          {MARQUEE_ITEMS.map((item, i) => (
            <span
              key={i}
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                color: 'rgba(167,139,250,0.55)',
                display: 'flex',
                alignItems: 'center',
                gap: 24,
                flexShrink: 0,
              }}
            >
              {item}
              <span style={{ color: 'rgba(124,58,237,0.35)', fontSize: 9 }}>●</span>
            </span>
          ))}
        </div>
      </div>

      {/* ╔══════════════════════════════════════════════════════════╗
          ║  APPS SHOWCASE                                            ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <section style={{ background: '#F9FAFB', padding: '100px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-label" style={{ marginBottom: 16 }}>Our Apps</div>
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 800,
                letterSpacing: '-1.5px',
                color: '#07050F',
                marginBottom: 16,
                lineHeight: 1.1,
              }}
            >
              Three apps. One standard.
            </h2>
            <p style={{ fontSize: 16, color: '#6B7280', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
              Every app we ship meets the same bar — native, polished, and honest.
            </p>
          </div>

          {/* App cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {APPS.map((app) => (
              <a
                key={app.slug}
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                className="app-card"
                style={{
                  background: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 20,
                  overflow: 'hidden',
                  display: 'block',
                }}
              >
                {/* Gradient top bar */}
                <div style={{ background: app.gradient, height: 6 }} />

                <div style={{ padding: 28 }}>
                  {/* Icon + meta */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 14,
                        background: app.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 24,
                      }}
                    >
                      {app.icon}
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 18, fontWeight: 800, color: '#07050F', letterSpacing: '-0.5px' }}>
                        {app.price}
                      </div>
                      <div style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 500 }}>{app.priceLabel}</div>
                    </div>
                  </div>

                  {/* Name + tagline */}
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 20, fontWeight: 800, color: '#07050F', letterSpacing: '-0.5px', marginBottom: 6 }}>
                      {app.name}
                    </div>
                    <div style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.55 }}>{app.tagline}</div>
                  </div>

                  {/* Category badge */}
                  <div
                    style={{
                      display: 'inline-block',
                      fontSize: 11,
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: 99,
                      background: `${app.color}15`,
                      color: app.color,
                      marginBottom: 20,
                    }}
                  >
                    {app.category}
                  </div>

                  {/* Features */}
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                    {app.features.map(f => (
                      <li key={f} className="feature-row">
                        <span className="feature-dot" style={{ background: app.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: 20,
                      borderTop: '1px solid #F3F4F6',
                    }}
                  >
                    <span style={{ fontSize: 13, fontWeight: 600, color: app.color }}>Learn more</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={app.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════════╗
          ║  FEATURED — DOYUM AI                                      ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <section style={{ background: '#fff', padding: '100px 32px', borderTop: '1px solid #F3F4F6' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ marginBottom: 16 }}>New · Health &amp; Fitness</div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#07050F', marginBottom: 16, lineHeight: 1.1 }}>
              Meet Doyum AI
            </h2>
            <p style={{ fontSize: 16, color: '#6B7280', maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
              Snap a photo of your meal and get instant calorie &amp; macro estimates. Track your targets, streaks, water and weight — in 29 languages.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 28, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            {[
              { src: 'today', label: 'Daily calories & macros' },
              { src: 'paywall', label: 'Doyum Pro' },
              { src: 'water', label: 'Water tracking' },
            ].map((shot, i) => (
              <div
                key={shot.src}
                style={{
                  borderRadius: 36,
                  overflow: 'hidden',
                  boxShadow: '0 30px 70px rgba(0,0,0,0.20)',
                  border: '1px solid #EEE',
                  transform: i === 1 ? 'scale(1.06)' : 'none',
                  zIndex: i === 1 ? 2 : 1,
                }}
              >
                <Image src={`/doyum/${shot.src}.png`} alt={`Doyum AI — ${shot.label}`} width={248} height={539} style={{ display: 'block', width: 248, height: 'auto' }} />
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 52 }}>
            <a href="https://doyumai.nextappfactory.com" className="btn-primary" style={{ background: '#FF6B6B' }}>
              Learn more about Doyum AI
            </a>
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════════╗
          ║  PHILOSOPHY                                               ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <section style={{ background: '#07050F', padding: '100px 32px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-label" style={{ color: '#A78BFA', marginBottom: 16 }}>Our Philosophy</div>
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 800,
                letterSpacing: '-1.5px',
                color: '#fff',
                marginBottom: 16,
                lineHeight: 1.1,
              }}
            >
              Why our apps feel different.
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', maxWidth: 440, margin: '0 auto', lineHeight: 1.7 }}>
              We make deliberate choices that most app studios won&rsquo;t. Here&rsquo;s what we stand for.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {[
              {
                number: '01',
                title: 'Native SwiftUI',
                body: 'We only build with SwiftUI. No cross-platform shortcuts, no React Native wrappers. Your app performs exactly the way iOS was designed to perform.',
                items: ['Follows iOS HIG exactly', 'Hardware-accelerated animations', 'Full Dynamic Island & Live Activities support', 'First-party look and feel'],
              },
              {
                number: '02',
                title: 'Privacy First',
                body: 'Your data is yours. We design apps where everything stays on your device by default. No analytics, no invisible data harvesting, no mandatory accounts.',
                items: ['Data stored locally on your device', 'Zero behavioral tracking', 'No required sign-in', 'Transparent data practices'],
              },
              {
                number: '03',
                title: 'Honest Pricing',
                body: 'One price, forever. We don\'t believe in monthly fees for features you already paid for. Buy it once, own it forever.',
                items: ['One-time purchase model', 'No paywalled core features', 'Free updates for life', 'Supports independent development'],
              },
            ].map((p, i) => (
              <div
                key={p.number}
                style={{
                  background: '#0D0A1C',
                  padding: '40px 36px',
                  borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  transition: 'background 0.2s',
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '2px',
                    color: 'rgba(167,139,250,0.5)',
                    marginBottom: 20,
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {p.number}
                </div>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: '#fff',
                    letterSpacing: '-0.5px',
                    marginBottom: 14,
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: 28 }}>
                  {p.body}
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {p.items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════════╗
          ║  REVIEWS                                                  ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <section style={{ background: '#fff', padding: '100px 32px', borderTop: '1px solid #F3F4F6' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ marginBottom: 16 }}>Reviews</div>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 800,
                letterSpacing: '-1px',
                color: '#07050F',
                lineHeight: 1.1,
              }}
            >
              People love our apps.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {REVIEWS.map(r => (
              <div key={r.name} className="review-card">
                {/* Stars */}
                <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
                  {'★★★★★'.split('').map((s, i) => (
                    <span key={i} style={{ color: '#FBBF24', fontSize: 14 }}>{s}</span>
                  ))}
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: '#374151', marginBottom: 24 }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, borderTop: '1px solid #F3F4F6' }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#07050F' }}>{r.name}</div>
                    <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 2 }}>{r.handle}</div>
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: 99,
                      background: `${r.appColor}12`,
                      color: r.appColor,
                    }}
                  >
                    {r.app}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════════╗
          ║  CTA                                                       ║
          ╚══════════════════════════════════════════════════════════╝ */}
      <section style={{ background: '#07050F', padding: '100px 32px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <Image
            src="/nextappfactory-icon.svg"
            alt="Next App Factory"
            width={60}
            height={60}
            style={{ borderRadius: 16, margin: '0 auto 28px' }}
          />
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 54px)',
              fontWeight: 800,
              letterSpacing: '-1.5px',
              color: '#fff',
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Ready to download?
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: 40, maxWidth: 400, margin: '0 auto 40px' }}>
            Pick an app and get started. No accounts, no subscriptions — just great iOS software.
          </p>

          {/* App pills */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
            {APPS.map(app => (
              <a
                key={app.slug}
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '10px 18px',
                  borderRadius: 12,
                  background: `${app.color}12`,
                  border: `1px solid ${app.color}28`,
                  color: app.color,
                  fontSize: 14,
                  fontWeight: 600,
                  transition: 'background 0.2s, border-color 0.2s',
                }}
              >
                <span style={{ fontSize: 18 }}>{app.icon}</span>
                {app.name}
              </a>
            ))}
          </div>

          <Link href="/contact" className="btn-white">
            Contact the Studio
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
