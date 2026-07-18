import { TRANSLATIONS } from './index'

// Pure-HTML dropdown (details/summary) so the legal pages stay server-rendered.
export default function LanguagePicker({ active }: { active?: string }) {
  const items = [
    { code: 'en', name: 'English' },
    ...Object.values(TRANSLATIONS).map((t) => ({ code: t.locale, name: t.langName })),
  ]
  const current = items.find((i) => i.code === (active ?? 'en')) ?? items[0]
  return (
    <details className="relative inline-block text-left">
      <summary className="list-none cursor-pointer inline-flex items-center gap-1.5 text-xs text-gray-500 border border-[#e8e8f0] bg-white rounded-full px-3.5 py-1.5 hover:text-gray-700">
        <span aria-hidden>🌐</span> {current.name}
      </summary>
      <div className="absolute left-1/2 -translate-x-1/2 mt-2 z-10 w-48 max-h-72 overflow-y-auto bg-white border border-[#e8e8f0] rounded-2xl shadow-lg py-2 text-left">
        {items.map((i) => (
          <a
            key={i.code}
            href={`?lang=${i.code}`}
            className={`block px-4 py-1.5 text-xs hover:bg-gray-50 ${
              i.code === current.code ? 'font-bold text-gray-900' : 'text-gray-500'
            }`}
          >
            {i.name}
          </a>
        ))}
      </div>
    </details>
  )
}
