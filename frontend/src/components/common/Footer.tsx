import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-forest-950 text-cream-400">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border border-forest-700 flex items-center justify-center">
                <span className="text-cream-400 font-serif font-light text-sm">63</span>
              </div>
              <span className="text-cream-300 font-serif font-light tracking-[0.2em] text-sm">BUILDING</span>
            </div>
            <p className="text-xs text-forest-500 leading-relaxed mb-6 font-light">
              서울의 스카이라인을 완성하는 상징적인 랜드마크.<br />
              새로운 문화·미식·경험의 공간으로 거듭났습니다.
            </p>
            <div className="space-y-2 text-xs text-forest-600">
              <p className="flex items-start gap-2">
                <MapPin size={12} className="mt-0.5 shrink-0 text-forest-500" />
                {t('footer.address')}
              </p>
              <p className="flex items-center gap-2">
                <Phone size={12} className="shrink-0 text-forest-500" />
                {t('footer.tel')}
              </p>
            </div>
          </div>

          {/* Facilities */}
          <div className="md:col-span-3">
            <h4 className="text-xs tracking-[0.25em] uppercase text-forest-600 mb-6 font-sans">시설 안내</h4>
            <ul className="space-y-3 text-xs text-forest-500 font-light">
              {['observatory', 'pompidou', 'buffet', 'restaurant'].map(key => (
                <li key={key}>
                  <Link to={`/${key}`} className="hover:text-cream-400 transition-colors tracking-wide">
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="md:col-span-4">
            <h4 className="text-xs tracking-[0.25em] uppercase text-forest-600 mb-6 font-sans">정보</h4>
            <ul className="space-y-3 text-xs text-forest-500 font-light">
              {['story', 'gfConcept', 'floorMap', 'zoneGuide', 'news'].map(key => (
                <li key={key}>
                  <Link
                    to={`/${key === 'gfConcept' ? 'gf-concept' : key === 'floorMap' ? 'floor-map' : key === 'zoneGuide' ? 'zone-guide' : key}`}
                    className="hover:text-cream-400 transition-colors tracking-wide"
                  >
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-forest-700 font-light tracking-wide">{t('footer.copyright')}</p>
          <div className="flex gap-6 text-xs text-forest-700 font-light">
            <span className="hover:text-forest-500 cursor-pointer transition-colors tracking-wide">{t('footer.privacy')}</span>
            <span className="hover:text-forest-500 cursor-pointer transition-colors tracking-wide">{t('footer.terms')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
