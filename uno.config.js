import { defineConfig, presetMini } from 'unocss'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [presetMini(), presetAttributify(), presetIcons()]
})
