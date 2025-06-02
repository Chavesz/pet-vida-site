// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/pet-vida-site/', // 👈 caminho do seu repositório
  plugins: [vue()],
})