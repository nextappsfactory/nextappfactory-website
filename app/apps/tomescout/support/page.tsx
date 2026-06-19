import AppNav from '@/components/AppNav'
import Footer from '@/components/Footer'

const faqs = [
  { q: 'Is TomeScout free?', a: 'Yes, TomeScout is free to download with up to 50 scans per month. A one-time $4.99 upgrade unlocks unlimited scans and the full inventory manager.' },
  { q: 'How does the barcode scanner work?', a: 'Point your camera at any book\'s ISBN barcode and TomeScout instantly looks up current buyback prices across multiple resale platforms.' },
  { q: 'Which platforms does TomeScout check prices on?', a: 'TomeScout fetches buyback and resale prices from major platforms including Amazon, eBay, and BookFinder. Coverage may vary by region.' },
  { q: 'Is my inventory stored on your servers?', a: 'No. Your book inventory and scan history are stored locally on your device. Nothing is uploaded to our servers.' },
  { q: 'What if the barcode won\'t scan?', a: 'Try the manual search option — you can look up any book by title, author, or ISBN number directly.' },
  { q: 'How do I restore my purchase?', a: 'Go to Settings in the app and tap "Restore Purchases." Make sure you are signed in with the same Apple ID used for the original purchase.' },
  { q: 'I have a feature request.', a: 'We\'d love to hear it! Send us an email at contact@tomescout.nextappfactory.com with the subject line "TomeScout Feature Request."' },
]

export default function TomeScoutSupportPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f5f5fa' }}>
      <AppNav
        appName="TomeScout"
        accentColor="#F59E0B"
        gradient="linear-gradient(135deg, #F59E0B, #D97706)"
        homeUrl="http://tomescout.nextappfactory.com"
        privacyUrl="http://tomescout.nextappfactory.com/privacy"
        supportUrl="http://tomescout.nextappfactory.com/support"
      />

      <section className="pt-36 pb-10 px-6 text-center">
        <div className="app-icon w-14 h-14 mx-auto mb-5 flex items-center justify-center text-2xl"
          style={{ background: 'linear-gradient(135deg, #F59E0B, #D97706)' }}>📚</div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">TomeScout Support</h1>
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
            href="mailto:contact@tomescout.nextappfactory.com?subject=TomeScout Support"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white whitespace-nowrap shadow-sm"
            style={{ background: 'linear-gradient(135deg, #F59E0B, #D97706)' }}
          >
            Email Support
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
