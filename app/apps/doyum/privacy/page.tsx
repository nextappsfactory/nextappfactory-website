import AppNav from '@/components/AppNav'
import Footer from '@/components/Footer'

const sections = [
  { title: 'Information We Collect', body: 'Doyum uses your camera to analyze food photos. Photos are sent to our AI model for recognition and are not stored on our servers after processing. We do not retain images.' },
  { title: 'How We Use Your Data', body: 'Food logs, calorie entries, and nutrition data are stored locally on your device. We do not upload your personal health data to our servers.' },
  { title: 'Camera & Photo Access', body: 'Doyum requests camera access solely to photograph meals for AI recognition. We do not access your photo library without explicit permission, and we never share images with third parties.' },
  { title: 'Advertising', body: 'The free version of Doyum may display ads served by Google AdMob. AdMob may collect identifiers and usage data to serve relevant ads. You can review Google\'s privacy policy at policies.google.com/privacy.' },
  { title: 'In-App Purchases', body: 'Any purchases are processed entirely by Apple through the App Store. We do not receive or store your payment information.' },
  { title: 'Data Security', body: 'Your nutrition logs and goals are stored locally on your device using Apple\'s standard data protection APIs.' },
  { title: 'Contact', body: 'For privacy questions related to Doyum, email us at admin@nextappfactory.com.' },
]

export default function DoyumPrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f5f5fa' }}>
      <AppNav
        appName="Doyum"
        accentColor="#10B981"
        gradient="linear-gradient(135deg, #10B981, #059669)"
        homeUrl="http://doyum.nextappfactory.com"
        privacyUrl="http://doyum.nextappfactory.com/privacy"
        supportUrl="http://doyum.nextappfactory.com/support"
      />

      <section className="pt-36 pb-10 px-6 text-center">
        <div className="app-icon w-14 h-14 mx-auto mb-5 flex items-center justify-center text-2xl"
          style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}>🍽</div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Doyum Privacy Policy</h1>
        <p className="text-gray-400 text-sm">Effective date: January 1, 2025</p>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-2xl mx-auto bg-white border border-[#e8e8f0] rounded-3xl p-8 shadow-sm space-y-7">
          <p className="text-sm text-gray-500 leading-relaxed">
            Your privacy matters. This policy explains how Doyum, developed by Next App Factory LLC,
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
