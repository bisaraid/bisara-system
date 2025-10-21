import React, { useEffect, useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { getTheme, setTheme } from '../utils/localStorageUtils'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()
  const [theme, setLocalTheme] = useState(getTheme())

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    setTheme(theme)
  }, [theme])

  return (
    <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-primary-500 flex items-center justify-center text-white font-bold">B</div>
          <h1 className="text-lg font-semibold">Bisara System</h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            title="Toggle theme"
            onClick={() => setLocalTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>

          {user ? (
            <>
              <div className="text-sm mr-2">
                {user.name} • <span className="italic text-xs">{user.role}</span>
              </div>
              <button
                onClick={() => { logout(); navigate('/login') }}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <button onClick={() => navigate('/login')} className="px-3 py-1 bg-blue-600 text-white rounded">Login</button>
          )}
        </div>
      </div>
    </header>
  )
}
