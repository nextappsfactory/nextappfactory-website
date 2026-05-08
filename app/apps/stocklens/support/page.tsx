import AppNav from '@/components/AppNav'
import Footer from '@/components/Footer'

const faqs = [
  { q: 'Is StockLens free?', a: 'Yes, StockLens is free to download and use. A premium upgrade may be available to remove ads or unlock additional features.' },
  { q: 'What data sources does StockLens use?', a: 'StockLens uses real-time and delayed market data from third-party financial data providers. Data accuracy depends on the provider.' },
  { q: 'Is my portfolio data stored on your servers?', a: 'No. All watchlists and portfolio data are stored locally on your device. Nothing is uploaded to our servers.' },
  { q: 'How do I add a stock to my watchlist?', a: 'Use the search bar to find a stock by its ticker symbol or company name, then tap the bookmark icon to add it to your watchlist.' },
  { q: 'How do I set a price alert?', a: 'Navigate to the stock\'s detail page, tap "Set Alert," and enter your target price. You\'ll receive a push notification when the price is reached.' },
  { q: 'The app is crashing — what should I do?', a: 'Try force-quitting the app and reopening it. If the issue persists, delete and reinstall the app. Your watchlist data will be restored from your device backup.' },
  { q: 'How do I restore a purchase?', a: 'Go to Settings within the app and tap "Restore Purchases." Make sure you are signed in with the same Apple ID used for the original purchase.' },
  { q: 'I have a feature request.', a: 'We\'d love to hear it! Send us an email at admin@hugeappfactory.com with the subject line "StockLens Feature Request."' },
]

export default function StockLensSupportPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f5f5fa' }}>
      <AppNav
        appName="StockLens"
        accentColor="#0ea5e9"
        gradient="linear-gradient(135deg, #0ea5e9, #6366f1)"
        homeUrl="http://stocklens.hugeappfactory.com"
        privacyUrl="http://stocklens.hugeappfactory.com/privacy"
        supportUrl="http://stocklens.hugeappfactory.com/support"
      />

      <section className="pt-36 pb-10 px-6 text-center">
        <div className="app-icon w-14 h-14 mx-auto mb-5 flex items-center justify-center text-2xl"
          style={{ background: 'linear-gradient(135deg, #0ea5e9, #6366f1)' }}>📊</div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">StockLens Support</h1>
        <p className="text-gray-500 max-w-md mx-auto text-sm">Find answers to common questions or reach out directly.</p>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((f) => (
            <div key={f.q} className="bg-white border border-[#e8e8f0] rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold text-gray-900 text-sm mb-2">{f.q}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-2xl mx-auto bg-white border border-[#e8e8f0] rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-semibold text-gray-900 text-sm mb-1">Still need help?</div>
            <div className="text-sm text-gray-500">Send us an email and we'll respond within 1–2 business days.</div>
          </div>
          <a
            href="mailto:admin@hugeappfactory.com?subject=StockLens Support"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white whitespace-nowrap shadow-sm"
            style={{ background: 'linear-gradient(135deg, #0ea5e9, #6366f1)' }}
          >
            Email Support
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
