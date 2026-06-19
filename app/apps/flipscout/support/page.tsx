import AppNav from '@/components/AppNav'
import Footer from '@/components/Footer'

const faqs = [
  { q: 'Is FlipScout free?', a: 'FlipScout offers a free tier with core features. A premium subscription or one-time purchase may unlock advanced tools such as unlimited properties and detailed ROI reports.' },
  { q: 'How does the profit calculator work?', a: 'Enter the purchase price, estimated repair costs, and your after-repair value (ARV). FlipScout calculates your estimated profit, ROI percentage, and holding cost breakdown.' },
  { q: 'Can I add photos to a property?', a: 'Yes. Tap the camera icon on any property card to add photos directly from your camera roll or take a new photo on-site.' },
  { q: 'Is my property data backed up?', a: 'Property data is stored locally on your device. It will be included in your standard iCloud or iTunes backup. We recommend keeping backups enabled.' },
  { q: 'How do I sign in with Apple?', a: 'On the sign-in screen, tap "Continue with Apple." You can choose to share or hide your email address. Your Apple ID password is never shared with us.' },
  { q: 'How do I restore a purchase?', a: 'Go to Settings within the app and tap "Restore Purchases." Make sure you are signed in with the same Apple ID used for the original purchase.' },
  { q: 'I found a bug. How do I report it?', a: 'Email admin@nextappfactory.com with the subject "FlipScout Bug Report." Please include your iOS version, device model, and a description of the issue.' },
]

export default function FlipScoutSupportPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f5f5fa' }}>
      <AppNav
        appName="FlipScout"
        accentColor="#10b981"
        gradient="linear-gradient(135deg, #10b981, #059669)"
        homeUrl="http://flipscout.nextappfactory.com"
        privacyUrl="http://flipscout.nextappfactory.com/privacy"
        supportUrl="http://flipscout.nextappfactory.com/support"
      />

      <section className="pt-36 pb-10 px-6 text-center">
        <div className="app-icon w-14 h-14 mx-auto mb-5 flex items-center justify-center text-2xl"
          style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>🏠</div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">FlipScout Support</h1>
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
            href="mailto:admin@nextappfactory.com?subject=FlipScout Support"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white whitespace-nowrap shadow-sm"
            style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
          >
            Email Support
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
