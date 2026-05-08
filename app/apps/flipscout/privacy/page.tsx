import AppNav from '@/components/AppNav'
import Footer from '@/components/Footer'

const sections = [
  { title: 'Information We Collect', body: 'FlipScout may use Apple Sign-In for authentication. We receive only your name and email address from Apple — never your Apple ID credentials. Property data you enter is stored locally on your device.' },
  { title: 'Camera & Photos', body: 'FlipScout requests access to your camera to allow you to photograph properties. Photos you take are stored locally on your device and are not uploaded to our servers.' },
  { title: 'Property Data', body: 'All property records, calculations, and notes you create in FlipScout are stored on your device. We do not have access to your deal data.' },
  { title: 'Analytics', body: 'We may collect anonymous, aggregate usage data (such as feature usage frequency) to improve the app. This data cannot be used to identify you.' },
  { title: 'In-App Purchases', body: 'Any purchases are processed entirely by Apple through the App Store. We do not receive or store your payment information.' },
  { title: 'Contact', body: 'For privacy questions related to FlipScout, email us at admin@hugeappfactory.com.' },
]

export default function FlipScoutPrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f5f5fa' }}>
      <AppNav
        appName="FlipScout"
        accentColor="#10b981"
        gradient="linear-gradient(135deg, #10b981, #059669)"
        homeUrl="http://flipscout.hugeappfactory.com"
        privacyUrl="http://flipscout.hugeappfactory.com/privacy"
        supportUrl="http://flipscout.hugeappfactory.com/support"
      />

      <section className="pt-36 pb-10 px-6 text-center">
        <div className="app-icon w-14 h-14 mx-auto mb-5 flex items-center justify-center text-2xl"
          style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>🏠</div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">FlipScout Privacy Policy</h1>
        <p className="text-gray-400 text-sm">Effective date: January 1, 2025</p>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-2xl mx-auto bg-white border border-[#e8e8f0] rounded-3xl p-8 shadow-sm space-y-7">
          <p className="text-sm text-gray-500 leading-relaxed">
            Your privacy matters. This policy explains how FlipScout, developed by Huge App Factory LLC,
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
