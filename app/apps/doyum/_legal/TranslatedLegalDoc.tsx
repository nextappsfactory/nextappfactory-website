import type { LegalDocContent, LegalTranslation } from './types'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Renders a convenience translation. The banner states — in the reader's
// language and in English — that only the English version is official.
export default function TranslatedLegalDoc({ t, doc }: { t: LegalTranslation; doc: LegalDocContent }) {
  return (
    <div className="max-w-2xl mx-auto space-y-5">
      <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 text-xs text-amber-900 leading-relaxed">
        <p>{t.banner}</p>
        <p className="mt-1 text-amber-700">
          This translation is provided for convenience only — the{' '}
          <a href="?lang=en" className="underline">
            English version
          </a>{' '}
          governs.
        </p>
      </div>
      <div className="bg-white border border-[#e8e8f0] rounded-3xl p-8 shadow-sm space-y-7">
        <p className="text-sm text-gray-500 leading-relaxed">{doc.intro}</p>
        {doc.sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-sm font-bold text-gray-900 mb-1.5">{s.title}</h2>
            {s.body.map((p, i) =>
              EMAIL_RE.test(p.trim()) ? (
                <a key={i} href={`mailto:${p.trim()}`} className="text-sm text-emerald-600 hover:underline">
                  {p.trim()}
                </a>
              ) : (
                <p key={i} className="text-sm text-gray-500 leading-relaxed mb-1.5 last:mb-0">
                  {p}
                </p>
              ),
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
