import { defineConfig, presetMini } from 'unocss'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [presetMini(), presetAttributify(), presetIcons()],
  shortcuts: [
    // 主題：企業配色
    ['theme-business', 'text-gray-800 bg-white'],
    ['theme-primary', 'text-blue-600'],
    ['theme-secondary', 'text-yellow-500'],

    // （之後可以加 theme-fresh, theme-dark，不急）
  ],
})
