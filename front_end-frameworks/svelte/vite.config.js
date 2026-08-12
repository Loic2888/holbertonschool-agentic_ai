import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    base: './',
  plugins: [svelte(), tailwindcss()],
    server: {
    host: '0.0.0.0',
    port: 3000,
  },
})
