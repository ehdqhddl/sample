import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-building-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gold-500 flex items-center justify-center">
                <span className="text-white font-bold">63</span>
              </div>
              <span className="text-white font-serif text-xl tracking-wider">BUILDING</span>
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-gold-500" />
                {t('footer.address')}
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="shrink-0 text-gold-500" />
                {t('footer.tel')}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold-400 font-medium text-sm mb-4 uppercase tracking-wider">시설 안내</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['observatory', 'pompidou', 'buffet', 'restaurant'].map(key => (
                <li key={key}>
                  <Link to={`/${key}`} className="hover:text-gold-400 transition-colors">
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold-400 font-medium text-sm mb-4 uppercase tracking-wider">정보</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['story', 'gfConcept', 'floorMap', 'news'].map(key => (
                <li key={key}>
                  <Link to={`/${key === 'gfConcept' ? 'gf-concept' : key === 'floorMap' ? 'floor-map' : key}`}
                    className="hover:text-gold-400 transition-colors">
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>{t('footer.copyright')}</p>
          <div className="flex gap-4">
            <span className="hover:text-gold-400 cursor-pointer transition-colors">{t('footer.privacy')}</span>
            <span className="hover:text-gold-400 cursor-pointer transition-colors">{t('footer.terms')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
