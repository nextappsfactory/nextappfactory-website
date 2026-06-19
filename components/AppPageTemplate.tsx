import Footer from '@/components/Footer'
import Link from 'next/link'

export interface AppFeature {
  icon: string
  title: string
  desc: string
}

export interface AppPageConfig {
  name: string
  tagline: string
  description: string
  icon: string
  gradient: string
  accentColor: string
  lightBg: string
  category: string
  features: AppFeature[]
  appStoreUrl?: string
  privacyUrl: string
  supportUrl: string
  homeUrl: string
  contactEmail: string
  pricing?: {
    free: string[]
    paid?: { price: string; label: string; perks: string[] }
  }
}

export default function AppPageTemplate({ app }: { app: AppPageConfig }) {
  return (
    <div className="min-h-screen bg-white">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <Link href="http://nextappfactory.com"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="hidden sm:inline">Huge App Factory</span>
          </Link>

          <div className="flex items-center gap-1">
            <div className="app-icon w-6 h-6 flex items-center justify-center text-xs"
              style={{ background: app.gradient }}>{app.icon}</div>
            <span className="font-semibold text-gray-900 text-sm ml-1.5">{app.name}</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-400">
            <a href={`mailto:${app.contactEmail}`} className="hover:text-gray-900 transition-colors hidden sm:block">Contact</a>
            <Link href={app.supportUrl} className="hover:text-gray-900 transition-colors hidden sm:block">Support</Link>
            <Link href={app.privacyUrl} className="hover:text-gray-900 transition-colors hidden sm:block">Privacy</Link>
            <a href={app.appStoreUrl || '#'}
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-white transition-all hover:opacity-90"
              style={{ background: app.gradient }}>
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-28 pb-20 px-6 text-center relative overflow-hidden">
        {/* Background blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: app.gradient }} />

        <div className="relative max-w-2xl mx-auto">
          {/* Category */}
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6"
            style={{ background: app.lightBg, color: app.accentColor }}>
            {app.category}
          </span>

          {/* App Icon */}
          <div className="app-icon w-24 h-24 mx-auto mb-6 flex items-center justify-center text-4xl shadow-xl"
            style={{ background: app.gradient, boxShadow: `0 20px 50px ${app.accentColor}35` }}>
            {app.icon}
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">{app.name}</h1>
          <p className="text-lg text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">{app.tagline}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a href={app.appStoreUrl || '#'}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl text-sm font-semibold text-white shadow-lg transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: app.gradient, boxShadow: `0 8px 24px ${app.accentColor}30` }}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on the App Store
            </a>
            <p className="text-xs text-gray-400">Free to download · iOS 16+</p>
          </div>
        </div>
      </section>

      {/* ── SCREENSHOT STRIP ── */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex-shrink-0 snap-start w-44 h-80 rounded-3xl flex items-center justify-center text-3xl shadow-md border border-gray-100"
                style={{ background: i % 2 === 0 ? app.lightBg : `${app.accentColor}08` }}>
                {app.icon}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-300 mt-3">Screenshots coming soon</p>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-16 px-6" style={{ background: '#FAFAFA' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">About {app.name}</h2>
          <p className="text-gray-500 leading-relaxed text-base">{app.description}</p>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Everything you need</h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Thoughtfully designed features that make {app.name} stand out.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {app.features.map((f) => (
              <div key={f.title} className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
                  style={{ background: app.lightBg }}>
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING (optional) ── */}
      {app.pricing && (
        <section className="py-20 px-6" style={{ background: '#FAFAFA' }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Simple Pricing</h2>
              <p className="text-gray-500 text-sm">Start free. Upgrade if you love it.</p>
            </div>
            <div className={`grid grid-cols-1 ${app.pricing.paid ? 'sm:grid-cols-2' : ''} gap-5`}>
              {/* Free */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="text-2xl font-extrabold text-gray-900 mb-1">Free</div>
                <div className="text-sm text-gray-400 mb-5">No credit card needed</div>
                <ul className="space-y-2.5 mb-6">
                  {app.pricing.free.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>{p}
                    </li>
                  ))}
                </ul>
                <a href={app.appStoreUrl || '#'}
                  className="block w-full py-2.5 rounded-xl text-sm font-semibold text-center border border-gray-200 text-gray-700 hover:border-gray-300 transition-colors">
                  Download Free
                </a>
              </div>

              {/* Paid */}
              {app.pricing.paid && (
                <div className="rounded-2xl p-6 shadow-sm text-white relative overflow-hidden"
                  style={{ background: app.gradient }}>
                  <div className="absolute top-3 right-3 bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    BEST VALUE
                  </div>
                  <div className="text-2xl font-extrabold mb-1">{app.pricing.paid.price}</div>
                  <div className="text-sm text-white/70 mb-5">{app.pricing.paid.label}</div>
                  <ul className="space-y-2.5 mb-6">
                    {app.pricing.paid.perks.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-white/90">
                        <span className="text-white mt-0.5 flex-shrink-0">✓</span>{p}
                      </li>
                    ))}
                  </ul>
                  <a href={app.appStoreUrl || '#'}
                    className="block w-full py-2.5 rounded-xl text-sm font-semibold text-center bg-white/15 hover:bg-white/25 transition-colors">
                    Get {app.name}
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── CONTACT ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Get in touch</h2>
          <p className="text-gray-400 text-sm mb-6">Questions, feedback, or bug reports? We read every message.</p>
          <a href={`mailto:${app.contactEmail}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all hover:opacity-90"
            style={{ background: app.gradient }}>
            📧 {app.contactEmail}
          </a>
        </div>
      </section>

      {/* ── DOWNLOAD CTA ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto rounded-3xl p-12 text-center text-white relative overflow-hidden"
          style={{ background: app.gradient }}>
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="relative">
            <div className="text-5xl mb-5">{app.icon}</div>
            <h2 className="text-3xl font-extrabold mb-3">Ready to try {app.name}?</h2>
            <p className="text-white/70 mb-8 text-sm max-w-sm mx-auto">
              Free to download on the App Store. No subscription required to get started.
            </p>
            <a href={app.appStoreUrl || '#'}
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-white font-semibold text-sm transition-all hover:bg-opacity-90"
              style={{ color: app.accentColor }}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on the App Store
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
