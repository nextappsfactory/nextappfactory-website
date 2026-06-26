import AppNav from '@/components/AppNav'
import Footer from '@/components/Footer'

const sections = [
  { title: 'Acceptance of Terms', body: 'By downloading or using Universal Remote, you agree to be bound by these Terms of Service. If you do not agree, please do not use the app.' },
  { title: 'Use of the App', body: 'Universal Remote is intended for personal, non-commercial use to control compatible TV and home entertainment devices. You may not use the app to control devices you do not own or have permission to operate.' },
  { title: 'Device Compatibility', body: 'Universal Remote is designed to work with a wide range of devices, but compatibility is not guaranteed for all makes, models, or firmware versions. We make no warranty that the app will work with any specific device.' },
  { title: 'In-App Purchases', body: 'The full unlock is a one-time in-app purchase processed by Apple through the App Store. All sales are final and subject to Apple\'s refund policy. We do not have access to your payment information.' },
  { title: 'Intellectual Property', body: 'All content, designs, logos, and code in Universal Remote are the property of Next App Factory LLC. You may not reproduce or distribute any part without written permission.' },
  { title: 'Limitation of Liability', body: 'To the fullest extent permitted by law, Next App Factory LLC shall not be liable for any indirect, incidental, or consequential damages arising from your use of Universal Remote.' },
  { title: 'Changes to Terms', body: 'We may update these Terms from time to time. Continued use of the app after changes are posted constitutes acceptance of the revised Terms.' },
  { title: 'Contact', body: 'For questions about these Terms, contact us at admin@nextappfactory.com.' },
]

export default function TVRemoteTermsPage() {
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
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-gray-400 text-sm">Universal Remote · Last updated June 22, 2026</p>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-2xl mx-auto bg-white border border-[#e8e8f0] rounded-3xl p-8 shadow-sm space-y-7">
          <p className="text-sm text-gray-500 leading-relaxed">
            These Terms govern your use of Universal Remote, operated by Next App Factory LLC. By using the app you agree to these Terms.
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
