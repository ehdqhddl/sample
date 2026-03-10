import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import { publicApi } from '../api'
import { ExternalLink, Clock, MapPin, Ruler } from 'lucide-react'

export default function Observatory() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'ko' | 'en' | 'zh' | 'ja'

  const { data: linkRes } = useQuery({
    queryKey: ['link', 'OBSERVATORY'],
    queryFn: () => publicApi.getLinkByType('OBSERVATORY'),
  })
  const link = linkRes?.data?.data
  const linkUrl = link?.url || '#'
  const capLang = lang.charAt(0).toUpperCase() + lang.slice(1)
  const linkLabel = (link as any)?.[`label${capLang}`] || t('observatory.info.ticket')

  const features = ['view360', 'night', 'photo']

  return (
    <div>
      <div className="relative h-[70vh] overflow-hidden">
        <img src="/images/observatory.svg" alt="Observatory" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <p className="text-gold-400 text-xs tracking-[0.4em] uppercase mb-3">{t('observatory.hero.subtitle')}</p>
            <h1 className="text-4xl md:text-6xl font-serif mb-4">{t('observatory.hero.title')}</h1>
            <div className="gold-divider mx-auto" />
            <a href={linkUrl} target="_blank" rel="noopener noreferrer"
              className="btn-primary mt-6 inline-flex items-center gap-2">
              {linkLabel} <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-10 h-0.5 bg-gold-500 mb-4" />
              <h2 className="section-title">{t('observatory.info.title')}</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">{t('observatory.info.desc')}</p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: MapPin, label: 'Floor', value: t('observatory.info.floor') },
                  { icon: Ruler, label: 'Height', value: t('observatory.info.height') },
                  { icon: Clock, label: 'Hours', value: t('observatory.info.hours') },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="text-center p-4 bg-building-light">
                    <Icon size={20} className="mx-auto text-gold-500 mb-2" />
                    <p className="text-xs text-gray-500 mb-1">{label}</p>
                    <p className="font-semibold text-gray-900 text-sm">{value}</p>
                  </div>
                ))}
              </div>
              <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                {linkLabel} <ExternalLink size={16} />
              </a>
            </div>
            <div className="bg-building-dark rounded-sm overflow-hidden h-80">
              <img src="/images/observatory.svg" alt="Observatory View" className="w-full h-full object-cover opacity-90" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-building-dark text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map(feat => (
              <div key={feat} className="text-center p-6 border border-white/10 hover:border-gold-500 transition-colors">
                <h3 className="font-serif text-lg text-gold-400 mb-2">{t(`observatory.features.${feat}.title`)}</h3>
                <p className="text-gray-400 text-sm">{t(`observatory.features.${feat}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
