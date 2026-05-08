import AppNav from '@/components/AppNav'
import Footer from '@/components/Footer'

const faqs = [
  { q: 'How many prompts does the app have?', a: 'Truth or Dare includes 500 prompts — 50 Truths and 50 Dares across 5 categories: Family, Friends, Party, Romantic, and Extreme.' },
  { q: 'How many players can play?', a: 'There is no limit on the number of players. Add as many players as you want from the Player Setup screen before starting the game.' },
  { q: 'How do I remove ads?', a: 'Tap the "Remove Ads" button in the Settings screen or on the paywall. A one-time purchase of $2.99 removes all ads permanently for that Apple ID.' },
  { q: 'How do I restore my "Remove Ads" purchase?', a: 'Go to Settings within the app and tap "Restore Purchases." Make sure you\'re signed in with the same Apple ID used for the original purchase.' },
  { q: 'Can I get a refund?', a: 'Refunds for in-app purchases are handled by Apple. Visit reportaproblem.apple.com to request a refund.' },
  { q: 'Some prompts seem too intense. Can I filter them?', a: 'Yes. On the Category Selection screen, choose the categories that fit your group. The "Family" and "Friends" categories have the most appropriate prompts for all ages.' },
  { q: 'The app is showing the same prompts repeatedly.', a: 'Prompts are randomly selected from the pool. If you\'ve played many rounds, you may see repeats. Try switching categories for more variety.' },
  { q: 'I have a suggestion for a new prompt or category.', a: 'We\'d love to hear it! Email admin@hugeappfactory.com with the subject "Truth or Dare Suggestion."' },
]

export default function TruthOrDareSupportPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f5f5fa' }}>
      <AppNav
        appName="Truth or Dare"
        accentColor="#f43f5e"
        gradient="linear-gradient(135deg, #f43f5e, #e11d48)"
        homeUrl="http://truthordare.hugeappfactory.com"
        privacyUrl="http://truthordare.hugeappfactory.com/privacy"
        supportUrl="http://truthordare.hugeappfactory.com/support"
      />

      <section className="pt-36 pb-10 px-6 text-center">
        <div className="app-icon w-14 h-14 mx-auto mb-5 flex items-center justify-center text-2xl"
          style={{ background: 'linear-gradient(135deg, #f43f5e, #e11d48)' }}>🎲</div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Truth or Dare Support</h1>
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
            href="mailto:admin@hugeappfactory.com?subject=Truth or Dare Support"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white whitespace-nowrap shadow-sm"
            style={{ background: 'linear-gradient(135deg, #f43f5e, #e11d48)' }}
          >
            Email Support
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
