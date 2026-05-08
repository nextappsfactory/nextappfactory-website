import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AppCard, { AppConfig } from '@/components/AppCard'

const apps: AppConfig[] = [
  {
    slug: 'stocklens',
    name: 'StockLens',
    tagline: 'Smart stock tracking and portfolio analysis at a glance.',
    icon: '📊',
    gradient: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
    shadowColor: '#0ea5e9',
    category: 'Finance',
    subdomainUrl: 'http://stocklens.hugeappfactory.com',
  },
  {
    slug: 'flipscout',
    name: 'FlipScout',
    tagline: 'Find, evaluate, and profit from real estate flip opportunities.',
    icon: '🏠',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    shadowColor: '#10b981',
    category: 'Real Estate',
    subdomainUrl: 'http://flipscout.hugeappfactory.com',
  },
  {
    slug: 'truthordare',
    name: 'Truth or Dare',
    tagline: 'The ultimate party game with 500+ prompts across 5 categories.',
    icon: '🎲',
    gradient: 'linear-gradient(135deg, #f43f5e, #e11d48)',
    shadowColor: '#f43f5e',
    category: 'Games',
    subdomainUrl: 'http://truthordare.hugeappfactory.com',
  },
  {
    slug: 'simpletodo',
    name: 'Simple-toDo',
    tagline: 'Minimal, distraction-free task management. Coming soon.',
    icon: '✅',
    gradient: 'linear-gradient(135deg, #a855f7, #7c3aed)',
    shadowColor: '#a855f7',
    badge: 'Coming Soon',
    category: 'Productivity',
    subdomainUrl: 'http://simpletodo.hugeappfactory.com',
  },
]

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-36 pb-12 px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-2">Our Portfolio</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">All Apps</h1>
        <p className="text-gray-500 max-w-lg mx-auto text-sm">
          Every app we've shipped — crafted with SwiftUI, designed for real people.
        </p>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {apps.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>

          <div className="mt-12 bg-white border border-gray-100 rounded-3xl p-8 text-center shadow-sm">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">More apps coming soon</h3>
            <p className="text-sm text-gray-500 max-w-sm mx-auto">
              We're always building. Follow along or reach out if you have an idea.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
