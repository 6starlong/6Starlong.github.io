<script setup lang="ts">
import { isDark } from '~/composables/dark'

const store = useStore()
const route = useRoute()

const { y } = useWindowScroll()
const { height } = useWindowSize()

const isHome = computed(() => route.meta.layout === 'home')
const isDarkImg = computed(() =>
  (isHome.value && (y.value <= height.value * store.heroHeight - 55)) || isDark.value,
)

const iconColor = computed(() => isHome.value ? '#fff' : 'inherit')
const backTop = () => window.scrollTo(0, 0)
</script>

<template>
  <header class="header z-40" :class="isHome && 'absolute top-0 left-0 right-0'">
    <RouterLink
      class="w-10 h-10 absolute lg:fixed m-6 select-none outline-none"
      to="/"
      focusable="false"
      @click="backTop"
    >
      <img v-show="isDarkImg" src="/favicon-dark.svg?url" alt="logo">
      <img v-show="!isDarkImg" src="/favicon.svg?url" alt="logo">
    </RouterLink>
    <nav class="nav">
      <div class="spacer" />
      <div class="right">
        <RouterLink to="/posts" title="Blog">
          <span class="lt-md:hidden">Blog</span>
          <div i-ri:article-line md:hidden />
        </RouterLink>
        <RouterLink to="/notes" title="Notes">
          <span class="lt-md:hidden">Notes</span>
          <div i-ri-sticky-note-line md:hidden />
        </RouterLink>
        <RouterLink to="/stars" title="stars">
          <span class="lt-md:hidden">Stars</span>
          <div i-ri-heart-line md:hidden />
        </RouterLink>
        <RouterLink to="/demos" title="Demos">
          <span class="lt-md:hidden">Demos</span>
          <div i-ri-screenshot-line md:hidden />
        </RouterLink>
        <RouterLink to="/talks" class="lt-md:hidden" title="Talks">
          Talks
        </RouterLink>
        <RouterLink class="icon-btn mx-2" to="/about" title="关于">
          <span class="lt-md:hidden">About</span>
          <div i-carbon-dicom-overlay md:hidden />
        </RouterLink>

        <button title="切换深色模式" @click="toggleDark()">
          <div i="carbon-sun dark:carbon-moon" />
        </button>
        <a href="https://github.com/6starlong" target="_blank" title="GitHub" class="lt-md:hidden">
          <div i-uil-github-alt />
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header h1 {
  margin-bottom: 0;
}
.logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}
.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}
.nav > * {
  margin: auto;
}
.nav img {
  margin-bottom: 0;
}
.nav a,
.nav button {
  cursor: pointer;
  text-decoration: none;
  color: v-bind(iconColor);
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
}
.nav a:hover,
.nav button:hover {
  opacity: 1;
  text-decoration-color: inherit;
}
.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
  padding-left: 2rem;
}
.nav .right > * {
  margin: auto;
}
</style>
