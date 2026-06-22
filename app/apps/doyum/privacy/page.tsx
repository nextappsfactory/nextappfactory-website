import AppNav from '@/components/AppNav'
import Footer from '@/components/Footer'

export default function DoyumPrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: '#f5f5fa' }}>
      <AppNav
        appName="Doyum AI"
        accentColor="#10B981"
        gradient="linear-gradient(135deg, #10B981, #059669)"
        homeUrl="http://doyumai.nextappfactory.com"
        privacyUrl="http://doyumai.nextappfactory.com/privacy"
        supportUrl="http://doyumai.nextappfactory.com/support"
      />

      <section className="pt-36 pb-10 px-6 text-center">
        <div className="app-icon w-14 h-14 mx-auto mb-5 flex items-center justify-center text-2xl"
          style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}>🍽</div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm">Doyum AI · Last updated June 20, 2026</p>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-2xl mx-auto bg-white border border-[#e8e8f0] rounded-3xl p-8 shadow-sm space-y-7 text-sm text-gray-500 leading-relaxed">
          <p>Doyum AI ("we", "us", the "App"), operated by Next App Factory LLC, helps you track nutrition by estimating calories and macros from photos of your meals. This policy explains what we collect, why, and your choices.</p>

          <div className="bg-gray-50 border border-[#e8e8f0] rounded-2xl p-6">
            <h2 className="text-sm font-bold text-gray-900 mb-3">Information we collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-gray-700">Account info</strong> — your email address, used to create and secure your account (via Firebase Authentication).</li>
              <li><strong className="text-gray-700">Profile & goals</strong> — biological sex, date of birth, height, weight, activity level and goals you enter to calculate your nutrition targets. Most of this is stored on your device; a minimal profile is stored on our servers to power optional social features.</li>
              <li><strong className="text-gray-700">Meal photos & logs</strong> — photos you take or select are sent to our service and a third-party AI model provider to estimate calories and macros. We do not use your photos to identify you.</li>
              <li><strong className="text-gray-700">Activity you create</strong> — meals, weight entries, water intake, and any optional social content you choose to share.</li>
              <li><strong className="text-gray-700">Payment info</strong> — if you subscribe to Doyum Pro, payments are processed by Apple and/or Stripe. We do not receive or store your full card details.</li>
              <li><strong className="text-gray-700">Diagnostics</strong> — basic, non-identifying usage and crash data to keep the App working.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-gray-900 mb-2">How we use your information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To calculate your nutrition targets and show your progress.</li>
              <li>To analyze meal photos and return calorie/macro estimates.</li>
              <li>To provide optional social features you opt into (groups, friends, messages).</li>
              <li>To process subscriptions and prevent abuse.</li>
              <li>To operate, secure, and improve the App.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-gray-900 mb-2">How information is shared</h2>
            <p className="mb-2">We do not sell your personal information. We share data only with service providers who help us run the App, under contract:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-gray-700">Google Firebase / Google Cloud</strong> — authentication, hosting, and database.</li>
              <li><strong className="text-gray-700">AI model provider</strong> — to analyze meal photos for estimates.</li>
              <li><strong className="text-gray-700">Stripe</strong> — subscription payments.</li>
            </ul>
            <p className="mt-2">We may disclose information if required by law or to protect users' safety.</p>
          </div>

          <div>
            <h2 className="text-sm font-bold text-gray-900 mb-2">Data retention & deletion</h2>
            <p>You can delete your account and associated data at any time from <em>Profile → Delete Account</em>, which removes your profile and data from this device and our servers. You may also email us to request deletion.</p>
          </div>

          <div>
            <h2 className="text-sm font-bold text-gray-900 mb-2">Security</h2>
            <p>We use industry-standard measures (encryption in transit, access controls) to protect your information. No method of transmission or storage is 100% secure.</p>
          </div>

          <div>
            <h2 className="text-sm font-bold text-gray-900 mb-2">Children</h2>
            <p>Doyum AI is not directed to children under 13 (or the minimum age in your country), and we do not knowingly collect their data.</p>
          </div>

          <div>
            <h2 className="text-sm font-bold text-gray-900 mb-2">Your rights</h2>
            <p>Depending on where you live, you may have rights to access, correct, export, or delete your personal data. Contact us to exercise them.</p>
          </div>

          <div>
            <h2 className="text-sm font-bold text-gray-900 mb-2">Changes</h2>
            <p>We may update this policy and will revise the "Last updated" date above.</p>
          </div>

          <div>
            <h2 className="text-sm font-bold text-gray-900 mb-2">Contact</h2>
            <p>Questions or requests: <a href="mailto:admin@nextappfactory.com" className="text-emerald-600 hover:underline">admin@nextappfactory.com</a></p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
