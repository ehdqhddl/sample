import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { adminApi } from '../../api'
import toast from 'react-hot-toast'
import { Plus, Pencil, Trash2, X } from 'lucide-react'
import type { News, NewsType } from '../../types'

const EMPTY: Omit<News, 'id' | 'createdAt'> = {
  titleKo: '', titleEn: '', titleZh: '', titleJa: '',
  contentKo: '', contentEn: '', contentZh: '', contentJa: '',
  newsType: 'NEWS', published: true
}

export default function AdminNews() {
  const { t } = useTranslation()
  const qc = useQueryClient()
  const [modal, setModal] = useState<{ open: boolean; editing: News | null }>({ open: false, editing: null })
  const [form, setForm] = useState(EMPTY)
  const [lang, setLang] = useState<'Ko' | 'En' | 'Zh' | 'Ja'>('Ko')

  const { data: newsRes, isLoading } = useQuery({ queryKey: ['admin', 'news'], queryFn: adminApi.getAllNews })
  const news: News[] = newsRes?.data?.data || []

  const createMutation = useMutation({
    mutationFn: (data: typeof EMPTY) => adminApi.createNews(data),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['admin', 'news'] }); closeModal(); toast.success('저장되었습니다') },
    onError: () => toast.error('오류가 발생했습니다'),
  })
  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: typeof EMPTY }) => adminApi.updateNews(id, data),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['admin', 'news'] }); closeModal(); toast.success('수정되었습니다') },
    onError: () => toast.error('오류가 발생했습니다'),
  })
  const deleteMutation = useMutation({
    mutationFn: (id: number) => adminApi.deleteNews(id),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['admin', 'news'] }); toast.success('삭제되었습니다') },
    onError: () => toast.error('오류가 발생했습니다'),
  })

  const openCreate = () => { setForm(EMPTY); setModal({ open: true, editing: null }) }
  const openEdit = (item: News) => {
    setForm({ titleKo: item.titleKo, titleEn: item.titleEn, titleZh: item.titleZh, titleJa: item.titleJa,
      contentKo: item.contentKo, contentEn: item.contentEn, contentZh: item.contentZh, contentJa: item.contentJa,
      newsType: item.newsType, published: item.published })
    setModal({ open: true, editing: item })
  }
  const closeModal = () => setModal({ open: false, editing: null })

  const handleSubmit = () => {
    if (modal.editing) updateMutation.mutate({ id: modal.editing.id, data: form })
    else createMutation.mutate(form)
  }

  const handleDelete = (id: number) => {
    if (confirm(t('admin.deleteConfirm'))) deleteMutation.mutate(id)
  }

  const LANGS: { key: 'Ko' | 'En' | 'Zh' | 'Ja'; label: string }[] = [
    { key: 'Ko', label: '한국어' }, { key: 'En', label: 'English' },
    { key: 'Zh', label: '中文' }, { key: 'Ja', label: '日本語' }
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-serif text-gray-900">{t('admin.news.title')}</h2>
        <button onClick={openCreate} className="flex items-center gap-2 bg-gold-600 text-white px-4 py-2 text-sm hover:bg-gold-700 transition-colors">
          <Plus size={16} /> {t('admin.news.add')}
        </button>
      </div>

      {isLoading ? (
        <div className="text-center py-16 text-gray-400">{t('common.loading')}</div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-4 py-3 text-gray-600 font-medium">구분</th>
                <th className="text-left px-4 py-3 text-gray-600 font-medium">제목</th>
                <th className="text-left px-4 py-3 text-gray-600 font-medium hidden md:table-cell">게시</th>
                <th className="text-left px-4 py-3 text-gray-600 font-medium hidden md:table-cell">날짜</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {news.map(item => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 ${item.newsType === 'NOTICE' ? 'bg-blue-100 text-blue-700' : 'bg-gold-100 text-gold-700'}`}>
                      {item.newsType}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-700 max-w-xs truncate">{item.titleKo}</td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <span className={`text-xs ${item.published ? 'text-green-600' : 'text-gray-400'}`}>
                      {item.published ? '게시중' : '미게시'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-400 text-xs hidden md:table-cell">
                    {new Date(item.createdAt).toLocaleDateString('ko-KR')}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1 justify-end">
                      <button onClick={() => openEdit(item)} className="p-1.5 text-gray-400 hover:text-gold-600 transition-colors">
                        <Pencil size={15} />
                      </button>
                      <button onClick={() => handleDelete(item.id)} className="p-1.5 text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {modal.open && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl">
            <div className="flex items-center justify-between p-5 border-b">
              <h3 className="font-semibold">{modal.editing ? t('admin.news.edit') : t('admin.news.add')}</h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex gap-2 mb-2">
                {LANGS.map(l => (
                  <button key={l.key} onClick={() => setLang(l.key)}
                    className={`px-3 py-1.5 text-xs border transition-colors ${lang === l.key ? 'bg-gold-600 text-white border-gold-600' : 'border-gray-300 text-gray-600 hover:border-gold-400'}`}>
                    {l.label}
                  </button>
                ))}
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">제목 ({lang})</label>
                <input className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gold-500 text-sm"
                  value={(form as any)[`title${lang}`]}
                  onChange={e => setForm({ ...form, [`title${lang}`]: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">내용 ({lang})</label>
                <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gold-500 text-sm resize-none"
                  value={(form as any)[`content${lang}`]}
                  onChange={e => setForm({ ...form, [`content${lang}`]: e.target.value })} />
              </div>
              <div className="flex gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">구분</label>
                  <select className="px-3 py-2 border border-gray-300 focus:outline-none focus:border-gold-500 text-sm"
                    value={form.newsType} onChange={e => setForm({ ...form, newsType: e.target.value as NewsType })}>
                    <option value="NEWS">NEWS</option>
                    <option value="NOTICE">NOTICE</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                    <input type="checkbox" checked={form.published} onChange={e => setForm({ ...form, published: e.target.checked })} className="accent-gold-600" />
                    게시
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2 p-5 border-t">
              <button onClick={closeModal} className="px-4 py-2 text-sm border border-gray-300 text-gray-600 hover:bg-gray-50">{t('admin.cancel')}</button>
              <button onClick={handleSubmit} disabled={createMutation.isPending || updateMutation.isPending}
                className="px-4 py-2 text-sm bg-gold-600 text-white hover:bg-gold-700 disabled:opacity-50">{t('admin.save')}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
