
import { useAuthStore } from '../store/useAuthStore'
import { getTheme, setTheme } from '../utils/localStorageUtils'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const { user, logout } = useAuthStore()
  const [theme, setLocalTheme] = useState(getTheme())

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    setTheme(theme)
  }, [theme])

  return (
    <nav className="bg-white dark:bg-gray-800 p-4 flex justify-between items-center shadow">
      <h1 className="text-lg font-bold text-gray-700 dark:text-white">Bisara System</h1>
      <div className="flex items-center gap-4">
        <button onClick={() => setLocalTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2">
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
        {user && (
          <button onClick={logout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
        )}
      </div>
    </nav>
  )
}
