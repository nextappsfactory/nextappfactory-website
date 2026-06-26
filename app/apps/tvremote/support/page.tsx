import AppNav from '@/components/AppNav'
import Footer from '@/components/Footer'

const faqs = [
  { q: 'Which TVs and devices are supported?', a: 'Universal Remote works with Samsung, LG, Sony, TCL, Vizio, Roku, Apple TV, Amazon Fire TV, and many more. If your device supports Wi-Fi control or is reachable via IR, it should work.' },
  { q: 'My TV isn\'t being detected. What should I do?', a: 'Make sure your iPhone and TV are on the same Wi-Fi network. Try restarting your TV and re-opening the app. Some TVs require "Mobile Control" or "Smart View" to be enabled in their settings.' },
  { q: 'Does it work without Wi-Fi?', a: 'Wi-Fi is required for smart TV control. IR-based control works without Wi-Fi on compatible iPhone models or with an IR accessory.' },
  { q: 'How do I add a second TV?', a: 'Upgrade to the full version, then tap the device selector at the top of the remote screen and choose "Add Device." The app will scan your network for available TVs.' },
  { q: 'How do I customize the remote layout?', a: 'Tap the layout icon in the top-right corner of the remote screen. You can drag, resize, and hide buttons to create your ideal layout. This feature requires the full unlock.' },
  { q: 'How do I restore a purchase?', a: 'Go to Settings within the app and tap "Restore Purchases." Make sure you are signed in with the same Apple ID used for the original purchase.' },
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
