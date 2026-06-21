import AppNav from '@/components/AppNav'
import Footer from '@/components/Footer'

const faqs = [
  { q: 'Is Doyum free?', a: 'Yes, Doyum is free to download. Free users can log up to 5 meals per day. Upgrade once to unlock unlimited logging and full macro tracking.' },
  { q: 'How accurate is the AI food recognition?', a: 'Doyum\'s AI is trained on thousands of foods and performs best with clearly photographed, well-lit meals. For mixed dishes or uncommon foods, you can manually adjust the result.' },
  { q: 'Are my photos stored on your servers?', a: 'No. Photos are sent to our AI model for processing only and are immediately discarded after recognition. We do not store your food photos.' },
  { q: 'Is my nutrition data private?', a: 'Yes. All your food logs and health data are stored locally on your device. Nothing is uploaded to our servers.' },
  { q: 'How do I edit a logged meal?', a: 'Tap the meal entry in your daily log, then tap "Edit." You can adjust the food name, portion size, or any macro values.' },
  { q: 'The app isn\'t recognizing my food correctly.', a: 'Try retaking the photo in better lighting with the food clearly visible. You can also tap "Edit" after logging to manually correct the entry.' },
  { q: 'How do I restore a purchase?', a: 'Go to Settings within the app and tap "Restore Purchases." Make sure you are signed in with the same Apple ID used for the original purchase.' },
  { q: 'I have a feature request.', a: 'We\'d love to hear it! Email us at admin@nextappfactory.com with the subject line "Doyum Feature Request."' },
]

export default function DoyumSupportPage() {
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
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Doyum Support</h1>
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
            href="mailto:admin@nextappfactory.com?subject=Doyum Support"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white whitespace-nowrap shadow-sm"
            style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}
          >
            Email Support
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
