<script setup lang="ts">
const route = useRoute()
const store = useStore()
const { title, avatar, nav, isNavOpen: open, toggleNavbar } = $(store)

let isTop = $ref(true)
let visible = $ref(true)
onMounted(() => {
  const { y, directions } = useScroll(document, {
    onScroll() {
      const { bottom } = $(directions)
      isTop = y.value === 0
      visible = !(y.value > 100 && bottom)
    },
  })
  watch(() => open, () => visible = true)
})
</script>

<template>
  <header
    class="header"
    :class="{
      'header--cover': route.path === '/',
      'header--top': isTop,
      'header--fixed': open || visible,
    }"
  >
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
      <router-link
        v-for="item in nav" :key="item.path"
        :to="item.path" :title="item.title"
        :class="route.path.includes(item.path) && 'router-link-active'"
      >
        <div :class="item.icon" translate-y="-0.3" />
        <span class="ml-1 font-500">{{ item.title }}</span>
      </router-link>

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
  @apply fixed top-0 inset-x-0 z-10 flex px-5;
  @apply h-var(--nav-height) transition-(height,top)-300;
}

.header.header--cover {
  @apply text-var(--c-text-inverse) dark:text-var(--c-text);
}

.header:not(.header--top) {
  --nav-height: 60px;
  @apply text-current backdrop-(saturate-180 blur);
  @apply bg-#fff/75 dark:bg-#121518/75 shadow-1;
}

.header:not(.header--fixed) {
  @apply top-[calc(var(--nav-height)*-1)];
}

.navbar {
  @apply z-20 flex-1 flex justify-between items-center;
}

.main-nav {
  @apply grid grid-flow-col gap-5 grid-auto-rows-min;
  @apply md:(text-sm content-center);
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
    grid-auto-columns: min-content;
    color: var(--c-text);
    background-color: var(--c-bg);
    transform: translate3d(300px, 0, 0);
  }
}

.main-nav a {
  @apply flex items-center op-60 transition-opacity-250;
}

.main-nav a:hover,
a.router-link-active {
  @apply op-100;
}

.hamburger {
  position: relative;
  z-index: 100;
  width: 20px;
  height: 20px;
  display: flex;
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
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, .6);
  transition: opacity .5s;
}

.backdrop,
.hamburger {
  @apply md:hidden;
}
</style>
