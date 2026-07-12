import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // имя репозитория на GitHub — сайт живёт на https://<user>.github.io/ksu/
  base: '/ksu/',
})
