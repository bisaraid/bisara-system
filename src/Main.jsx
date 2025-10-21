import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // gunakan HashRouter biar aman di GitHub Pages
import App from './App'
import './Index.css'

// Apply theme from localStorage on load
const theme = localStorage.getItem('theme') || 'light'
if (theme === 'dark') {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
