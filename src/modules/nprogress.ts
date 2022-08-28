import NProgress from 'nprogress'
import { type UserModule } from '~/types'

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach(async (to, from) => {
      const { isNavOpen, toggleNavbar } = useStore()
      if (to.path !== from.path) {
        if (isNavOpen) {
          toggleNavbar()
          await new Promise(resolve => setTimeout(resolve, 500))
        }
        NProgress.start()
      }
    })
    router.afterEach(() => { NProgress.done() })
  }
}
