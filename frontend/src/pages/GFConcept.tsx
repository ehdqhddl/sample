import { useTranslation } from 'react-i18next'
import { Sparkles, Leaf, History } from 'lucide-react'

export default function GFConcept() {
  const { t } = useTranslation()
  const elements = [
    { key: 'light', icon: Sparkles },
    { key: 'nature', icon: Leaf },
    { key: 'heritage', icon: History },
  ]
  return (
    <div>
      <div className="relative h-[60vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80" alt="GF Concept" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <p className="text-gold-400 text-xs tracking-[0.4em] uppercase mb-3">{t('gfConcept.hero.subtitle')}</p>
            <h1 className="text-4xl md:text-6xl font-serif mb-4">{t('gfConcept.hero.title')}</h1>
            <div className="gold-divider mx-auto" />
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-title">{t('gfConcept.concept.title')}</h2>
          <div className="gold-divider mx-auto" />
          <p className="text-gray-600 leading-relaxed text-lg">{t('gfConcept.concept.desc')}</p>
        </div>
      </section>

      <section className="py-20 bg-building-light">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="section-title text-center mb-2">{t('gfConcept.elements.title')}</h2>
          <div className="gold-divider mx-auto mb-14" />
          <div className="grid md:grid-cols-3 gap-8">
            {elements.map(({ key, icon: Icon }) => (
              <div key={key} className="bg-white p-8 text-center border border-gray-100 card-hover">
                <div className="w-16 h-16 rounded-full bg-gold-100 flex items-center justify-center mx-auto mb-5">
                  <Icon className="text-gold-600" size={28} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                  {t(`gfConcept.elements.${key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">{t(`gfConcept.elements.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-64 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-building-dark/80 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-gold-400 tracking-[0.3em] text-sm">GROUND FLOOR</p>
            <p className="font-serif text-3xl mt-2">GOLDEN FOREST</p>
          </div>
        </div>
      </section>
    </div>
  )
}
