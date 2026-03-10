import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import { publicApi } from '../api'
import { ExternalLink, Clock, MapPin } from 'lucide-react'

export default function Buffet() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'ko' | 'en' | 'zh' | 'ja'
  const { data: linkRes } = useQuery({ queryKey: ['link', 'BUFFET'], queryFn: () => publicApi.getLinkByType('BUFFET') })
  const link = linkRes?.data?.data
  const capLang = lang.charAt(0).toUpperCase() + lang.slice(1)
  const linkLabel = (link as any)?.[`label${capLang}`] || t('buffet.info.waiting')

  return (
    <div>
      <div className="relative h-[60vh] overflow-hidden">
        <img src="/images/buffet.svg" alt="Buffet" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <p className="text-gold-400 text-xs tracking-[0.4em] uppercase mb-3">{t('buffet.hero.subtitle')}</p>
            <h1 className="text-4xl md:text-6xl font-serif mb-4">{t('buffet.hero.title')}</h1>
            <div className="gold-divider mx-auto" />
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-10 h-0.5 bg-gold-500 mb-4" />
              <h2 className="section-title">{t('buffet.info.title')}</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">{t('buffet.info.desc')}</p>
              <div className="space-y-3 mb-8">
                <p className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin size={16} className="text-gold-500 shrink-0" /> {t('buffet.info.floor')}
                </p>
                <p className="flex items-center gap-3 text-sm text-gray-600">
                  <Clock size={16} className="text-gold-500 shrink-0" /> {t('buffet.info.hours')}
                </p>
              </div>
              <a href={link?.url || '#'} target="_blank" rel="noopener noreferrer" className="btn-primary">
                {linkLabel} <ExternalLink size={16} />
              </a>
            </div>
            <div className="overflow-hidden rounded-sm">
              <img src="/images/buffet.svg" alt="Buffet" className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
