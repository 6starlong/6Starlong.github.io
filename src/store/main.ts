import { acceptHMRUpdate, defineStore } from 'pinia'

export const useStore = defineStore('main', () => {
  const title = 'Sᴛᴀʀʟᴏɴɢ💫'
  const avatar = 'https://starlong.netlify.app/avatar.png'
  const nav = [
    { title: 'Blog', path: '/posts', icon: 'i-ri:article-line' },
    { title: 'Notes', path: '/notes', icon: 'i-ri-sticky-note-line' },
    { title: 'Stars', path: '/stars', icon: 'i-ri-heart-line' },
    { title: 'Demos', path: '/demos', icon: 'i-ri-screenshot-line' },
    { title: 'About', path: '/about', icon: 'i-ri:code-s-slash-fill' },
  ]

  const isSidebarOpen = ref(false)
  const toggleSidebar = useToggle(isSidebarOpen)

  return { title, avatar, nav, isSidebarOpen, toggleSidebar }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
