import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // O quiz vive em /quiz dentro do domínio principal
  base: '/',
})