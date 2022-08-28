import { acceptHMRUpdate, defineStore } from 'pinia'

export const useStore = defineStore('main', () => {
  const title = 'Sᴛᴀʀʟᴏɴɢ💫'
  const avatar = 'https://starlong.netlify.app/avatar.png'
  const nav = [
    { title: 'Blog', path: '/posts', icon: 'i-ri:article-line' },
    { title: 'Notes', path: '/notes', icon: 'i-ri-sticky-note-line' },
    { title: 'Stars', path: '/stars', icon: 'i-ri-heart-line' },
    { title: 'Demos', path: '/demos', icon: 'i-ri-screenshot-line' },
    { title: 'About', path: '/about', icon: 'i-ri:at-line' },
  ]

  const isNavOpen = ref(false)
  const toggleNavbar = useToggle(isNavOpen)
  watch(isNavOpen, () => document.body.classList.toggle('nav-open'))

  return { title, avatar, nav, isNavOpen, toggleNavbar }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
