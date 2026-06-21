import AppNav from '@/components/AppNav'
import Footer from '@/components/Footer'

const sections = [
  { title: 'Information We Collect', body: 'StockLens does not require an account to use. We may collect anonymous usage analytics to improve the app. We do not collect or store financial account details, social security numbers, or brokerage credentials.' },
  { title: 'Market Data', body: 'Stock price and market data displayed in StockLens is fetched from third-party financial data providers. We do not store your search history or watchlist data on our servers — all data is kept locally on your device.' },
  { title: 'Advertising', body: 'The free version of StockLens may display ads served by Google AdMob. AdMob may collect identifiers and usage data to serve relevant ads. You can review Google\'s privacy policy at policies.google.com/privacy.' },
  { title: 'In-App Purchases', body: 'Any purchases are processed entirely by Apple through the App Store. We do not receive or store your payment information.' },
  { title: 'Data Security', body: 'Your watchlists and portfolio data are stored locally on your device. We use Apple\'s standard data protection APIs to keep your data secure.' },
  { title: 'Contact', body: 'For privacy questions related to StockLens, email us at admin@nextappfactory.com.' },
]

export default function StockLensPrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f5f5fa' }}>
      <AppNav
        appName="StockLens"
        accentColor="#0ea5e9"
        gradient="linear-gradient(135deg, #0ea5e9, #6366f1)"
        homeUrl="http://stocklens.nextappfactory.com"
        privacyUrl="http://stocklens.nextappfactory.com/privacy"
        supportUrl="http://stocklens.nextappfactory.com/support"
      />

      <section className="pt-36 pb-10 px-6 text-center">
        <div className="app-icon w-14 h-14 mx-auto mb-5 flex items-center justify-center text-2xl"
          style={{ background: 'linear-gradient(135deg, #0ea5e9, #6366f1)' }}>📊</div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">StockLens Privacy Policy</h1>
        <p className="text-gray-400 text-sm">Effective date: January 1, 2025</p>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-2xl mx-auto bg-white border border-[#e8e8f0] rounded-3xl p-8 shadow-sm space-y-7">
          <p className="text-sm text-gray-500 leading-relaxed">
            Your privacy matters. This policy explains how StockLens, developed by Next App Factory LLC,
            handles your information.
          </p>
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-sm font-bold text-gray-900 mb-1.5">{s.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
