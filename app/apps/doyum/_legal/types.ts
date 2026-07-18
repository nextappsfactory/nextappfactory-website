// Convenience translations of the Doyum AI legal documents.
//
// These are display-only renderings: the English pages are the sole official
// versions (see the "Governing language" section in each document), and the
// consent ledger hashes ONLY the English text. Editing a translation therefore
// never creates a new document version and never requires re-consent.

export interface LegalSection {
  title: string
  /** Paragraphs. Bullet items are plain paragraphs prefixed with "• ". */
  body: string[]
}

export interface LegalDocContent {
  title: string
  /** Fully localized "Last updated <date>" line, rendered after "Doyum AI · ". */
  updated: string
  intro: string
  sections: LegalSection[]
}

export interface LegalTranslation {
  /** App locale code, e.g. 'tr' — matches DoyumAI/src/i18n/locales. */
  locale: string
  /** The language's own name for itself, shown in the language picker. */
  langName: string
  /** Convenience-translation notice, written in this language. */
  banner: string
  terms: LegalDocContent
  privacy: LegalDocContent
}
