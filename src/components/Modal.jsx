import React from 'react'

export default function Modal({ open, onClose, title, children }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-gray-800 rounded shadow-lg w-full max-w-md p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
          <button className="text-gray-600 dark:text-gray-300" onClick={onClose}>✕</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}
