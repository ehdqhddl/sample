import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import { adminApi } from '../../api'
import { Link } from 'react-router-dom'
import { Newspaper, Map, Store, Link2 } from 'lucide-react'

export default function AdminDashboard() {
  const { t } = useTranslation()
  const { data: newsRes } = useQuery({ queryKey: ['admin', 'news'], queryFn: adminApi.getAllNews })
  const { data: floorsRes } = useQuery({ queryKey: ['admin', 'floors'], queryFn: adminApi.getAllFloorMaps })
  const { data: storesRes } = useQuery({ queryKey: ['admin', 'stores'], queryFn: adminApi.getAllStores })
  const { data: linksRes } = useQuery({ queryKey: ['admin', 'links'], queryFn: adminApi.getAllLinks })

  const stats = [
    { label: t('admin.news.title'), count: newsRes?.data?.data?.length ?? 0, icon: Newspaper, path: '/admin/news', color: 'bg-blue-500' },
    { label: t('admin.floorMap.title'), count: floorsRes?.data?.data?.length ?? 0, icon: Map, path: '/admin/floor-map', color: 'bg-green-500' },
    { label: t('admin.stores.title'), count: storesRes?.data?.data?.length ?? 0, icon: Store, path: '/admin/stores', color: 'bg-orange-500' },
    { label: t('admin.links.title'), count: linksRes?.data?.data?.length ?? 0, icon: Link2, path: '/admin/links', color: 'bg-purple-500' },
  ]

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-serif text-gray-900">{t('admin.dashboard.title')}</h2>
        <p className="text-gray-500 text-sm mt-1">{t('admin.dashboard.welcome')}, admin</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(stat => (
          <Link key={stat.path} to={stat.path}
            className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.count}</p>
              </div>
              <div className={`w-12 h-12 rounded-full ${stat.color} bg-opacity-10 flex items-center justify-center`}>
                <stat.icon size={22} className={stat.color.replace('bg-', 'text-')} />
              </div>
            </div>
            <p className="text-xs text-gold-600 mt-3">관리하기 →</p>
          </Link>
        ))}
      </div>

      {/* Recent news */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-100 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">최근 소식</h3>
          <Link to="/admin/news" className="text-xs text-gold-600 hover:text-gold-800">전체 보기 →</Link>
        </div>
        <div className="space-y-2">
          {(newsRes?.data?.data?.slice(0, 5) || []).map((item: any) => (
            <div key={item.id} className="flex items-center justify-between py-2 border-b border-gray-50">
              <div className="flex items-center gap-3">
                <span className={`text-xs px-2 py-0.5 ${item.newsType === 'NOTICE' ? 'bg-blue-100 text-blue-700' : 'bg-gold-100 text-gold-700'}`}>
                  {item.newsType}
                </span>
                <span className="text-sm text-gray-700 truncate max-w-xs">{item.titleKo}</span>
              </div>
              <span className="text-xs text-gray-400 shrink-0 ml-2">{new Date(item.createdAt).toLocaleDateString('ko-KR')}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
