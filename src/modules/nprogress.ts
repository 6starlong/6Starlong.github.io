import NProgress from 'nprogress'
import { type UserModule } from '~/types'

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach(async (to, from) => {
      const { isSidebarOpen, toggleSidebar } = useStore()
      if (to.path !== from.path) {
        if (isSidebarOpen) {
          toggleSidebar()
          await new Promise(resolve => setTimeout(resolve, 500))
        }
        NProgress.start()
      }
    })
    router.afterEach(() => { NProgress.done() })
  }
}
