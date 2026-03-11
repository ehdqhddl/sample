import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, ChevronDown } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'

const NAV_ITEMS = [
  { key: 'story', path: '/story' },
  { key: 'gfConcept', path: '/gf-concept' },
  { key: 'floorMap', path: '/floor-map' },
  { key: 'zoneGuide', path: '/zone-guide' },
]

const FACILITY_ITEMS = [
  { key: 'observatory', path: '/observatory' },
  { key: 'pompidou', path: '/pompidou' },
  { key: 'buffet', path: '/buffet' },
  { key: 'restaurant', path: '/restaurant' },
]

export default function Header() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [facilityOpen, setFacilityOpen] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  const isTransparent = isHome && !scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-forest-950/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`w-8 h-8 flex items-center justify-center border transition-colors duration-300 ${
              isTransparent ? 'border-cream-400/60 group-hover:border-cream-200' : 'border-cream-600/40 group-hover:border-cream-400'
            }`}>
              <span className="text-cream-200 font-serif font-light text-sm">63</span>
            </div>
            <span className={`font-serif font-light tracking-[0.2em] text-sm hidden sm:block transition-colors duration-300 ${
              isTransparent ? 'text-cream-200' : 'text-cream-300'
            }`}>
              BUILDING
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map(item => (
              <NavLink
                key={item.key}
                to={item.path}
                className={({ isActive }) =>
                  `text-xs tracking-widest uppercase font-sans transition-colors duration-200 ${
                    isActive
                      ? 'text-cream-200'
                      : isTransparent
                        ? 'text-cream-400 hover:text-cream-200'
                        : 'text-cream-500 hover:text-cream-200'
                  }`
                }
              >
                {t(`nav.${item.key}`)}
              </NavLink>
            ))}

            {/* Facilities dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setFacilityOpen(true)}
              onMouseLeave={() => setFacilityOpen(false)}
            >
              <button className={`flex items-center gap-1.5 text-xs tracking-widest uppercase font-sans transition-colors duration-200 ${
                isTransparent ? 'text-cream-400 hover:text-cream-200' : 'text-cream-500 hover:text-cream-200'
              }`}>
                시설 안내 <ChevronDown size={12} strokeWidth={1.5} />
              </button>
              {facilityOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-forest-950/98 border border-forest-800 min-w-[160px] animate-slide-down">
                  {FACILITY_ITEMS.map(item => (
                    <NavLink
                      key={item.key}
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-5 py-3 text-xs tracking-widest uppercase font-sans transition-colors ${
                          isActive ? 'text-cream-200 bg-forest-800' : 'text-cream-500 hover:text-cream-200 hover:bg-forest-900'
                        }`
                      }
                    >
                      {t(`nav.${item.key}`)}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/news"
              className={({ isActive }) =>
                `text-xs tracking-widest uppercase font-sans transition-colors duration-200 ${
                  isActive
                    ? 'text-cream-200'
                    : isTransparent
                      ? 'text-cream-400 hover:text-cream-200'
                      : 'text-cream-500 hover:text-cream-200'
                }`
              }
            >
              {t('nav.news')}
            </NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button
              className={`lg:hidden p-1 transition-colors ${isTransparent ? 'text-cream-300' : 'text-cream-400'}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-forest-950/98 border-t border-forest-800 animate-slide-down">
          <nav className="px-6 py-6 space-y-1">
            {[...NAV_ITEMS, ...FACILITY_ITEMS, { key: 'news', path: '/news' }].map(item => (
              <NavLink
                key={item.key}
                to={item.path}
                className={({ isActive }) =>
                  `block px-0 py-3 text-xs tracking-widest uppercase font-sans border-b border-forest-800 transition-colors ${
                    isActive ? 'text-cream-200' : 'text-cream-500 hover:text-cream-200'
                  }`
                }
              >
                {t(`nav.${item.key}`)}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
