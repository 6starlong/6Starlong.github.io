<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Starlong',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})

const { isOpenSidebar: open } = $(useStore())
</script>

<template>
  <NavBar />
  <SideBar />
  <main class="main">
    <RouterView :class="open && 'is-open'" />
  </main>
</template>

<style>
.main > div{
  --at-apply: transition-transform-500;
}

.header.is-open,
.main > div.is-open{
  --at-apply: lt-md:translate-x-[calc(0px-var(--sidebar-width))];
}
</style>
