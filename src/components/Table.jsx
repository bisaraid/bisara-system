import React from 'react'

export default function Table({ children }) {
  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded shadow">
      <table className="min-w-full">
        {children}
      </table>
    </div>
  )
}

