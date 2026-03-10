import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ChevronDown, ExternalLink } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { publicApi } from '../api'

export default function Home() {
  const { t } = useTranslation()
  const { data: newsRes } = useQuery({
    queryKey: ['news'],
    queryFn: () => publicApi.getNews(),
  })
  const news = newsRes?.data?.data?.slice(0, 3) || []

  const highlights = [
    { key: 'observatory', path: '/observatory', color: 'from-blue-900 to-blue-700', icon: '🔭' },
    { key: 'pompidou', path: '/pompidou', color: 'from-red-900 to-red-700', icon: '🎨' },
    { key: 'buffet', path: '/buffet', color: 'from-amber-900 to-amber-700', icon: '🍽️' },
    { key: 'restaurant', path: '/restaurant', color: 'from-gray-900 to-gray-700', icon: '✨' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-bg.svg" alt="63 Building" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <p className="text-gold-400 text-xs sm:text-sm font-medium tracking-[0.4em] uppercase mb-4">
            {t('home.hero.tagline')}
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-semibold tracking-wider mb-6"
              style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #F5D170 50%, #C9A84C 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {t('home.hero.title')}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-10 font-light">{t('home.hero.subtitle')}</p>
          <Link to="/story" className="btn-primary text-base px-8 py-4">
            {t('home.hero.cta')}
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28 bg-building-light">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="gold-divider" />
          <h2 className="section-title">{t('home.intro.title')}</h2>
          <p className="text-gray-600 leading-relaxed text-lg">{t('home.intro.desc')}</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map(item => (
          <Link key={item.key} to={item.path}
            className={`group relative h-64 md:h-80 flex items-end p-6 bg-gradient-to-t ${item.color} overflow-hidden card-hover`}>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div className="relative z-10 text-white">
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="text-xl font-serif font-semibold mb-1">{t(`home.highlights.${item.key}.title`)}</h3>
              <p className="text-white/70 text-sm flex items-center gap-1">
                {t(`home.highlights.${item.key}.desc`)}
                <ExternalLink size={12} />
              </p>
            </div>
          </Link>
        ))}
      </section>

      {/* Zone Guide Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="gold-divider" />
            <h2 className="section-title">{t('nav.floorMap')}</h2>
            <p className="section-subtitle">{t('floorMap.hero.subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {['B1', 'GF', '1-10F', '11-56F', '57-59F', '60F'].map((floor, i) => (
              <Link key={floor} to="/floor-map"
                className="group flex flex-col items-center justify-center p-4 border border-gray-200 hover:border-gold-400 hover:bg-gold-50 transition-all">
                <div className="w-10 h-10 rounded-full bg-gold-100 group-hover:bg-gold-200 flex items-center justify-center mb-2 transition-colors">
                  <span className="text-gold-700 font-bold text-xs">{floor}</span>
                </div>
                <span className="text-gray-600 text-xs text-center group-hover:text-gold-700 transition-colors">
                  {['지하 1층', '지상층', '1~10층', '11~56층', '57~59층', '60층'][i]}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/floor-map" className="btn-outline">{t('common.more')}</Link>
          </div>
        </div>
      </section>

      {/* News */}
      {news.length > 0 && (
        <section className="py-20 bg-building-light">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <div>
                <div className="w-10 h-0.5 bg-gold-500 mb-3" />
                <h2 className="section-title mb-0">{t('home.news.title')}</h2>
              </div>
              <Link to="/news" className="text-gold-600 text-sm font-medium hover:text-gold-800 flex items-center gap-1">
                {t('home.news.more')} →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {news.map((item: any) => (
                <article key={item.id} className="bg-white p-6 border border-gray-100 card-hover">
                  <span className={`inline-block text-xs font-medium px-2 py-1 mb-3 ${
                    item.newsType === 'NOTICE' ? 'bg-blue-100 text-blue-700' : 'bg-gold-100 text-gold-700'
                  }`}>
                    {item.newsType === 'NOTICE' ? t('news.notice') : t('news.news')}
                  </span>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.titleKo}</h3>
                  <p className="text-gray-500 text-sm line-clamp-3">{item.contentKo}</p>
                  <p className="text-gray-400 text-xs mt-3">{new Date(item.createdAt).toLocaleDateString('ko-KR')}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
