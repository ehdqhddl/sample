import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import { publicApi } from '../api'
import type { Store, StoreZone } from '../types'

const ZONES: { key: string; value: StoreZone | 'ALL' }[] = [
  { key: 'all', value: 'ALL' },
  { key: 'FNB', value: 'FNB' },
  { key: 'RETAIL', value: 'RETAIL' },
  { key: 'AMENITY', value: 'AMENITY' },
  { key: 'CULTURE', value: 'CULTURE' },
  { key: 'SERVICE', value: 'SERVICE' },
]

const ZONE_COLORS: Record<string, string> = {
  FNB: 'bg-orange-100 text-orange-700 border-orange-200',
  RETAIL: 'bg-blue-100 text-blue-700 border-blue-200',
  AMENITY: 'bg-green-100 text-green-700 border-green-200',
  CULTURE: 'bg-purple-100 text-purple-700 border-purple-200',
  SERVICE: 'bg-gray-100 text-gray-700 border-gray-200',
}

export default function ZoneGuide() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'ko' | 'en' | 'zh' | 'ja'
  const [activeZone, setActiveZone] = useState<string>('ALL')

  const { data: storesRes, isLoading } = useQuery({
    queryKey: ['stores'],
    queryFn: () => publicApi.getStores(),
  })
  const allStores: Store[] = storesRes?.data?.data || []
  const filtered = activeZone === 'ALL' ? allStores : allStores.filter(s => s.zone === activeZone)

  const getName = (store: Store) => {
    const capLang = lang.charAt(0).toUpperCase() + lang.slice(1)
    return (store as any)[`name${capLang}`] || store.nameKo
  }
  const getDesc = (store: Store) => {
    const capLang = lang.charAt(0).toUpperCase() + lang.slice(1)
    return (store as any)[`description${capLang}`] || store.descriptionKo
  }

  return (
    <div className="pt-20">
      <div className="bg-building-dark py-16 text-center text-white">
        <p className="text-gold-400 text-xs tracking-[0.4em] uppercase mb-3">{t('zoneGuide.hero.subtitle')}</p>
        <h1 className="text-4xl md:text-5xl font-serif">{t('zoneGuide.hero.title')}</h1>
        <div className="gold-divider mx-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Zone filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {ZONES.map(zone => (
            <button
              key={zone.value}
              onClick={() => setActiveZone(zone.value)}
              className={`px-5 py-2 text-sm font-medium border transition-all ${
                activeZone === zone.value
                  ? 'bg-gold-600 text-white border-gold-600'
                  : 'border-gray-300 text-gray-600 hover:border-gold-400 hover:text-gold-600'
              }`}
            >
              {t(`zoneGuide.zones.${zone.key}`)}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="text-center py-20 text-gray-400">{t('common.loading')}</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map(store => (
              <div key={store.id} className="bg-white border border-gray-100 p-5 card-hover">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{getName(store)}</h3>
                  <span className={`text-xs px-2 py-0.5 border ${ZONE_COLORS[store.zone] || 'bg-gray-100 text-gray-600'}`}>
                    {t(`zoneGuide.zones.${store.zone}`)}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">{getDesc(store)}</p>
                <div className="space-y-1 text-xs text-gray-400">
                  {store.floor && <p>📍 {store.floor}{t('zoneGuide.floor')}</p>}
                  {store.hours && <p>⏰ {store.hours}</p>}
                  {store.phone && <p>📞 {store.phone}</p>}
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full text-center py-16 text-gray-400">
                <p className="text-lg">{t('news.noData')}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
