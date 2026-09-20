import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages: https://moonmoonnotsun.github.io/city-sound/
  base: process.env.GITHUB_PAGES === 'true' ? '/city-sound/' : '/',
})
