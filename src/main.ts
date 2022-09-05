import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import type { UserModule } from './types'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const routes = setupLayouts(generatedRoutes.map((item) => {
  if (item.meta?.frontmatter.layout)
    item.meta.layout = item.meta?.frontmatter.layout.replace(/^\S/, (s: string) => s.toUpperCase())
  return item
}))

const scrollBehavior = async (to: any, from: any, savedPosition: any) => {
  if (savedPosition)
    // 'smooth' causes anchor navigation to fail
    return { ...savedPosition, behavior: to.hash ? undefined : 'smooth' }
  else
    return { top: 0, behavior: 'smooth' }
}

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
  },
)
