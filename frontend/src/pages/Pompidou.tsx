import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import { publicApi } from '../api'
import { ExternalLink, Clock, MapPin } from 'lucide-react'

export default function Pompidou() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'ko' | 'en' | 'zh' | 'ja'
  const { data: linkRes } = useQuery({ queryKey: ['link', 'POMPIDOU'], queryFn: () => publicApi.getLinkByType('POMPIDOU') })
  const link = linkRes?.data?.data
  const capLang = lang.charAt(0).toUpperCase() + lang.slice(1)
  const linkLabel = (link as any)?.[`label${capLang}`] || t('pompidou.info.ticket')

  return (
    <div>
      <div className="relative h-[60vh] overflow-hidden">
        <img src="/images/pompidou.svg" alt="Pompidou" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <p className="text-gold-400 text-xs tracking-[0.4em] uppercase mb-3">{t('pompidou.hero.subtitle')}</p>
            <h1 className="text-4xl md:text-6xl font-serif mb-4">{t('pompidou.hero.title')}</h1>
            <div className="gold-divider mx-auto" />
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-50 p-8 rounded-sm">
              <img src="/images/pompidou.svg" alt="Art Exhibition" className="w-full rounded-sm" />
            </div>
            <div>
              <div className="w-10 h-0.5 bg-gold-500 mb-4" />
              <h2 className="section-title">{t('pompidou.info.title')}</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">{t('pompidou.info.desc')}</p>
              <div className="space-y-3 mb-8">
                <p className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin size={16} className="text-gold-500 shrink-0" />
                  {t('pompidou.info.floor')}
                </p>
                <p className="flex items-center gap-3 text-sm text-gray-600">
                  <Clock size={16} className="text-gold-500 shrink-0" />
                  {t('pompidou.info.hours')}
                </p>
              </div>
              <a href={link?.url || '#'} target="_blank" rel="noopener noreferrer" className="btn-primary">
                {linkLabel} <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
