import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-center p-10">
      <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
        🎉 Bisara System Berhasil Jalan!
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mt-4">
        Ini adalah tampilan utama React App kamu yang berhasil dirender dari <code>App.jsx</code>.
      </p>
      <p className="text-sm text-gray-500 mt-6">
        Dark mode aktif jika kamu ubah preferensi di localStorage.
      </p>
    </div>
  )
}
