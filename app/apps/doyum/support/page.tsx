import Image from 'next/image'
import AppNav from '@/components/AppNav'
import Footer from '@/components/Footer'

const faqs = [
  {
    q: 'How does the calorie estimate work?',
    a: 'Take or pick a photo of your meal and our AI estimates its calories and macros. You can always adjust the items before logging.',
  },
  {
    q: 'Is my data private?',
    a: 'Yes — your meals and calories are never shown publicly without your choice. See our Privacy Policy for full details.',
  },
  {
    q: 'How do I manage or cancel Doyum Pro?',
    a: 'Subscriptions are managed in your Apple ID settings (Settings → your name → Subscriptions). You can cancel anytime.',
  },
  {
    q: 'How do I delete my account?',
    a: 'Open the app → Profile → Delete Account. This removes your profile and all associated data. You can also email us to request deletion.',
  },
  {
    q: 'Found a bug or have a feature request?',
    a: 'Email admin@nextappfactory.com with as much detail as you can — screenshots help.',
  },
]

export default function DoyumSupportPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f5f5fa' }}>
      <AppNav
        appName="Doyum AI"
        accentColor="#FF6B6B"
        gradient="linear-gradient(135deg, #33CDBE, #FF6B6B)"
        homeUrl="http://doyumai.nextappfactory.com"
        privacyUrl="http://doyumai.nextappfactory.com/privacy"
        supportUrl="http://doyumai.nextappfactory.com/support"
      />

      <section className="pt-36 pb-10 px-6 text-center">
        <Image src="/doyum/icon.png" alt="Doyum AI" width={56} height={56} className="mx-auto mb-5 rounded-[14px]" />
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Doyum AI Support</h1>
        <p className="text-gray-500 max-w-md mx-auto text-sm">We're here to help.</p>
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
            <div className="text-sm text-gray-500">Email us — we usually reply within 1–2 business days.</div>
          </div>
          <a
            href="mailto:admin@nextappfactory.com?subject=Doyum AI Support"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white whitespace-nowrap shadow-sm"
            style={{ background: 'linear-gradient(135deg, #33CDBE, #FF6B6B)' }}
          >
            Email Support
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
