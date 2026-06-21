import Header from '@/components/Header'
import Footer from '@/components/Footer'

const stack = [
  { icon: '📱', label: 'SwiftUI', desc: 'Native iOS UI framework' },
  { icon: '🔐', label: 'StoreKit 2', desc: 'In-app purchases & subscriptions' },
  { icon: '💾', label: 'Core Data', desc: 'Local persistence' },
  { icon: '📡', label: 'REST APIs', desc: 'Live data & backend integration' },
  { icon: '📢', label: 'AdMob', desc: 'Ad monetization' },
  { icon: '🍎', label: 'App Store Connect', desc: 'Distribution & analytics' },
]

const values = [
  {
    icon: '🎯',
    title: 'Ship with intention',
    desc: 'Every feature we add has a reason. We avoid bloat and focus on what actually matters to users.',
  },
  {
    icon: '✨',
    title: 'Polish over speed',
    desc: "We'd rather take a week longer and ship something that feels right than rush something mediocre.",
  },
  {
    icon: '🔒',
    title: 'Privacy by default',
    desc: "We collect the minimum data needed. User privacy isn't a feature — it's a baseline.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500 mb-3">Our Story</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          About Next App Factory
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          An independent iOS studio building polished, purposeful apps — one at a time.
        </p>
      </section>

      {/* Mission */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto bg-white border border-[#e8e8f0] rounded-3xl p-10 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            Next App Factory LLC was founded with one belief: great software should be accessible,
            simple, and delightful. We build iOS apps that solve real problems without adding
            unnecessary complexity.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            From finance tools to party games, every app in our portfolio goes through the same
            process — deep thinking about the problem, careful design, and obsessive attention
            to the user experience.
          </p>
          <p className="text-gray-500 leading-relaxed">
            We're a small independent studio, which means every app gets the care and focus it
            deserves. No feature factories, no shortcuts.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What we believe in</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-[#e8e8f0] rounded-2xl p-6 shadow-sm">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {stack.map((s) => (
              <div key={s.label} className="bg-white border border-[#e8e8f0] rounded-2xl p-4 flex items-center gap-3 shadow-sm">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{s.label}</div>
                  <div className="text-xs text-gray-400">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">
        <div className="max-w-2xl mx-auto text-center bg-white border border-[#e8e8f0] rounded-3xl py-14 px-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Want to work together?</h2>
          <p className="text-gray-500 mb-8 text-sm">Have an idea or want to get in touch? We'd love to hear from you.</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white shadow-md transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
