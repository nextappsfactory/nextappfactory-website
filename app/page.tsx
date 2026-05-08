import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

const apps = [
  {
    slug: 'stocklens',
    name: 'StockLens',
    description: 'Smart portfolio management and real-time market insights for investors.',
    icon: '📊',
    gradient: 'linear-gradient(135deg, #0EA5E9, #6366F1)',
    category: 'Finance',
    url: 'http://stocklens.hugeappfactory.com',
  },
  {
    slug: 'flipscout',
    name: 'FlipScout',
    description: 'Find, evaluate, and profit from real estate flip opportunities near you.',
    icon: '🏠',
    gradient: 'linear-gradient(135deg, #10B981, #059669)',
    category: 'Real Estate',
    url: 'http://flipscout.hugeappfactory.com',
  },
  {
    slug: 'truthordare',
    name: 'Truth or Dare',
    description: 'The ultimate party game with 500+ prompts across 5 hilarious categories.',
    icon: '🎲',
    gradient: 'linear-gradient(135deg, #F43F5E, #E11D48)',
    category: 'Games',
    url: 'http://truthordare.hugeappfactory.com',
  },
  {
    slug: 'simpletodo',
    name: 'Simple-toDo',
    description: 'Minimal, distraction-free task management built for focused people.',
    icon: '✅',
    gradient: 'linear-gradient(135deg, #A855F7, #7C3AED)',
    category: 'Productivity',
    url: 'http://simpletodo.hugeappfactory.com',
    comingSoon: true,
  },
]

const stats = [
  { value: '50+', label: 'APPS SHIPPED', icon: '📱', iconBg: '#EDE9FE', iconColor: '#7C3AED' },
  { value: '10M+', label: 'DOWNLOADS', icon: '⬇️', iconBg: '#E0F2FE', iconColor: '#0EA5E9' },
  { value: '120+', label: 'COUNTRIES', icon: '🌍', iconBg: '#D1FAE5', iconColor: '#10B981' },
]

const features = [
  {
    icon: '💎',
    iconBg: '#EDE9FE',
    title: 'Quality',
    desc: 'Crafted with precision and care. Every pixel and interaction is optimized for the best possible user experience.',
  },
  {
    icon: '🛡️',
    iconBg: '#DBEAFE',
    title: 'Privacy',
    desc: "Your data stays yours, always. We implement bank-grade security protocols to ensure complete peace of mind.",
  },
  {
    icon: '🔄',
    iconBg: '#D1FAE5',
    title: 'Free Updates',
    desc: 'Continuous improvements for life. We regularly ship new features and optimizations to keep apps feeling fresh.',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ── HERO ── */}
      <section className="pt-24 pb-6 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[540px]">

            {/* Left */}
            <div className="pt-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ background: '#EDE9FE', color: '#6C5CE7' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                New Era Of Mobile Apps
              </div>

              <h1 className="text-5xl sm:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight mb-5">
                <span className="text-gray-900">We Build Apps</span>
                <br />
                <span style={{
                  background: 'linear-gradient(135deg, #6C5CE7, #A855F7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  People Love.
                </span>
              </h1>

              <p className="text-[15px] text-gray-500 leading-relaxed mb-8 max-w-[420px]">
                Creating world-class mobile experiences that transform ideas into digital
                reality. Beautiful, fast, and built for scale.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/apps-list"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg shadow-purple-200"
                  style={{ background: 'linear-gradient(135deg, #6C5CE7, #A855F7)' }}
                >
                  Explore Our Apps
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/apps-list"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-gray-700 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
                >
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  View Showreel
                </Link>
              </div>
            </div>

            {/* Right — hero visual */}
            <div className="relative hidden lg:block h-[520px]">
              {/* Main photo card */}
              <div className="absolute right-0 top-8 w-64 h-80 rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/80"
                style={{ background: 'linear-gradient(160deg, #f3f0ff 0%, #ede9fe 40%, #fdf4ff 100%)' }}>
                {/* Placeholder for real photo */}
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="text-5xl mb-3">👩‍💻</div>
                    <p className="text-purple-600 text-xs font-medium">Add your photo here</p>
                  </div>
                </div>
              </div>

              {/* Activity tracker card — top left overlapping */}
              <div className="absolute left-0 top-6 bg-white rounded-2xl shadow-xl p-4 w-44 border border-gray-100">
                <div className="text-[10px] font-semibold text-gray-400 mb-2 uppercase tracking-wide">Activity</div>
                <div className="text-xs font-bold text-gray-800 leading-snug mb-2">WELL DONE!<br />YOU HIT YOUR GOAL.</div>
                <div className="text-[10px] text-gray-400 mb-2">Oct 2024</div>
                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 rounded-lg px-2 py-1 text-[10px] font-bold text-gray-700">00</div>
                  <span className="text-gray-400 text-xs">:</span>
                  <div className="bg-gray-100 rounded-lg px-2 py-1 text-[10px] font-bold text-gray-700">03</div>
                  <div className="bg-purple-100 rounded-lg px-2 py-1 text-[10px] font-bold text-purple-700">13</div>
                </div>
              </div>

              {/* Location pill */}
              <div className="absolute left-16 top-52 bg-white rounded-full shadow-lg px-3 py-1.5 flex items-center gap-1.5 border border-gray-100">
                <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-[10px] font-semibold text-gray-700">Distance</span>
                <span className="text-[10px] font-bold text-purple-600">3.8 km</span>
              </div>

              {/* First Workout card — bottom right */}
              <div className="absolute right-2 bottom-4 bg-white rounded-2xl shadow-xl p-3 w-48 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-gray-900 mb-0.5">First Workout</div>
                    <div className="text-[10px] text-gray-400">View Report</div>
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                    style={{ background: 'linear-gradient(135deg, #6C5CE7, #A855F7)' }}>
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating dots */}
              <div className="absolute top-4 left-44 w-2.5 h-2.5 rounded-full bg-purple-300 opacity-70" />
              <div className="absolute top-16 right-6 w-2 h-2 rounded-full bg-pink-300 opacity-60" />
              <div className="absolute bottom-24 left-6 w-2 h-2 rounded-full bg-blue-300 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-14 px-6" style={{ background: '#FAFAFA' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: s.iconBg }}>
                  {s.icon}
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-gray-900">{s.value}</div>
                  <div className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase mt-0.5">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED APPS ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Featured Apps</h2>
            <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
              Discover our portfolio of top-charting applications designed with focus on
              user experience and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {apps.map((app) => (
              <a
                key={app.slug}
                href={app.url}
                className="group bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
              >
                {/* Top row: icon + category */}
                <div className="flex items-start justify-between mb-3">
                  <div className="app-icon w-12 h-12 flex items-center justify-center text-2xl shadow-sm"
                    style={{ background: app.gradient }}>
                    {app.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-gray-400">{app.category}</span>
                </div>

                <h3 className="font-bold text-gray-900 text-base mb-1.5">{app.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">{app.description}</p>

                {/* Visit App button */}
                <button
                  className="w-full py-2 rounded-xl text-sm font-semibold border border-gray-200 text-gray-600 group-hover:border-purple-300 group-hover:text-purple-600 transition-all"
                >
                  {app.comingSoon ? 'Coming Soon' : 'Visit App'}
                </button>
              </a>
            ))}

            {/* More coming soon card */}
            <div className="bg-gray-50 border border-dashed border-gray-200 rounded-2xl p-5 flex flex-col items-center justify-center text-center min-h-[200px]">
              <div className="text-3xl mb-2">🚀</div>
              <div className="font-semibold text-gray-400 text-sm">More apps coming soon</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="py-20 px-6" style={{ background: '#FAFAFA' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Why Choose Our Apps</h2>
            <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
              We don&apos;t just build apps; we engineer experiences that users love to return to every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="text-center">
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl"
                  style={{ background: f.iconBg }}>
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
