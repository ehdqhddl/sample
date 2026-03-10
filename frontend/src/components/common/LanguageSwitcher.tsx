import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const LANGUAGES = [
  { code: 'ko', label: '한국어', short: 'KO' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'zh', label: '中文', short: 'ZH' },
  { code: 'ja', label: '日本語', short: 'JA' },
]

export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0]

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
          dark ? 'text-gray-600 hover:text-gold-600' : 'text-white/80 hover:text-white'
        }`}
      >
        <Globe size={15} />
        <span>{current.short}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-white border border-gray-100 shadow-lg rounded-sm min-w-[120px] z-50 animate-slide-down">
          {LANGUAGES.map(lang => (
            <button
              key={lang.code}
              onClick={() => { i18n.changeLanguage(lang.code); setOpen(false) }}
              className={`block w-full text-left px-4 py-2.5 text-sm transition-colors
                ${i18n.language === lang.code
                  ? 'text-gold-600 bg-gold-50 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
                }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
