import AppNav from '@/components/AppNav'
import Footer from '@/components/Footer'

const sections = [
  { title: 'Information We Collect', body: 'TomeScout does not require an account to use. We may collect anonymous usage analytics to improve the app. We do not collect personal financial data or payment information.' },
  { title: 'Barcode & Search Data', body: 'Book barcodes you scan and titles you search are used only to fetch pricing data in real time. This data is not stored on our servers and is not linked to your identity.' },
  { title: 'Inventory Data', body: 'Your book inventory and scan history are stored locally on your device. Nothing is uploaded to our servers unless you explicitly use a sync feature.' },
  { title: 'Advertising', body: 'The free version of TomeScout may display ads served by Google AdMob. AdMob may collect identifiers and usage data to serve relevant ads. You can review Google\'s privacy policy at policies.google.com/privacy.' },
  { title: 'In-App Purchases', body: 'Any purchases are processed entirely by Apple through the App Store. We do not receive or store your payment information.' },
  { title: 'Contact', body: 'For privacy questions related to TomeScout, email us at contact@tomescout.nextappfactory.com.' },
]

export default function TomeScoutPrivacyPage() {
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
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">TomeScout Privacy Policy</h1>
        <p className="text-gray-400 text-sm">Effective date: January 1, 2025</p>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-2xl mx-auto bg-white border border-[#e8e8f0] rounded-3xl p-8 shadow-sm space-y-7">
          <p className="text-sm text-gray-500 leading-relaxed">
            Your privacy matters. This policy explains how TomeScout, developed by Next App Factory LLC, handles your information.
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
