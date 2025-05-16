import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Si tu app está en la raíz del dominio, no necesitas base.
  // base: '/', 
})