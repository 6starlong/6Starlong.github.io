<script setup lang="ts">
const route = useRoute()
const store = useStore()
const { title, avatar, nav, isOpenSidebar: open } = $(store)
</script>

<template>
  <header
    class="header"
    :class="[{ 'cover': route.meta.layout === 'home', 'is-open': open }, $attrs.class]"
  >
    <RouterLink class="pl-5 flex items-center hover:!op-60 transition-opacity-250 shrink-0" to="/">
      <img :src="avatar" alt="avatar" class="w-8 h-8 rounded-1/2 lg:fixed">
      <span class="pl-2 lg:pl-10 font-600" :title="title">{{ title }}</span>
    </RouterLink>

    <nav class="nav">
      <template v-for="item in nav" :key="item.path">
        <RouterLink
          :to="item.path" :title="item.title"
          :class="route.path.includes(item.path) && 'router-link-active'"
        >
          <span class="lt-lg:hidden">{{ item.title }}</span>
          <div :class="item.icon" lg:hidden />
        </RouterLink>
      </template>

      <a class="cursor-pointer" title="切换深色模式" @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </a>
      <a href="https://github.com/6starlong" target="_blank" title="GitHub">
        <div i-uil-github-alt />
      </a>
    </nav>
  </header>

  <div class="nav-hamburger" :class="{ 'is-open': open }">
    <div class="hamburger" :class="{ 'is-open': open }" @click="open = !open">
      <div />
    </div>
  </div>
</template>

<style scoped>
.header{
  --at-apply: lt-md:h-[55px] lt-md:bg-[var(--c-bg)];
  --at-apply: w-full h-[88px] z-40 flex justify-between;
  transition: background-color 0.25s, height 0.25s, transform .5s;
}

.header.cover{
  --at-apply: absolute md:text-gray-200;
}

.nav {
  --at-apply: lt-md:hidden p-8 gap-5;
  --at-apply: grid grid-flow-col items-center
}

.nav a {
  --at-apply: op-60 transition-opacity-250;
}

.nav a:hover,
a.router-link-active {
  --at-apply: op-100;
}

.nav-hamburger {
  --at-apply: md:hidden absolute top-0 right-0 z-60 w-[55px] h-[55px];
  --at-apply: flex justify-center items-center transition-right-500;
}

.nav-hamburger.is-open {
  --at-apply: fixed right-[var(--sidebar-width)];
}

.hamburger {
  position: relative;
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
.hamburger div:after{
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
</style>
