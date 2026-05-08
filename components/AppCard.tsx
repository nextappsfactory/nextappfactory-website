'use client'

import Link from 'next/link'

export interface AppConfig {
  slug: string
  name: string
  tagline: string
  icon: string
  gradient: string
  shadowColor: string
  badge?: string
  subdomainUrl: string
  category?: string
}

export default function AppCard({ app }: { app: AppConfig }) {
  return (
    <Link href={app.subdomainUrl} target="_self">
      <div className="group bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer">
        {/* Icon */}
        <div className="app-icon w-14 h-14 flex items-center justify-center text-2xl mb-4 shadow-sm"
          style={{ background: app.gradient }}>
          {app.icon}
        </div>

        {/* Category */}
        {app.category && (
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3 inline-block"
            style={{ background: `${app.shadowColor}15`, color: app.shadowColor }}>
            {app.category}
          </span>
        )}

        <h3 className="font-bold text-gray-900 text-base mb-1">{app.name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">{app.tagline}</p>

        <div className="flex items-center justify-between">
          {app.badge ? (
            <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
              {app.badge}
            </span>
          ) : (
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              Free Download
            </span>
          )}
          <svg className="w-4 h-4 text-gray-300 group-hover:text-purple-500 group-hover:translate-x-0.5 transition-all"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
