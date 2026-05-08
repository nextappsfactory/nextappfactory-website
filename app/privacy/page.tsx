import Header from '@/components/Header'
import Footer from '@/components/Footer'

const sections = [
  {
    title: 'Information We Collect',
    body: `We collect information you provide directly to us, such as your name and email address when you contact us. Our apps may collect usage data to improve functionality. We do not sell your personal information to third parties.`,
  },
  {
    title: 'How We Use Your Information',
    body: `We use the information we collect to respond to your inquiries, improve our apps and services, send you updates you've opted into, and comply with legal obligations.`,
  },
  {
    title: 'Third-Party Services',
    body: `Some of our apps use third-party services such as Google AdMob (advertising), Apple Analytics, and StoreKit (in-app purchases). These services have their own privacy policies and data practices. We encourage you to review them.`,
  },
  {
    title: 'Data Retention',
    body: `We retain your personal information for as long as necessary to provide our services or comply with legal requirements. You may request deletion of your data at any time by contacting us.`,
  },
  {
    title: 'Children\'s Privacy',
    body: `Our services are not directed to children under 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.`,
  },
  {
    title: 'Your Rights',
    body: `Depending on your location, you may have the right to access, correct, or delete your personal information. To exercise these rights, contact us at admin@hugeappfactory.com.`,
  },
  {
    title: 'Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated effective date.`,
  },
  {
    title: 'Contact Us',
    body: `If you have questions about this Privacy Policy, please contact us at admin@hugeappfactory.com.`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-36 pb-10 px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500 mb-3">Legal</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-gray-400 text-sm">Effective date: January 1, 2025</p>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-2xl mx-auto bg-white border border-[#e8e8f0] rounded-3xl p-8 shadow-sm space-y-8">
          <p className="text-gray-500 text-sm leading-relaxed">
            Huge App Factory LLC ("we", "our", or "us") is committed to protecting your privacy.
            This policy explains how we collect, use, and share information when you use our
            website and apps.
          </p>

          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-base font-bold text-gray-900 mb-2">{s.title}</h2>
              <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
