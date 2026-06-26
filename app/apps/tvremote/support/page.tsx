import AppNav from '@/components/AppNav'
import Footer from '@/components/Footer'

const faqs = [
  { q: 'Which TVs and devices are supported?', a: 'Universal Remote controls Wi-Fi-connected TVs and streaming devices: Android TV / Google TV (Sony, TCL, Hisense, Philips and others), Roku, Samsung, LG, and Fire TV. Your iPhone and TV must be on the same Wi-Fi network.' },
  { q: 'My TV isn\'t being detected. What should I do?', a: 'Make sure your iPhone and TV are on the same Wi-Fi (not a separate guest network). Re-open the app so a fresh pairing code appears on the TV, then enter it in the app. If the TV is asleep, tap Wake. You do not need to change any TV settings.' },
  { q: 'Do I need to turn anything on in the TV\'s settings?', a: 'No. Universal Remote pairs over your network using a code shown on the TV — you don\'t need to enable IP Control, developer options, or anything else.' },
  { q: 'How do I control more than one TV?', a: 'Every TV you pair is saved. Tap the TV name at the top of the remote to switch between them, and rename them (e.g. "Living Room" or "Bedroom") so they\'re easy to tell apart.' },
  { q: 'Does the app track what I watch?', a: 'No. A remote can\'t see your TV screen. The app only stores, on your phone, the apps you open and searches you run inside it — and you can clear or turn that off anytime in Settings.' },
  { q: 'What is the Bedtime Lock?', a: 'Set a time limit; when it\'s up, the TV turns off and the app keeps turning it back off — even if someone uses the TV\'s own remote. It works while the app stays running and the phone is powered and on the same Wi-Fi.' },
  { q: 'Why won\'t some buttons (Options/Help/Settings) open the TV menus?', a: 'A remote can send navigation keys and launch apps, but some TV system screens aren\'t exposed to remote apps on every TV, so the TV may simply ignore those commands.' },
  { q: 'How do I restore a purchase?', a: 'Open the upgrade screen in the app and tap "Restore Purchases," signed in with the same Apple ID used for the original purchase.' },
  { q: 'I have a feature request.', a: 'Email us at admin@nextappfactory.com with the subject line "Universal Remote Feature Request" — we read everything.' },
]

export default function TVRemoteSupportPage() {
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
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Universal Remote Support</h1>
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
            href="mailto:admin@nextappfactory.com?subject=Universal Remote Support"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white whitespace-nowrap shadow-sm"
            style={{ background: 'linear-gradient(135deg, #6366F1, #4338CA)' }}
          >
            Email Support
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
