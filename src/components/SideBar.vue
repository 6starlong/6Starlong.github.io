<script setup lang="ts">
const { nav, isOpenSidebar: open } = $(useStore())
</script>

<template>
  <transition v-if="open">
    <div class="backdrop" @click="open = false" />
  </transition>

  <aside class="sidebar" :class="open && 'is-open'">
    <ul class="w-full py-5 px-6">
      <li v-for="item in nav" :key="item.path" class="py-2.5 text-center">
        <RouterLink
          :to="item.path" :title="item.title"
          class=" text-lg leading-none font-600"
          @click="open = false"
        >
          {{ item.title }}
        </RouterLink>
      </li>
      <div class="mt-2 flex justify-center">
        <a class="cursor-pointer mr-2.5" title="切换深色模式" @click="toggleDark()">
          <div i="carbon-sun dark:carbon-moon" />
        </a>
        <a href="https://github.com/6starlong" target="_blank" title="GitHub">
          <div i-uil-github-alt />
        </a>
      </div>
    </ul>
  </aside>
</template>

<style>
.backdrop {
  --at-apply: md:hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  cursor: pointer;
  background: rgba(18, 18, 18, 0.6);
  transition: opacity .5s;
}

.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 60;
  width: var(--sidebar-width);
  display: flex;
  justify-content: center;
  background-color: var(--c-bg);
  transform: translateX(100%);
  transition: transform .5s;
}

.sidebar.is-open {
  --at-apply: translate-x-0 md:translate-x-1/1;
}

.sidebar a {
  border-bottom: 1px solid transparent;
  transition: color .25s, border-color .25s, opacity .25s;
}

.sidebar li a:hover {
  border-bottom-color: currentColor;
}

.sidebar a:not(.font-600):hover {
  opacity: 0.6;
}
</style>
