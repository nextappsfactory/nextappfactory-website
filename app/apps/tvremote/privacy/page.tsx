import AppNav from '@/components/AppNav'
import Footer from '@/components/Footer'

const sections = [
  { title: 'Information We Collect', body: 'Universal Remote does not require an account to use. We do not collect or store personal information. The app discovers devices on your local Wi-Fi network solely to enable remote control — this data never leaves your device.' },
  { title: 'Local Network Access', body: 'The app requests access to your local network to discover and communicate with compatible TVs and streaming devices. No network traffic is sent to our servers.' },
  { title: 'Advertising', body: 'The free version of Universal Remote may display ads served by Google AdMob. AdMob may collect identifiers and usage data to serve relevant ads. You can review Google\'s privacy policy at policies.google.com/privacy.' },
  { title: 'In-App Purchases', body: 'Any purchases are processed entirely by Apple through the App Store. We do not receive or store your payment information.' },
  { title: 'Data Security', body: 'All device configurations and custom layouts are stored locally on your device. Nothing is uploaded to external servers.' },
  { title: 'Changes', body: 'We may update this policy from time to time and will revise the effective date accordingly.' },
  { title: 'Contact', body: 'For privacy questions related to Universal Remote, email us at admin@nextappfactory.com.' },
]

export default function TVRemotePrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f5f5fa' }}>
      <AppNav
        appName="Universal Remote"
        accentColor="#6366F1"
        gradient="linear-gradient(135deg, #6366F1, #4338CA)"
        homeUrl="http://tvremote.nextappfactory.com"
        privacyUrl="http://tvremote.nextappfactory.com/privacy"
        supportUrl="http://tvremote.nextappfactory.com/support"
      />

      <section className="pt-36 pb-10 px-6 text-center">
        <div className="app-icon w-14 h-14 mx-auto mb-5 flex items-center justify-center text-2xl"
          style={{ background: 'linear-gradient(135deg, #6366F1, #4338CA)' }}>📺</div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm">Universal Remote · Last updated June 22, 2026</p>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-2xl mx-auto bg-white border border-[#e8e8f0] rounded-3xl p-8 shadow-sm space-y-7">
          <p className="text-sm text-gray-500 leading-relaxed">
            Your privacy matters. This policy explains how Universal Remote, developed by Next App Factory LLC, handles your information.
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
