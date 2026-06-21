import Header from '@/components/Header'
import Footer from '@/components/Footer'

const sections = [
  {
    title: 'Acceptance of Terms',
    body: `By accessing or using the Next App Factory website or any of our apps, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.`,
  },
  {
    title: 'Use of Our Services',
    body: `Our apps and website are provided for personal, non-commercial use. You agree not to misuse our services, attempt to reverse engineer any app, use automated tools to scrape content, or engage in any activity that disrupts our services.`,
  },
  {
    title: 'In-App Purchases',
    body: `Some apps offer in-app purchases processed through Apple's App Store. All purchases are subject to Apple's terms and conditions. We do not store payment information. Refunds are subject to Apple's refund policy.`,
  },
  {
    title: 'Intellectual Property',
    body: `All content, designs, logos, and code on our website and in our apps are the property of Next App Factory LLC. You may not reproduce, distribute, or create derivative works without our written permission.`,
  },
  {
    title: 'Disclaimer of Warranties',
    body: `Our services are provided "as is" without warranties of any kind, express or implied. We do not warrant that our services will be uninterrupted, error-free, or free of viruses or other harmful components.`,
  },
  {
    title: 'Limitation of Liability',
    body: `To the fullest extent permitted by law, Next App Factory LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.`,
  },
  {
    title: 'Governing Law',
    body: `These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.`,
  },
  {
    title: 'Changes to Terms',
    body: `We reserve the right to modify these Terms at any time. Continued use of our services after changes constitutes acceptance of the new Terms.`,
  },
  {
    title: 'Contact',
    body: `For questions about these Terms, contact us at admin@nextappfactory.com.`,
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-36 pb-10 px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500 mb-3">Legal</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Terms of Service</h1>
        <p className="text-gray-400 text-sm">Effective date: January 1, 2025</p>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-2xl mx-auto bg-white border border-[#e8e8f0] rounded-3xl p-8 shadow-sm space-y-8">
          <p className="text-gray-500 text-sm leading-relaxed">
            These Terms of Service govern your use of the Next App Factory LLC website located at
            nextappfactory.com and all related apps and services offered by Next App Factory LLC.
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
