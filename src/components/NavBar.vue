<script setup lang="ts">
const route = useRoute()
const store = useStore()
const { title, avatar, nav, isNavOpen: open, toggleNavbar } = $(store)
</script>

<template>
  <header class="header" :class="{ 'header--cover': route.meta.layout === 'home' }">
    <div class="navbar">
      <router-link class="flex shrink-0 hover:!op-60 transition-opacity-250" to="/">
        <img :src="avatar" class="w-6 h-6 rounded-1/2">
        <span class="pl-2 font-600" :title="title">{{ title }}</span>
      </router-link>

      <div class="hamburger" :class="{ 'is-open': open }" @click="toggleNavbar()">
        <div />
      </div>
    </div>

    <nav class="main-nav">
      <template v-for="item in nav" :key="item.path">
        <router-link :to="item.path" :title="item.title">
          <div :class="item.icon" translate-y="-0.3" />
          <span class="ml-1 font-500">{{ item.title }}</span>
        </router-link>
      </template>

      <hr class="md:hidden border-current op-30">

      <div class="flex gap-5 lt-md:p-1">
        <a href="https://github.com/6starlong" target="_blank" title="GitHub">
          <div i-uil-github-alt />
        </a>
        <a class="cursor-pointer" title="切换深色模式" @click="toggleDark()">
          <div i="carbon-sun dark:carbon-moon" />
        </a>
      </div>
    </nav>

    <transition>
      <div v-show="open" class="backdrop" @click="toggleNavbar()" />
    </transition>
  </header>
</template>

<style scoped>
.header {
  --at-apply: fixed top-0 inset-x-0 z-10 pl-5 pr-2 md:pr-8;
  --at-apply: flex transition-all duration-250;
}

.header.header--cover {
  --at-apply: text-gray-200;
}

.navbar {
  --at-apply: w-full z-100 flex justify-between items-center;
}

.main-nav {
  --at-apply: md:text-sm grid grid-flow-col gap-5;
}

.main-nav a {
  --at-apply: flex items-center op-60 transition-opacity-250;
}

.main-nav a:hover,
a.router-link-active {
  --at-apply: op-100;
}

@media (max-width: 768px) {
  .main-nav {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
    padding: 3rem 6rem;
    width: 300px;
    height: 100vh;
    grid-auto-flow: row;
    grid-auto-rows: min-content;
    grid-auto-columns: min-content;
    background-color: var(--c-bg);
    transform: translate3d(300px, 0, 0);
    --at-apply: text-gray-700 dark:text-gray-200;
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
  color: inherit;
}

.hamburger div,
.hamburger div:before,
.hamburger div:after {
  width: 20px;
  height: 2px;
  border-radius: 5px;
  transition: all 0.15s linear;
  background-color: currentColor;
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
  color: #fff;
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
  background: rgba(0,0,0,.6);
  transition: opacity .5s;
}

.backdrop,
.hamburger {
  --at-apply: md:hidden;
}
</style>
