import AppNav from '@/components/AppNav'
import Footer from '@/components/Footer'

const sections = [
  {
    title: 'Acceptance of Terms',
    body: 'By downloading or using Doyum, you agree to be bound by these Terms of Service. If you do not agree, please do not use the app.',
  },
  {
    title: 'Use of the App',
    body: 'Doyum is intended for personal, non-commercial use. You may not copy, modify, distribute, or reverse-engineer any part of the app. You agree not to use the app for any unlawful purpose.',
  },
  {
    title: 'AI Food Recognition',
    body: 'The calorie and nutrition estimates provided by Doyum\'s AI are approximations only and should not be used as a substitute for professional dietary or medical advice. Results may vary based on photo quality, portion size, and food preparation.',
  },
  {
    title: 'Health Disclaimer',
    body: 'Doyum is a general wellness tool and is not a medical device. It is not intended to diagnose, treat, cure, or prevent any disease or health condition. Always consult a qualified healthcare professional before making dietary changes.',
  },
  {
    title: 'In-App Purchases',
    body: 'Some features require a one-time in-app purchase processed by Apple through the App Store. All sales are final and subject to Apple\'s refund policy. We do not have access to your payment information.',
  },
  {
    title: 'Intellectual Property',
    body: 'All content, designs, logos, and code in Doyum are the property of Next App Factory LLC. You may not reproduce or distribute any part without written permission.',
  },
  {
    title: 'Limitation of Liability',
    body: 'To the fullest extent permitted by law, Next App Factory LLC shall not be liable for any indirect, incidental, or consequential damages arising from your use of Doyum or reliance on its nutritional data.',
  },
  {
    title: 'Changes to Terms',
    body: 'We may update these Terms from time to time. Continued use of the app after changes are posted constitutes acceptance of the revised Terms.',
  },
  {
    title: 'Contact',
    body: 'For questions about these Terms, contact us at admin@nextappfactory.com.',
  },
]

export default function DoyumTermsPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f5f5fa' }}>
      <AppNav
        appName="Doyum"
        accentColor="#10B981"
        gradient="linear-gradient(135deg, #10B981, #059669)"
        homeUrl="http://doyumai.nextappfactory.com"
        privacyUrl="http://doyumai.nextappfactory.com/privacy"
        supportUrl="http://doyumai.nextappfactory.com/support"
      />

      <section className="pt-36 pb-10 px-6 text-center">
        <div className="app-icon w-14 h-14 mx-auto mb-5 flex items-center justify-center text-2xl"
          style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}>🍽</div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Doyum Terms of Service</h1>
        <p className="text-gray-400 text-sm">Effective date: January 1, 2025</p>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-2xl mx-auto bg-white border border-[#e8e8f0] rounded-3xl p-8 shadow-sm space-y-7">
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
