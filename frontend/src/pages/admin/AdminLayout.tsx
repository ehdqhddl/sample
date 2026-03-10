import { Navigate, Outlet, useLocation, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LayoutDashboard, Newspaper, Map, Store, Link2, LogOut, Menu, X } from 'lucide-react'
import { useState } from 'react'

const NAV = [
  { path: '/admin', label: 'admin.dashboard.title', icon: LayoutDashboard, exact: true },
  { path: '/admin/news', label: 'admin.news.title', icon: Newspaper },
  { path: '/admin/floor-map', label: 'admin.floorMap.title', icon: Map },
  { path: '/admin/stores', label: 'admin.stores.title', icon: Store },
  { path: '/admin/links', label: 'admin.links.title', icon: Link2 },
]

export default function AdminLayout() {
  const token = localStorage.getItem('adminToken')
  const { t } = useTranslation()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (!token) return <Navigate to="/admin/login" replace />

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    window.location.href = '/admin/login'
  }

  const isActive = (path: string, exact?: boolean) =>
    exact ? location.pathname === path : location.pathname === path

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar overlay (mobile) */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 flex flex-col transition-transform duration-200
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        {/* Logo */}
        <div className="h-16 flex items-center px-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">63</span>
            </div>
            <div>
              <p className="font-serif text-sm font-semibold">BUILDING</p>
              <p className="text-xs text-gray-500">{t('admin.title')}</p>
            </div>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="ml-auto lg:hidden text-gray-400">
            <X size={20} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
          {NAV.map(item => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`admin-sidebar-link ${isActive(item.path, item.exact) ? 'active' : ''}`}
            >
              <item.icon size={17} />
              {t(item.label)}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-gray-100">
          <Link to="/" className="admin-sidebar-link text-xs mb-1 block" target="_blank">
            ↗ 사이트 보기
          </Link>
          <button onClick={handleLogout} className="admin-sidebar-link w-full text-red-500 hover:bg-red-50 hover:text-red-600">
            <LogOut size={17} />
            {t('admin.logout')}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="h-16 bg-white shadow-sm flex items-center px-4 gap-4 sticky top-0 z-10">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-500 hover:text-gray-700">
            <Menu size={22} />
          </button>
          <h1 className="font-semibold text-gray-800">
            {t(NAV.find(n => isActive(n.path, n.exact))?.label || 'admin.dashboard.title')}
          </h1>
        </header>

        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
