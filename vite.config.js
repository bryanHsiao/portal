/* eslint-env node */
/* global process */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

const isGithubPages = process.env.DEPLOY_ENV === 'gh-pages'

export default defineConfig({
  base: isGithubPages ? '/portal/' : './',
  plugins: [
    react(),
    UnoCSS(),
  ]
})
