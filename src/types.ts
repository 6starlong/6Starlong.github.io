import { type ViteSSGContext } from 'vite-ssg'
import 'vue-router'

export type UserModule = (ctx: ViteSSGContext) => void

declare module 'vue-router' {
  interface RouteMeta {
    frontmatter: any
  }
}

export interface Post {
  path: string
  title: string
  date: string
  desc?: string
  duration?: string
}
