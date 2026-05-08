import AppNav from '@/components/AppNav'
import Footer from '@/components/Footer'

const faqs = [
  { q: 'When is Simple-toDo launching?', a: 'Simple-toDo is currently in development. You can sign up for launch notifications on the app\'s homepage.' },
  { q: 'Will Simple-toDo be free?', a: 'Simple-toDo will be free to download with a core set of features. We may offer a one-time premium unlock for power users.' },
  { q: 'Will my tasks sync across devices?', a: 'In the initial release, tasks will be stored locally on your device. iCloud sync may be added in a future update.' },
  { q: 'Will there be recurring tasks or reminders?', a: 'Reminders and recurring tasks are planned features. We\'ll share more details closer to launch.' },
  { q: 'I have a feature request before launch.', a: 'We\'d love to hear what you want. Email admin@hugeappfactory.com with the subject "Simple-toDo Feature Request" — early suggestions directly shape the app.' },
]

export default function SimpleTodoSupportPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f5f5fa' }}>
      <AppNav
        appName="Simple-toDo"
        accentColor="#a855f7"
        gradient="linear-gradient(135deg, #a855f7, #7c3aed)"
        homeUrl="http://simpletodo.hugeappfactory.com"
        privacyUrl="http://simpletodo.hugeappfactory.com/privacy"
        supportUrl="http://simpletodo.hugeappfactory.com/support"
      />

      <section className="pt-36 pb-10 px-6 text-center">
        <div className="app-icon w-14 h-14 mx-auto mb-5 flex items-center justify-center text-2xl"
          style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)' }}>✅</div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-200 bg-purple-50 text-xs text-purple-500 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          In Development
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Simple-toDo Support</h1>
        <p className="text-gray-500 max-w-md mx-auto text-sm">Have a question before launch? We're happy to help.</p>
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
            <div className="text-sm text-gray-500">Send us an email and we'll get back to you.</div>
          </div>
          <a
            href="mailto:admin@hugeappfactory.com?subject=Simple-toDo Support"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white whitespace-nowrap shadow-sm"
            style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)' }}
          >
            Email Support
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
