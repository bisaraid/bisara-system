import React from 'react'
import { useAuthStore } from '../store/useAuthStore'

export default function Profile() {
  const { user, updateUser } = useAuthStore()

  const handleChangeName = () => {
    const name = prompt('Masukkan nama baru', user?.name || '')
    if (name) updateUser({ name })
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Profil Saya</h2>
      <div className="bg-white dark:bg-gray-800 rounded p-4">
        <p><strong>Username:</strong> {user?.username}</p>
        <p><strong>Nama:</strong> {user?.name}</p>
        <p><strong>Role:</strong> {user?.role}</p>

        <div className="mt-4">
          <button onClick={handleChangeName} className="px-3 py-1 bg-primary-500 text-white rounded">Ubah Nama</button>
        </div>
      </div>
    </div>
  )
}

