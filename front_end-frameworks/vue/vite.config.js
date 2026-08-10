import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), tailwindcss()],
  server: {
  host: '0.0.0.0',
  port: 3000,
  },
  preview: {
  host: '0.0.0.0',
  port: 3000,
  },
})
