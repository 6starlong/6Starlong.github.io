import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import type { UserModule } from './types'
import routes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const scrollBehavior = async (to: any, from: any, savedPosition: any) => {
  if (savedPosition) { return { ...savedPosition, behavior: 'smooth' } }
  else {
    // https://github.com/vuejs/router/issues/1147#issuecomment-939265893
    await new Promise(resolve => setTimeout(resolve, 300))
    return { top: 0, behavior: 'smooth' }
  }
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
