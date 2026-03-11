import { useTranslation } from 'react-i18next'
import PageHero from '../components/common/PageHero'

const TIMELINE = ['1985', '1990', '2020', '2024']

export default function Story() {
  const { t } = useTranslation()
  return (
    <div>
      <div className="relative h-[60vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1920&q=80" alt="63 Building Story" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <p className="text-gold-400 text-xs tracking-[0.4em] uppercase mb-3">{t('story.hero.subtitle')}</p>
            <h1 className="text-4xl md:text-6xl font-serif mb-4">{t('story.hero.title')}</h1>
            <div className="gold-divider mx-auto" />
          </div>
        </div>
      </div>

      {/* History Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="section-title text-center">{t('story.history.title')}</h2>
          <div className="gold-divider mx-auto mb-14" />
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold-200 -translate-x-1/2 hidden md:block" />
            <div className="space-y-12">
              {TIMELINE.map((year, i) => (
                <div key={year} className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`md:w-1/2 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                    <div className="inline-block bg-gold-500 text-white text-sm font-bold px-4 py-1.5 mb-3">
                      {t(`story.history.${year}.year`)}
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                      {t(`story.history.${year}.title`)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{t(`story.history.${year}.desc`)}</p>
                  </div>
                  <div className="hidden md:flex justify-center w-8">
                    <div className="w-4 h-4 rounded-full bg-gold-500 border-4 border-gold-100 z-10" />
                  </div>
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-20 bg-building-dark text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="gold-divider mx-auto" />
          <h2 className="section-title text-white">{t('story.brand.title')}</h2>
          <p className="text-gray-300 leading-relaxed text-lg">{t('story.brand.desc')}</p>
        </div>
      </section>
    </div>
  )
}
