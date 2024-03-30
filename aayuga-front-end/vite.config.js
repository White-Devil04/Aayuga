import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://aayuga-backend-54enr2gw1-pdhvaniks-projects.vercel.app',
    }
  },
  plugins: [react()],
})
