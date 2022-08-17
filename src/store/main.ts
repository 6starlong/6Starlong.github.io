import { acceptHMRUpdate, defineStore } from 'pinia'

export const useStore = defineStore('main', () => {
  const heroHeight = ref(0.75)
  return { heroHeight }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
