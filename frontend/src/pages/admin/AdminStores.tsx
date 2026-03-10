import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { adminApi } from '../../api'
import toast from 'react-hot-toast'
import { Plus, Pencil, Trash2, X } from 'lucide-react'
import type { Store, StoreZone } from '../../types'

const ZONES: StoreZone[] = ['FNB', 'RETAIL', 'AMENITY', 'CULTURE', 'SERVICE']

const EMPTY: Omit<Store, 'id'> = {
  nameKo: '', nameEn: '', nameZh: '', nameJa: '',
  floor: '', zone: 'RETAIL',
  descriptionKo: '', descriptionEn: '', descriptionZh: '', descriptionJa: '',
  phone: null, hours: null, imageUrl: null, displayOrder: 0, active: true
}

export default function AdminStores() {
  const { t } = useTranslation()
  const qc = useQueryClient()
  const [modal, setModal] = useState<{ open: boolean; editing: Store | null }>({ open: false, editing: null })
  const [form, setForm] = useState(EMPTY)
  const [lang, setLang] = useState<'Ko' | 'En' | 'Zh' | 'Ja'>('Ko')

  const { data: storesRes, isLoading } = useQuery({ queryKey: ['admin', 'stores'], queryFn: adminApi.getAllStores })
  const stores: Store[] = storesRes?.data?.data || []

  const createMutation = useMutation({
    mutationFn: (data: typeof EMPTY) => adminApi.createStore(data),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['admin', 'stores'] }); closeModal(); toast.success('저장되었습니다') },
    onError: () => toast.error('오류가 발생했습니다'),
  })
  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: typeof EMPTY }) => adminApi.updateStore(id, data),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['admin', 'stores'] }); closeModal(); toast.success('수정되었습니다') },
    onError: () => toast.error('오류가 발생했습니다'),
  })
  const deleteMutation = useMutation({
    mutationFn: (id: number) => adminApi.deleteStore(id),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['admin', 'stores'] }); toast.success('삭제되었습니다') },
    onError: () => toast.error('오류가 발생했습니다'),
  })

  const openCreate = () => { setForm(EMPTY); setModal({ open: true, editing: null }) }
  const openEdit = (item: Store) => {
    const { id, ...rest } = item
    setForm(rest)
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

  const ZONE_COLORS: Record<string, string> = {
    FNB: 'bg-orange-100 text-orange-700', RETAIL: 'bg-blue-100 text-blue-700',
    AMENITY: 'bg-green-100 text-green-700', CULTURE: 'bg-purple-100 text-purple-700',
    SERVICE: 'bg-gray-100 text-gray-700',
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-serif text-gray-900">{t('admin.stores.title')}</h2>
        <button onClick={openCreate} className="flex items-center gap-2 bg-gold-600 text-white px-4 py-2 text-sm hover:bg-gold-700">
          <Plus size={16} /> {t('admin.stores.add')}
        </button>
      </div>

      {isLoading ? (
        <div className="text-center py-16 text-gray-400">{t('common.loading')}</div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-4 py-3 text-gray-600 font-medium">매장명</th>
                <th className="text-left px-4 py-3 text-gray-600 font-medium">층</th>
                <th className="text-left px-4 py-3 text-gray-600 font-medium">조닝</th>
                <th className="text-left px-4 py-3 text-gray-600 font-medium hidden md:table-cell">운영시간</th>
                <th className="text-left px-4 py-3 text-gray-600 font-medium">노출</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {stores.map(item => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">{item.nameKo}</td>
                  <td className="px-4 py-3 text-gray-600">{item.floor}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 ${ZONE_COLORS[item.zone]}`}>{item.zone}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{item.hours}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs ${item.active ? 'text-green-600' : 'text-gray-400'}`}>{item.active ? '노출' : '숨김'}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1 justify-end">
                      <button onClick={() => openEdit(item)} className="p-1.5 text-gray-400 hover:text-gold-600"><Pencil size={15} /></button>
                      <button onClick={() => handleDelete(item.id)} className="p-1.5 text-gray-400 hover:text-red-500"><Trash2 size={15} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {modal.open && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl">
            <div className="flex items-center justify-between p-5 border-b">
              <h3 className="font-semibold">{modal.editing ? t('admin.stores.edit') : t('admin.stores.add')}</h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex gap-2">
                {LANGS.map(l => (
                  <button key={l.key} onClick={() => setLang(l.key)}
                    className={`px-3 py-1.5 text-xs border transition-colors ${lang === l.key ? 'bg-gold-600 text-white border-gold-600' : 'border-gray-300 text-gray-600'}`}>
                    {l.label}
                  </button>
                ))}
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">매장명 ({lang})</label>
                <input className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gold-500 text-sm"
                  value={(form as any)[`name${lang}`]}
                  onChange={e => setForm({ ...form, [`name${lang}`]: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">설명 ({lang})</label>
                <textarea rows={3} className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gold-500 text-sm resize-none"
                  value={(form as any)[`description${lang}`]}
                  onChange={e => setForm({ ...form, [`description${lang}`]: e.target.value })} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">층</label>
                  <input className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gold-500 text-sm"
                    value={form.floor} onChange={e => setForm({ ...form, floor: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">조닝</label>
                  <select className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gold-500 text-sm"
                    value={form.zone} onChange={e => setForm({ ...form, zone: e.target.value as StoreZone })}>
                    {ZONES.map(z => <option key={z} value={z}>{z}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">운영시간</label>
                  <input className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gold-500 text-sm"
                    value={form.hours || ''} onChange={e => setForm({ ...form, hours: e.target.value || null })} />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">전화번호</label>
                  <input className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gold-500 text-sm"
                    value={form.phone || ''} onChange={e => setForm({ ...form, phone: e.target.value || null })} />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">표시 순서</label>
                  <input type="number" className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gold-500 text-sm"
                    value={form.displayOrder} onChange={e => setForm({ ...form, displayOrder: Number(e.target.value) })} />
                </div>
              </div>
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" checked={form.active} onChange={e => setForm({ ...form, active: e.target.checked })} className="accent-gold-600" />
                노출
              </label>
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
