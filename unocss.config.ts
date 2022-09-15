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
  theme: {
    spacing: { 0: 0 },
    boxShadow: {
      1: '0 2px 12px rgb(0 0 0 / 7%)',
    },
    breakpoints: {
      sm: '512px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  rules: [],
  shortcuts: [
    [/^(.*)-var[(](.+)[)]$/, ([,prefix, value]) => `${prefix}-[var(${value})]`],
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: ['i-ri:article-line', 'i-ri-sticky-note-line', 'i-ri-heart-line', 'i-ri-screenshot-line', 'i-ri:at-line'],
})
