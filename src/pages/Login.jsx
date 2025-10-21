import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuthStore()
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = login(username.trim(), password)
    setLoading(false)
    if (res.ok) {
      navigate('/dashboard')
    } else {
      alert(res.message || 'Login gagal')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md">
        <form onSubmit={submit} className="bg-white dark:bg-gray-800 rounded shadow p-6">
          <div className="flex items-center gap-3 mb-4">
            <img src="/src/assets/logo.svg" className="w-10 h-10" alt="logo" />
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Masuk ke Bisara System</h2>
          </div>

          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-300">Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="admin atau user" className="w-full p-2 mb-3 border rounded bg-white dark:bg-gray-700" />

          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-300">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="1234" className="w-full p-2 mb-4 border rounded bg-white dark:bg-gray-700" />

          <button type="submit" disabled={loading} className="w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded">
            {loading ? 'Memproses...' : 'Masuk'}
          </button>

          <p className="text-xs mt-3 text-gray-500 dark:text-gray-400">Contoh akun: <strong>admin/1234</strong> atau <strong>user/1234</strong></p>
        </form>
      </div>
    </div>
  )
}
