import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'

const NavItem = ({ to, children }) => {
  const { pathname } = useLocation()
  const active = pathname === to || pathname.startsWith(to + '/')
  return (
    <Link to={to} className={`block px-4 py-2 rounded ${active ? 'bg-primary-500 text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
      {children}
    </Link>
  )
}

export default function Sidebar() {
  const { user } = useAuthStore()

  return (
    <aside className="w-60 bg-white dark:bg-gray-800 border-r dark:border-gray-700 min-h-screen hidden md:block">
      <div className="p-4">
        <nav className="space-y-1">
          <NavItem to="/dashboard">Overview</NavItem>
          <NavItem to="/dashboard/profile">Profile</NavItem>
          {user?.role === 'admin' && <NavItem to="/dashboard/users">Users</NavItem>}
          <NavItem to="/dashboard/settings">Settings</NavItem>
        </nav>
      </div>
    </aside>
  )
}
