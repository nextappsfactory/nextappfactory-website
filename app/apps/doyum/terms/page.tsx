import Image from 'next/image'
import AppNav from '@/components/AppNav'
import Footer from '@/components/Footer'
import { legalTranslationFor } from '../_legal'
import LanguagePicker from '../_legal/LanguagePicker'
import TranslatedLegalDoc from '../_legal/TranslatedLegalDoc'

const sections = [
  {
    title: 'The service',
    body: 'Doyum AI estimates calories and macros from meal photos and helps you track nutrition and progress. Estimates are approximate and provided for general informational purposes.',
  },
  {
    title: 'Not medical advice',
    body: 'Doyum AI is not a medical device and does not provide medical, dietary, or health advice. Always consult a qualified professional before making decisions about your diet or health. Do not rely on the App for medical purposes.',
  },
  {
    title: 'Your account',
    body: 'You are responsible for activity under your account and for keeping your sign-in secure. You must be at least 13 (or the minimum age in your country) to use the App.',
  },
  {
    title: 'Subscriptions (Doyum Pro)',
    body: 'Doyum Pro is an auto-renewable subscription billed through your Apple ID. It renews automatically unless cancelled at least 24 hours before the end of the period. Manage or cancel anytime in your Apple ID settings → Subscriptions. Prices are shown in the App before purchase.',
  },
  {
    title: 'Acceptable use',
    body: 'You agree not to misuse the App, including posting unlawful, abusive, or infringing content in any social features, harassing others, or attempting to disrupt the service. We may remove content and suspend accounts that violate these Terms.',
  },
  {
    title: 'Content',
    body: 'You retain rights to content you create. By posting in social features you grant us a limited license to host and display it to the audience you choose. You are responsible for content you share.',
  },
  {
    title: 'Disclaimers & liability',
    body: 'The App is provided "as is" without warranties. To the maximum extent permitted by law, Next App Factory LLC is not liable for indirect or consequential damages arising from your use of the App.',
  },
  {
    title: 'Termination',
    body: 'You may stop using the App and delete your account at any time (Profile → Delete Account). We may suspend or terminate access for violations of these Terms.',
  },
  {
    title: 'Changes',
    body: 'We may update these Terms and will revise the date above. Continued use means you accept the changes.',
  },
  {
    title: 'Governing language',
    body: 'These Terms are drafted in English. Where a translation is provided, it is for convenience only and is not an official version. If a translation conflicts with the English version, the English version governs to the extent permitted by applicable law.',
  },
  {
    title: 'Contact',
    body: 'admin@nextappfactory.com',
  },
]

export default function DoyumTermsPage({ searchParams }: { searchParams?: { lang?: string } }) {
  const t = legalTranslationFor(searchParams?.lang)
  return (
    <div className="min-h-screen" style={{ background: '#f5f5fa' }}>
      <AppNav
        appName="Doyum AI"
        accentColor="#FF6B6B"
        gradient="linear-gradient(135deg, #33CDBE, #FF6B6B)"
        homeUrl="https://doyum.ai"
        privacyUrl="https://doyum.ai/privacy"
        supportUrl="https://doyum.ai/support"
      />

      <section className="pt-36 pb-10 px-6 text-center">
        <Image src="/doyum/icon.png" alt="Doyum AI" width={56} height={56} className="mx-auto mb-5 rounded-[14px]" />
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{t ? t.terms.title : 'Terms of Use'}</h1>
        <p className="text-gray-400 text-sm">Doyum AI · {t ? t.terms.updated : 'Last updated July 17, 2026'}</p>
        <div className="mt-4">
          <LanguagePicker active={t?.locale} />
        </div>
      </section>

      <section className="px-6 pb-32">
        {t ? (
          <TranslatedLegalDoc t={t} doc={t.terms} />
        ) : (
          <div className="max-w-2xl mx-auto bg-white border border-[#e8e8f0] rounded-3xl p-8 shadow-sm space-y-7">
            <p className="text-sm text-gray-500 leading-relaxed">
              These Terms govern your use of the Doyum AI mobile app (the "App"), operated by Next App Factory LLC. By using the App you agree to these Terms.
            </p>
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-sm font-bold text-gray-900 mb-1.5">{s.title}</h2>
                {s.title === 'Contact' ? (
                  <a href="mailto:admin@nextappfactory.com" className="text-sm text-emerald-600 hover:underline">
                    admin@nextappfactory.com
                  </a>
                ) : (
                  <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  )
}
