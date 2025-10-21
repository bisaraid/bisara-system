import React from 'react'

export default function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
      {title && <h3 className="text-sm text-gray-500 dark:text-gray-300 mb-2">{title}</h3>}
      <div className="text-gray-800 dark:text-gray-100">{children}</div>
    </div>
  )
}
