import React from 'react'

export default function Settings() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Pengaturan</h2>

      <div className="bg-white dark:bg-gray-800 rounded p-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">Ini tempat mengatur konfigurasi aplikasi. Karena ini versi front-end only, sebagian pengaturan bersifat lokal (localStorage).</p>
      </div>
    </div>
  )
}
