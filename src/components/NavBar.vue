<script setup lang="ts">
const route = useRoute()
const store = useStore()
const { title, avatar, nav, isSidebarOpen: open, toggleSidebar } = $(store)

onMounted(() => {
  const isLocked = useScrollLock(document.documentElement)
  const toggleLock = useToggle(isLocked)
  watch(() => open, () => toggleLock())
})
</script>

<template>
  <header class="header" :class="{ 'is-cover': route.meta.layout === 'home' }">
    <div class="container" :class="{ 'is-open': open }">
      <router-link class="flex items-center hover:!op-60 transition-opacity-250 shrink-0" to="/">
        <img :src="avatar" class="w-8 h-8 rounded-1/2 lg:fixed">
        <span class="pl-2 lg:pl-10 font-600" :title="title">{{ title }}</span>
      </router-link>

      <div class="hamburger" :class="{ 'is-open': open }" @click="toggleSidebar()">
        <div />
      </div>

      <nav class="nav">
        <template v-for="item in nav" :key="item.path">
          <router-link
            :to="item.path" :title="item.title"
            :class="route.path.includes(item.path) && 'router-link-active'"
          >
            <span class="lt-md:block lt-lg:hidden font-500">{{ item.title }}</span>
            <div :class="item.icon" lt-md:hidden lg:hidden />
          </router-link>
        </template>

        <a class="cursor-pointer" title="切换深色模式" @click="toggleDark()">
          <div i="carbon-sun dark:carbon-moon" />
        </a>
        <a href="https://github.com/6starlong" target="_blank" title="GitHub">
          <div i-uil-github-alt />
        </a>
      </nav>
    </div>

    <transition>
      <div v-if="open" class="backdrop v-enter-active" @click="toggleSidebar()" />
    </transition>
  </header>
</template>

<style scoped>
.header {
  --at-apply: relative z-10 w-full h-88px transition-all duration-250;
}

.container {
  --at-apply: relative right-0 h-full max-w-full pl-5;
  --at-apply: flex justify-between items-center;
  --at-apply: transition-right-500 fast-out;
}

.nav {
  --at-apply: grid grid-flow-col items-center gap-5 p-8;
  --at-apply: transition-right-500 fast-out;
}

.nav a {
  --at-apply: op-60 transition-opacity-250;
}

.nav a:hover,
a.router-link-active {
  --at-apply: op-100;
}

@media (min-width: 768px) {
  .header.is-cover {
    --at-apply: absolute text-gray-200;
  }
}

@media (max-width: 768px) {
  .header {
    height: 55px;
    background: var(--c-bg);
  }

  .container {
    padding-right: 0.5rem;
  }

  .container.is-open {
    right: var(--sidebar-width);
  }

  .is-open .nav {
    right: 0;
  }

  .nav {
    position: fixed;
    top: 0;
    right: calc(0px - var(--sidebar-width));
    z-index: 100;
    height: 100vh;
    display: flex;
    flex-direction: column;
    width: var(--sidebar-width);
    background-color: var(--c-bg);
  }
}

.hamburger {
  position: relative;
  z-index: 100;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
}

.hamburger div,
.hamburger div:before,
.hamburger div:after {
  width: 20px;
  height: 2px;
  border-radius: 5px;
  transition: all 0.15s linear;
  --at-apply: bg-gray-700 dark:bg-gray-200;
}

.hamburger div:before,
.hamburger div:after {
  content: "";
  position: absolute;
}

.hamburger div:before {
  transform: translateY(-300%);
}

.hamburger div:after {
  transform: translateY(300%);
}

.hamburger.is-open div {
  background: transparent;
}

.hamburger.is-open div:before {
  transform: rotate(45deg);
}

.hamburger.is-open div:after {
  transform: rotate(-45deg);
}

.hamburger.is-open {
  background-color: var(--c-bg);
  transition: all 0.35s;
}

.hamburger.is-open:hover {
  transform: rotate(90deg);
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  cursor: pointer;
  background: rgba(18, 18, 18, 0.6);
  transition: opacity .5s;
}

.backdrop,
.hamburger {
  --at-apply: md:hidden;
}
</style>
