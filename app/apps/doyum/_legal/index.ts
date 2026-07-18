import type { LegalTranslation } from './types'
import { bn } from './locales/bn'
import { cs } from './locales/cs'
import { da } from './locales/da'
import { de } from './locales/de'
import { el } from './locales/el'
import { es } from './locales/es'
import { fi } from './locales/fi'
import { fr } from './locales/fr'
import { hi } from './locales/hi'
import { hu } from './locales/hu'
import { id } from './locales/id'
import { it } from './locales/it'
import { ja } from './locales/ja'
import { ko } from './locales/ko'
import { ms } from './locales/ms'
import { nb } from './locales/nb'
import { nl } from './locales/nl'
import { pl } from './locales/pl'
import { pt } from './locales/pt'
import { ro } from './locales/ro'
import { ru } from './locales/ru'
import { sk } from './locales/sk'
import { sv } from './locales/sv'
import { th } from './locales/th'
import { tr } from './locales/tr'
import { uk } from './locales/uk'
import { vi } from './locales/vi'
import { zh } from './locales/zh'

export const TRANSLATIONS: Record<string, LegalTranslation> = {
  bn, cs, da, de, el, es, fi, fr, hi, hu, id, it, ja, ko,
  ms, nb, nl, pl, pt, ro, ru, sk, sv, th, tr, uk, vi, zh,
}

/** Resolve ?lang= to a translation; English (or unknown) renders the official page. */
export function legalTranslationFor(lang?: string | string[]): LegalTranslation | undefined {
  const one = Array.isArray(lang) ? lang[0] : lang
  if (!one) return undefined
  return TRANSLATIONS[one.toLowerCase().split('-')[0]]
}
