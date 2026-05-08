import AppNav from '@/components/AppNav'
import Footer from '@/components/Footer'

const sections = [
  { title: 'Information We Collect', body: 'Simple-toDo does not require an account. All tasks, lists, and notes you create are stored exclusively on your device. We do not collect or transmit your task data.' },
  { title: 'No Accounts Required', body: 'Simple-toDo is designed to work without any sign-in. There are no profiles, no cloud sync, and no servers storing your personal data.' },
  { title: 'Analytics', body: 'We may collect anonymous, aggregate usage data (such as which features are used most) to guide future development. This data is not linked to you personally.' },
  { title: 'In-App Purchases', body: 'Any premium upgrades are processed entirely by Apple through the App Store. We do not receive or store payment information.' },
  { title: 'Contact', body: 'For privacy questions related to Simple-toDo, email us at admin@hugeappfactory.com.' },
]

export default function SimpleTodoPrivacyPage() {
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
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Simple-toDo Privacy Policy</h1>
        <p className="text-gray-400 text-sm">Effective date: January 1, 2025</p>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-2xl mx-auto bg-white border border-[#e8e8f0] rounded-3xl p-8 shadow-sm space-y-7">
          <p className="text-sm text-gray-500 leading-relaxed">
            Your privacy matters. This policy explains how Simple-toDo, developed by Huge App Factory LLC,
            handles your information.
          </p>
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
