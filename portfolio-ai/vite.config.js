import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/bhargav-portfolio/"   // 👈 MUST match repo name
})