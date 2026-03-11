import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { publicApi } from '../api'

function useParallax(factor = 0.35) {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * factor)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [factor])
  return offset
}

function useIntersection(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}

const facilities = [
  {
    key: 'observatory',
    path: '/observatory',
    label: '60F',
    titleKo: '전망대',
    titleEn: 'Observatory',
    descKo: '서울 360° 파노라마',
    bg: 'from-slate-900 via-blue-950 to-slate-800',
  },
  {
    key: 'pompidou',
    path: '/pompidou',
    label: '2–3F',
    titleKo: '퐁피두 센터',
    titleEn: 'Centre Pompidou',
    descKo: '현대미술의 새로운 지평',
    bg: 'from-stone-900 via-red-950 to-stone-800',
  },
  {
    key: 'buffet',
    path: '/buffet',
    label: 'B1F',
    titleKo: '시그니처 뷔페',
    titleEn: 'Signature Buffet',
    descKo: '신선한 해산물과 프리미엄 다이닝',
    bg: 'from-amber-950 via-stone-900 to-amber-900',
  },
  {
    key: 'restaurant',
    path: '/restaurant',
    label: '57–59F',
    titleKo: '스카이 레스토랑',
    titleEn: 'Sky Restaurant',
    descKo: '한강이 내려다보이는 파인다이닝',
    bg: 'from-forest-950 via-forest-900 to-forest-800',
  },
]

export default function Home() {
  const { t } = useTranslation()
  const heroOffset = useParallax(0.35)
  const intro = useIntersection()
  const facilityRef = useIntersection(0.1)
  const newsRef = useIntersection()
  const storyRef = useIntersection()

  const { data: newsRes } = useQuery({
    queryKey: ['news'],
    queryFn: () => publicApi.getNews(),
  })
  const news = newsRes?.data?.data?.slice(0, 3) || []

  return (
    <div className="bg-cream-100">

      {/* ── Hero (Parallax) ── */}
      <section className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 parallax-bg"
          style={{ transform: `translateY(${heroOffset}px)` }}
        >
          <img
            src="/images/hero-bg.svg"
            alt="63 Building"
            className="w-full h-[120%] object-cover"
            style={{ marginTop: '-10%' }}
          />
          <div className="absolute inset-0 bg-forest-950/60" />
        </div>

        <div className="relative z-10 text-center px-6 animate-fade-in">
          <p className="section-label-light tracking-ultra mb-6">
            Seoul · Han River · Since 1985
          </p>
          <h1 className="text-7xl sm:text-8xl md:text-[10rem] font-serif font-light text-cream-100 leading-none tracking-tight mb-6">
            63
          </h1>
          <p className="text-xl sm:text-2xl font-serif font-light text-cream-300 tracking-wider mb-2">
            BUILDING
          </p>
          <div className="divider-cream mx-auto" />
          <p className="text-base text-cream-400 font-sans font-light tracking-wider mb-10">
            {t('home.hero.subtitle')}
          </p>
          <Link to="/story" className="btn-outline-light">
            {t('home.hero.cta')}
          </Link>
        </div>

        <a
          href="#intro"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream-400 hover:text-cream-200 transition-colors animate-bounce"
        >
          <ChevronDown size={24} strokeWidth={1.5} />
        </a>
      </section>

      {/* ── Intro Statement ── */}
      <section id="intro" className="py-28 md:py-40 bg-cream-100">
        <div
          ref={intro.ref}
          className={`max-w-3xl mx-auto px-6 text-center transition-all duration-1000 ${
            intro.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="section-label mb-8">The New Beginning</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-forest-900 leading-relaxed mb-8">
            {t('home.intro.title')}
          </h2>
          <div className="divider-forest mx-auto" />
          <p className="text-forest-700/80 leading-loose text-lg font-light mt-8">
            {t('home.intro.desc')}
          </p>
        </div>
      </section>

      {/* ── Story Parallax Strip ── */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 parallax-bg"
          style={{ transform: `translateY(${heroOffset * 0.5}px)` }}
        >
          <img
            src="/images/story.svg"
            alt="63 Building Story"
            className="w-full h-[120%] object-cover"
            style={{ marginTop: '-10%' }}
          />
          <div className="absolute inset-0 bg-forest-900/70" />
        </div>
        <div
          ref={storyRef.ref}
          className={`relative z-10 text-center px-6 transition-all duration-1000 ${
            storyRef.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="section-label-light mb-4">Since 1985</p>
          <h2 className="text-4xl md:text-6xl font-serif font-light text-cream-100 mb-6">
            63빌딩의 이야기
          </h2>
          <Link to="/story" className="btn-outline-light">
            스토리 보기 <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── Facilities Grid ── */}
      <section className="bg-forest-900 py-24 md:py-32">
        <div
          ref={facilityRef.ref}
          className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${
            facilityRef.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <p className="section-label-light mb-4">Facilities</p>
            <h2 className="section-title-light">공간을 경험하다</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-forest-700">
            {facilities.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`group relative flex flex-col justify-end p-8 h-72 md:h-96 bg-gradient-to-b ${item.bg} overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-forest-800/40" />
                <div className="relative z-10">
                  <span className="text-xs tracking-widest text-cream-500 font-sans mb-3 block">{item.label}</span>
                  <h3 className="text-2xl font-serif font-light text-cream-100 mb-1">{item.titleKo}</h3>
                  <p className="text-sm font-sans font-light text-cream-400 mb-4">{item.titleEn}</p>
                  <p className="text-xs text-cream-500 leading-relaxed mb-4">{item.descKo}</p>
                  <span className="inline-flex items-center gap-2 text-xs tracking-widest text-cream-300 uppercase group-hover:gap-3 transition-all duration-300">
                    자세히 보기 <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Floor Map Preview ── */}
      <section className="py-24 md:py-32 bg-cream-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">Floor Guide</p>
              <h2 className="section-title mb-6">층별 안내</h2>
              <div className="divider-forest" />
              <p className="text-forest-700/80 font-light leading-relaxed mb-8">
                {t('floorMap.hero.subtitle')}
              </p>
              <Link to="/floor-map" className="btn-primary">
                층별 안내 보기 <ArrowRight size={14} />
              </Link>
            </div>
            <div className="space-y-2">
              {[
                { floor: '60F', label: '전망대', sub: 'Observatory · 360° View' },
                { floor: '57–59F', label: '레스토랑', sub: 'Fine Dining' },
                { floor: '11–56F', label: '오피스', sub: 'Office & Corporate' },
                { floor: '1–10F', label: '리테일', sub: 'Shopping & Retail' },
                { floor: 'GF', label: '메인 입구', sub: 'Main Entrance & Café' },
                { floor: 'B1', label: 'F&B존', sub: 'Food & Beverage' },
              ].map((item) => (
                <Link
                  key={item.floor}
                  to="/floor-map"
                  className="group flex items-center gap-4 p-4 border border-sand/60 hover:border-forest-500 hover:bg-cream-100 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-forest-900 flex items-center justify-center shrink-0">
                    <span className="text-cream-300 text-xs font-sans tracking-wider">{item.floor}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-forest-900 font-serif text-lg font-light">{item.label}</p>
                    <p className="text-forest-600/70 text-xs font-sans tracking-wider">{item.sub}</p>
                  </div>
                  <ArrowRight size={14} className="text-forest-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── News Section ── */}
      {news.length > 0 && (
        <section className="py-24 md:py-32 bg-forest-950">
          <div
            ref={newsRef.ref}
            className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${
              newsRef.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="section-label-light mb-4">News & Notice</p>
                <h2 className="section-title-light">{t('home.news.title')}</h2>
              </div>
              <Link to="/news" className="text-cream-500 text-xs tracking-widest uppercase hover:text-cream-300 transition-colors flex items-center gap-2">
                {t('home.news.more')} <ArrowRight size={12} />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {news.map((item: any) => (
                <article key={item.id} className="border-t border-forest-700 pt-6 group cursor-pointer">
                  <span className={`inline-block text-xs tracking-widest uppercase mb-4 px-2 py-1 ${
                    item.newsType === 'NOTICE'
                      ? 'bg-forest-800 text-cream-400'
                      : 'bg-forest-600/40 text-forest-300'
                  }`}>
                    {item.newsType === 'NOTICE' ? t('news.notice') : t('news.news')}
                  </span>
                  <h3 className="font-serif text-xl font-light text-cream-200 mb-3 leading-snug line-clamp-2 group-hover:text-cream-100 transition-colors">
                    {item.titleKo}
                  </h3>
                  <p className="text-cream-600 text-sm font-light leading-relaxed line-clamp-2 mb-4">
                    {item.contentKo}
                  </p>
                  <p className="text-forest-600 text-xs tracking-wider font-sans">
                    {new Date(item.createdAt).toLocaleDateString('ko-KR')}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── GF Concept Strip ── */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 parallax-bg"
          style={{ transform: `translateY(${heroOffset * 0.3}px)` }}
        >
          <img
            src="/images/gf-concept.svg"
            alt="GF Design Concept"
            className="w-full h-[120%] object-cover"
            style={{ marginTop: '-10%' }}
          />
          <div className="absolute inset-0 bg-forest-900/65" />
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="section-label-light mb-4">Ground Floor</p>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-cream-100 mb-6">
            GF 디자인 컨셉
          </h2>
          <Link to="/gf-concept" className="btn-outline-light">
            더 알아보기 <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </div>
  )
}
