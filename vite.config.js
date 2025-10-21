import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/bisara-system/' // sesuaikan saat deploy ke GitHub Pages
})

