import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import { publicApi } from '../api'
import type { FloorMap as FloorMapType, Store } from '../types'

export default function FloorMap() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'ko' | 'en' | 'zh' | 'ja'
  const [selected, setSelected] = useState<string | null>(null)

  const { data: floorsRes } = useQuery({ queryKey: ['floor-maps'], queryFn: publicApi.getFloorMaps })
  const { data: storesRes } = useQuery({ queryKey: ['stores'], queryFn: () => publicApi.getStores() })

  const floors: FloorMapType[] = floorsRes?.data?.data || []
  const stores: Store[] = storesRes?.data?.data || []

  const selectedFloor = floors.find(f => f.floorNumber === selected)
  const floorStores = stores.filter(s => s.floor === selected)

  const getName = (item: FloorMapType | Store) => {
    const key = `name${lang.charAt(0).toUpperCase() + lang.slice(1)}` as keyof typeof item
    return (item as any)[key] || (item as any).nameKo || (item as any).floorNameKo || ''
  }
  const getFloorName = (f: FloorMapType) => {
    const key = `floorName${lang.charAt(0).toUpperCase() + lang.slice(1)}` as keyof FloorMapType
    return (f as any)[key] || f.floorNameKo
  }
  const getDesc = (f: FloorMapType) => {
    const key = `description${lang.charAt(0).toUpperCase() + lang.slice(1)}` as keyof FloorMapType
    return (f as any)[key] || f.descriptionKo
  }

  return (
    <div className="pt-20">
      <div className="bg-building-dark py-16 text-center text-white">
        <p className="text-gold-400 text-xs tracking-[0.4em] uppercase mb-3">{t('floorMap.hero.subtitle')}</p>
        <h1 className="text-4xl md:text-5xl font-serif">{t('floorMap.hero.title')}</h1>
        <div className="gold-divider mx-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Floor selector */}
          <aside className="lg:w-64 shrink-0">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">{t('floorMap.selectFloor')}</h3>
            <div className="space-y-1">
              {floors.map(floor => (
                <button
                  key={floor.floorNumber}
                  onClick={() => setSelected(floor.floorNumber === selected ? null : floor.floorNumber)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-all border ${
                    selected === floor.floorNumber
                      ? 'border-gold-400 bg-gold-50 text-gold-700 font-medium'
                      : 'border-gray-200 hover:border-gold-200 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <span className="font-semibold">{floor.floorNumber}</span>
                  <span className="text-xs">{getFloorName(floor)}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1">
            {selectedFloor ? (
              <div className="animate-fade-in">
                <div className="border border-gray-200 p-6 mb-6 bg-white">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-3xl font-bold text-gold-600">{selectedFloor.floorNumber}</span>
                      <h2 className="text-xl font-serif text-gray-900 mt-1">{getFloorName(selectedFloor)}</h2>
                    </div>
                  </div>
                  <p className="text-gray-600">{getDesc(selectedFloor)}</p>
                </div>

                {/* Floor map image placeholder */}
                <div className="border border-dashed border-gold-300 bg-gold-50 h-64 flex items-center justify-center mb-6 rounded-sm">
                  <div className="text-center text-gold-600">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p className="font-medium">{selectedFloor.floorNumber} 약도</p>
                    <p className="text-sm text-gold-500 mt-1">Floor Map Image</p>
                  </div>
                </div>

                {/* Stores */}
                {floorStores.length > 0 && (
                  <div>
                    <h3 className="font-serif text-xl mb-4 text-gray-900">{t('floorMap.stores')}</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {floorStores.map(store => (
                        <div key={store.id} className="border border-gray-200 p-4 bg-white card-hover">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-medium text-gray-900">{getName(store)}</h4>
                              <span className={`text-xs px-2 py-0.5 mt-1 inline-block ${
                                store.zone === 'FNB' ? 'bg-orange-100 text-orange-700' :
                                store.zone === 'RETAIL' ? 'bg-blue-100 text-blue-700' :
                                'bg-green-100 text-green-700'
                              }`}>{t(`zoneGuide.zones.${store.zone}`)}</span>
                            </div>
                          </div>
                          {store.hours && <p className="text-gray-500 text-xs mt-2">⏰ {store.hours}</p>}
                          {store.phone && <p className="text-gray-500 text-xs mt-1">📞 {store.phone}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-24 text-gray-400">
                <div className="text-6xl mb-4">🏢</div>
                <p className="text-lg">{t('floorMap.selectFloor')}</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
