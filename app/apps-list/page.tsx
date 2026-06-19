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
    subdomainUrl: 'http://stocklens.nextappfactory.com',
  },
  {
    slug: 'flipscout',
    name: 'FlipScout',
    tagline: 'Find, evaluate, and profit from real estate flip opportunities.',
    icon: '🏠',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    shadowColor: '#10b981',
    category: 'Real Estate',
    subdomainUrl: 'http://flipscout.nextappfactory.com',
  },
  {
    slug: 'tomescout',
    name: 'TomeScout',
    tagline: 'Find, list, and flip used books for profit.',
    icon: '📚',
    gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
    shadowColor: '#F59E0B',
    category: 'Books & Resale',
    subdomainUrl: 'http://tomescout.nextappfactory.com',
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

        </div>
      </section>

      <Footer />
    </div>
  )
}
