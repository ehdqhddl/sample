import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import { publicApi } from '../api'
import type { News as NewsType, NewsType as NewsTypeEnum } from '../types'

export default function News() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'ko' | 'en' | 'zh' | 'ja'
  const [filter, setFilter] = useState<NewsTypeEnum | 'ALL'>('ALL')

  const { data: newsRes, isLoading } = useQuery({
    queryKey: ['news'],
    queryFn: () => publicApi.getNews(),
  })
  const allNews: NewsType[] = newsRes?.data?.data || []
  const filtered = filter === 'ALL' ? allNews : allNews.filter(n => n.newsType === filter)

  const getTitle = (n: NewsType) => {
    const capLang = lang.charAt(0).toUpperCase() + lang.slice(1)
    return (n as any)[`title${capLang}`] || n.titleKo
  }
  const getContent = (n: NewsType) => {
    const capLang = lang.charAt(0).toUpperCase() + lang.slice(1)
    return (n as any)[`content${capLang}`] || n.contentKo
  }

  return (
    <div className="pt-20">
      <div className="bg-building-dark py-16 text-center text-white">
        <p className="text-gold-400 text-xs tracking-[0.4em] uppercase mb-3">63 BUILDING</p>
        <h1 className="text-4xl md:text-5xl font-serif">{t('news.title')}</h1>
        <div className="gold-divider mx-auto" />
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex gap-2 mb-8">
          {(['ALL', 'NOTICE', 'NEWS'] as const).map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2 text-sm font-medium border transition-all ${
                filter === type ? 'bg-gold-600 text-white border-gold-600' : 'border-gray-300 text-gray-600 hover:border-gold-400 hover:text-gold-600'
              }`}
            >
              {t(`news.${type.toLowerCase() === 'all' ? 'all' : type.toLowerCase() === 'notice' ? 'notice' : 'news'}`)}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="text-center py-20 text-gray-400">{t('common.loading')}</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">{t('news.noData')}</div>
        ) : (
          <div className="space-y-4">
            {filtered.map(item => (
              <article key={item.id} className="border border-gray-200 bg-white p-6 hover:border-gold-300 transition-colors">
                <div className="flex items-start gap-4">
                  <span className={`shrink-0 text-xs font-medium px-3 py-1 ${
                    item.newsType === 'NOTICE' ? 'bg-blue-100 text-blue-700' : 'bg-gold-100 text-gold-700'
                  }`}>
                    {t(item.newsType === 'NOTICE' ? 'news.notice' : 'news.news')}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">{getTitle(item)}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{getContent(item)}</p>
                    <p className="text-gray-400 text-xs mt-3">
                      {new Date(item.createdAt).toLocaleDateString(lang === 'ko' ? 'ko-KR' : lang === 'zh' ? 'zh-CN' : lang === 'ja' ? 'ja-JP' : 'en-US')}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
