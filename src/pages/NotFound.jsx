import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2 text-gray-800 dark:text-white">404</h1>
        <p className="mb-4 text-gray-600 dark:text-gray-300">Halaman tidak ditemukan</p>
        <Link to="/dashboard" className="px-4 py-2 bg-blue-600 text-white rounded">Kembali ke Dashboard</Link>
      </div>
    </div>
  )
}

