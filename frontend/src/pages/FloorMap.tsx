import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import { Clock, Phone } from 'lucide-react'
import { publicApi } from '../api'
import PageHero from '../components/common/PageHero'
import type { FloorMap as FloorMapType, Store } from '../types'

const FLOOR_MAP_IMAGES: Record<string, string> = {
  'B1':      '/images/floor-b1.svg',
  'GF':      '/images/floor-gf.svg',
  '57F-59F': '/images/floor-57f.svg',
  '60F':     '/images/floor-60f.svg',
}

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

  const getFloorName = (f: FloorMapType) => {
    const key = `floorName${lang.charAt(0).toUpperCase() + lang.slice(1)}` as keyof FloorMapType
    return (f as any)[key] || f.floorNameKo
  }
  const getDesc = (f: FloorMapType) => {
    const key = `description${lang.charAt(0).toUpperCase() + lang.slice(1)}` as keyof FloorMapType
    return (f as any)[key] || f.descriptionKo
  }
  const getStoreName = (s: Store) => {
    const key = `name${lang.charAt(0).toUpperCase() + lang.slice(1)}` as keyof Store
    return (s as any)[key] || s.nameKo
  }

  const zoneColors: Record<string, string> = {
    FNB:     'bg-amber-100 text-amber-800',
    RETAIL:  'bg-forest-100 text-forest-800',
    AMENITY: 'bg-cream-300 text-cream-900',
    CULTURE: 'bg-blue-100 text-blue-800',
    SERVICE: 'bg-gray-100 text-gray-700',
  }

  return (
    <div className="bg-cream-100 min-h-screen">
      <PageHero
        title={t('floorMap.hero.title')}
        subtitle={t('floorMap.hero.subtitle')}
        imageSrc="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&w=1920&q=80"
      />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Floor selector */}
          <aside className="lg:w-56 shrink-0">
            <p className="section-label mb-6">{t('floorMap.selectFloor')}</p>
            <div className="space-y-1">
              {floors.map(floor => (
                <button
                  key={floor.floorNumber}
                  onClick={() => setSelected(floor.floorNumber === selected ? null : floor.floorNumber)}
                  className={`w-full flex items-center gap-4 px-4 py-3.5 text-left transition-all border-b ${
                    selected === floor.floorNumber
                      ? 'border-forest-600 bg-forest-900 text-cream-200'
                      : 'border-sand/40 hover:border-forest-400 hover:bg-cream-200 text-forest-800'
                  }`}
                >
                  <span className={`text-xs font-sans tracking-widest font-medium w-12 ${
                    selected === floor.floorNumber ? 'text-cream-400' : 'text-forest-500'
                  }`}>{floor.floorNumber}</span>
                  <span className="text-sm font-serif font-light">{getFloorName(floor)}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            {selectedFloor ? (
              <div className="animate-fade-in">
                {/* Header */}
                <div className="border-b border-sand/60 pb-6 mb-8">
                  <p className="section-label mb-2">{selectedFloor.floorNumber}</p>
                  <h2 className="text-3xl font-serif font-light text-forest-900 mb-3">
                    {getFloorName(selectedFloor)}
                  </h2>
                  <p className="text-forest-700/70 font-light">{getDesc(selectedFloor)}</p>
                </div>

                {/* Floor map image */}
                <div className="mb-10">
                  {FLOOR_MAP_IMAGES[selectedFloor.floorNumber] ? (
                    <div className="border border-sand/60 overflow-hidden">
                      <img
                        src={FLOOR_MAP_IMAGES[selectedFloor.floorNumber]}
                        alt={`${selectedFloor.floorNumber} 약도`}
                        className="w-full"
                      />
                    </div>
                  ) : (
                    <div className="border border-sand/60 bg-cream-200 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <p className="font-serif text-2xl text-forest-700 font-light mb-2">{selectedFloor.floorNumber}</p>
                        <p className="text-xs text-forest-500 tracking-widest uppercase">Floor Plan</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Stores list */}
                {floorStores.length > 0 && (
                  <div>
                    <p className="section-label mb-6">{t('floorMap.stores')}</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {floorStores.map(store => (
                        <div key={store.id} className="border border-sand/60 p-5 bg-cream-50 hover:border-forest-400 transition-colors duration-300">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="font-serif text-lg font-light text-forest-900">{getStoreName(store)}</h4>
                            <span className={`text-xs px-2 py-0.5 font-sans tracking-wider ${zoneColors[store.zone] || 'bg-gray-100 text-gray-600'}`}>
                              {store.zone}
                            </span>
                          </div>
                          <div className="space-y-1.5">
                            {store.hours && (
                              <p className="flex items-center gap-2 text-xs text-forest-600 font-light">
                                <Clock size={11} /> {store.hours}
                              </p>
                            )}
                            {store.phone && (
                              <p className="flex items-center gap-2 text-xs text-forest-600 font-light">
                                <Phone size={11} /> {store.phone}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-32">
                <p className="text-5xl font-serif font-light text-forest-300 mb-4">63</p>
                <p className="text-forest-500 font-light tracking-wider">{t('floorMap.selectFloor')}</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
