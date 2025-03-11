import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
 eslint: {
  ignoreDuringBuild: true,
 },

   build: {
    outDir: 'dist' ,
    base: './',
    rollupOptions: {
      external: ['react-helmet','axios']
    }
  }
})
