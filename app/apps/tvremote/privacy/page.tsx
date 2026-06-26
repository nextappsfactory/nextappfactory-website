import AppNav from '@/components/AppNav'
import Footer from '@/components/Footer'

const sections = [
  { title: 'No Accounts, No Tracking', body: 'Universal Remote has no sign-in and no accounts. We do not run analytics servers, and we do not sell or share your data. Everything the app does happens on your device and your local Wi-Fi network.' },
  { title: 'Local Network Access', body: 'The app uses your local network to discover your TV, pair with it using a code shown on the TV screen, and send remote commands. This traffic stays on your network and is never routed through our servers.' },
  { title: 'On-Device Storage', body: 'Your saved TVs, custom names, and preferences are stored only on your device, in the iOS Keychain / secure storage. None of it is uploaded anywhere.' },
  { title: 'App Usage History', body: 'If left enabled, the app keeps a local list of the apps you open and the searches you run inside Universal Remote, to power the "Recently used" row. This never leaves your phone, and you can turn it off or clear it anytime in Settings. A remote cannot see what is playing on your TV, so we do not — and cannot — record what you watch.' },
  { title: 'No Ads', body: 'Universal Remote shows no advertisements and contains no advertising SDKs or third-party trackers.' },
  { title: 'Subscriptions & Purchases', body: 'Optional Premium is offered as a yearly subscription or a one-time lifetime purchase, with a free trial. All payments are processed by Apple through the App Store — we never receive or store your payment details.' },
  { title: 'Children', body: 'The app is not directed at children and does not knowingly collect personal information from anyone.' },
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
        <p className="text-gray-400 text-sm">Universal Remote · Last updated June 26, 2026</p>
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
