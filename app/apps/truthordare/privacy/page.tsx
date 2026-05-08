import AppNav from '@/components/AppNav'
import Footer from '@/components/Footer'

const sections = [
  { title: 'Information We Collect', body: 'Truth or Dare does not require an account. We do not collect names, emails, or any personal data from players. Player names entered in-app are stored only in device memory and are cleared when the app is closed.' },
  { title: 'Advertising', body: 'The free version of Truth or Dare displays ads served by Google AdMob. AdMob may use device identifiers and usage signals to serve relevant ads. You can review Google\'s privacy policy at policies.google.com/privacy. Purchasing "Remove Ads" ($2.99) permanently disables all advertising.' },
  { title: 'In-App Purchases', body: 'The "Remove Ads" purchase is processed by Apple through the App Store. We do not receive or store your payment information.' },
  { title: 'App Tracking Transparency', body: 'On iOS 14.5 and later, we request your permission before allowing AdMob to track activity across apps and websites. You can change this at any time in Settings > Privacy > Tracking.' },
  { title: 'Children\'s Privacy', body: 'Truth or Dare is intended for users aged 13 and older. We do not knowingly collect personal information from children under 13.' },
  { title: 'Contact', body: 'For privacy questions related to Truth or Dare, email us at admin@hugeappfactory.com.' },
]

export default function TruthOrDarePrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f5f5fa' }}>
      <AppNav
        appName="Truth or Dare"
        accentColor="#f43f5e"
        gradient="linear-gradient(135deg, #f43f5e, #e11d48)"
        homeUrl="http://truthordare.hugeappfactory.com"
        privacyUrl="http://truthordare.hugeappfactory.com/privacy"
        supportUrl="http://truthordare.hugeappfactory.com/support"
      />

      <section className="pt-36 pb-10 px-6 text-center">
        <div className="app-icon w-14 h-14 mx-auto mb-5 flex items-center justify-center text-2xl"
          style={{ background: 'linear-gradient(135deg, #f43f5e, #e11d48)' }}>🎲</div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Truth or Dare Privacy Policy</h1>
        <p className="text-gray-400 text-sm">Effective date: January 1, 2025</p>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-2xl mx-auto bg-white border border-[#e8e8f0] rounded-3xl p-8 shadow-sm space-y-7">
          <p className="text-sm text-gray-500 leading-relaxed">
            Your privacy matters. This policy explains how Truth or Dare, developed by Huge App Factory LLC,
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
