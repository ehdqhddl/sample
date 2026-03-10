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
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  const headerClass = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-building-dark/95 backdrop-blur-sm shadow-md'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gold-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">63</span>
            </div>
            <span className="text-white font-serif font-semibold text-lg tracking-wider hidden sm:block">
              BUILDING
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map(item => (
              <NavLink
                key={item.key}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-gold-400' : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {t(`nav.${item.key}`)}
              </NavLink>
            ))}

            {/* Facilities dropdown */}
            <div className="relative" onMouseEnter={() => setFacilityOpen(true)} onMouseLeave={() => setFacilityOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors">
                시설 안내 <ChevronDown size={14} />
              </button>
              {facilityOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white shadow-xl border border-gray-100 min-w-[160px] animate-slide-down">
                  {FACILITY_ITEMS.map(item => (
                    <NavLink
                      key={item.key}
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-5 py-3 text-sm transition-colors ${
                          isActive ? 'text-gold-600 bg-gold-50' : 'text-gray-700 hover:bg-gray-50 hover:text-gold-600'
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
                `text-sm font-medium transition-colors ${isActive ? 'text-gold-400' : 'text-white/80 hover:text-white'}`
              }
            >
              {t('nav.news')}
            </NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button className="lg:hidden text-white p-1" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-building-dark border-t border-white/10 animate-slide-down">
          <nav className="px-4 py-4 space-y-1">
            {[...NAV_ITEMS, ...FACILITY_ITEMS, { key: 'news', path: '/news' }].map(item => (
              <NavLink
                key={item.key}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2.5 text-sm rounded transition-colors ${
                    isActive ? 'text-gold-400 bg-white/5' : 'text-white/80 hover:text-white hover:bg-white/5'
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
