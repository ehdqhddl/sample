import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { adminApi } from '../../api'
import toast from 'react-hot-toast'
import { Eye, EyeOff } from 'lucide-react'

export default function AdminLogin() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [showPw, setShowPw] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await adminApi.login(form.username, form.password)
      localStorage.setItem('adminToken', res.data.data.token)
      navigate('/admin')
    } catch {
      toast.error(t('admin.login.error'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-building-dark flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-gold-500 flex items-center justify-center mx-auto mb-3">
            <span className="text-white text-xl font-bold">63</span>
          </div>
          <p className="text-white text-lg font-serif">BUILDING</p>
          <p className="text-gray-400 text-sm mt-1">{t('admin.title')}</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 shadow-2xl">
          <h2 className="text-xl font-serif text-gray-900 mb-6">{t('admin.login.title')}</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1.5">{t('admin.login.username')}</label>
              <input
                type="text"
                value={form.username}
                onChange={e => setForm({ ...form, username: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gold-500 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1.5">{t('admin.login.password')}</label>
              <div className="relative">
                <input
                  type={showPw ? 'text' : 'password'}
                  value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  className="w-full px-4 py-3 pr-10 border border-gray-300 focus:outline-none focus:border-gold-500 transition-colors"
                  required
                />
                <button type="button" onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-gold-600 text-white py-3 font-medium hover:bg-gold-700 transition-colors disabled:opacity-50"
          >
            {loading ? '...' : t('admin.login.submit')}
          </button>
        </form>
      </div>
    </div>
  )
}
