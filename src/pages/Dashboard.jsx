import React from 'react'
import Card from '../components/Card'
import { useAuthStore } from '../store/useAuthStore'

export default function Dashboard() {
  const { user } = useAuthStore()
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Selamat datang, {user?.name || user?.username} 👋</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Total Pengguna">
          <div className="text-3xl font-semibold">—</div>
          <div className="text-sm text-gray-500">Data tersimpan di LocalStorage</div>
        </Card>

        <Card title="Aktivitas">
          <div>Ini area ringkasan / cards untuk menampilkan metrik</div>
        </Card>

        <Card title="Notifikasi">
          <div>Tidak ada notifikasi</div>
        </Card>
      </div>
    </div>
  )
}

