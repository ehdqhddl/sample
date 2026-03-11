import { useEffect, useState } from 'react'

interface PageHeroProps {
  title: string
  subtitle?: string
  imageSrc?: string
  children?: React.ReactNode
}

export default function PageHero({ title, subtitle, imageSrc, children }: PageHeroProps) {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.3)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="page-hero">
      <div
        className="absolute inset-0 parallax-bg"
        style={{ transform: `translateY(${offset}px)` }}
      >
        {imageSrc ? (
          <img src={imageSrc} alt={title} className="w-full h-[120%] object-cover" style={{ marginTop: '-10%' }} />
        ) : (
          <div className="w-full h-full bg-forest-900" />
        )}
        <div className="absolute inset-0 bg-forest-950/65" />
      </div>
      <div className="relative z-10 text-center px-6 animate-fade-in">
        {subtitle && (
          <p className="section-label-light mb-5">{subtitle}</p>
        )}
        <h1 className="text-4xl md:text-6xl font-serif font-light text-cream-100 mb-4 leading-tight">
          {title}
        </h1>
        <div className="divider-cream mx-auto" />
        {children}
      </div>
    </section>
  )
}
