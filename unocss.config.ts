import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    container: {
      center: true,
    },
    breakpoints: {
      sm: '512px',
      md: '768px',
      lg: '1024px',
    },
  },
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.25,
      warn: true,
    }),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Inter',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: ['i-ri:article-line', 'i-ri-sticky-note-line', 'i-ri-heart-line', 'i-ri-screenshot-line', 'i-ri:at-line'],
})
