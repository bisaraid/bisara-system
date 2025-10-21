import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}

