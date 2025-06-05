import { defineConfig, presetWind } from 'unocss'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  dark: 'class',
  presets: [
    presetWind({ dark: 'class' }),
    presetAttributify(),
    presetIcons(),
  ],
})
