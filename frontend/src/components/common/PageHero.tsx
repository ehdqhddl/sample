interface PageHeroProps {
  title: string
  subtitle?: string
  bgClass?: string
  children?: React.ReactNode
}

export default function PageHero({ title, subtitle, bgClass = 'bg-building-dark', children }: PageHeroProps) {
  return (
    <section className={`page-hero ${bgClass}`}>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <p className="text-gold-400 text-sm font-medium tracking-[0.3em] uppercase mb-3">{subtitle}</p>
        <h1 className="section-title text-white mb-0">{title}</h1>
        <div className="gold-divider mx-auto" />
        {children}
      </div>
    </section>
  )
}
