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

const navList = [
  { title: 'Blog', path: '/posts', icon: 'i-ri:article-line' },
  { title: 'Notes', path: '/notes', icon: 'i-ri-sticky-note-line' },
  { title: 'Stars', path: '/stars', icon: 'i-ri-heart-line' },
  { title: 'Demos', path: '/demos', icon: 'i-ri-screenshot-line' },
  { title: 'About', path: '/about', icon: 'i-ri:code-s-slash-fill' },
]

const iconColor = computed(() => isHome.value ? '#fff' : 'inherit')
</script>

<template>
  <header class="header" :class="isHome && 'absolute top-0 left-0 right-0'">
    <RouterLink
      class="logo w-10 h-10 absolute lg:fixed m-6 select-none outline-none"
      to="/"
      focusable="false"
    >
      <img v-show="isDarkImg" src="/favicon-dark.svg?url" alt="logo">
      <img v-show="!isDarkImg" src="/favicon.svg?url" alt="logo">
    </RouterLink>
    <nav class="nav">
      <div class="spacer" />
      <div class="right">
        <template v-for="item in navList" :key="item.path">
          <RouterLink :to="item.path" :title="item.title" :class="route.path.includes(item.path) && 'router-link-active'">
            <span class="lt-md:hidden">{{ item.title }}</span>
            <div :class="item.icon" md:hidden />
          </RouterLink>
        </template>

        <a title="切换深色模式" @click="toggleDark()">
          <div i="carbon-sun dark:carbon-moon" />
        </a>
        <a href="https://github.com/6starlong" target="_blank" title="GitHub" class="lt-md:hidden">
          <div i-uil-github-alt />
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
@media (max-width: 960px) {
  .header {
    position: sticky;
    top: 0;
    z-index: 60;
    background-color: var(--c-bg);
    border-bottom: 1px solid rgba(125, 125, 125, 0.3);
  }
  .header .logo {
    margin: 0.75rem;
  }
  .header .nav {
    padding: 1.25rem;
  }
}
.nav {
  padding: 2rem;
  display: grid;
  grid-template-columns: auto max-content;
}
.nav a {
  cursor: pointer;
  color: v-bind(iconColor);
  transition: opacity 0.2s ease;
  opacity: 0.6;
}
.nav a:hover,
a.router-link-active {
  opacity: 1;
  text-decoration-color: inherit;
}
.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
  padding-left: 2rem;
}
</style>
