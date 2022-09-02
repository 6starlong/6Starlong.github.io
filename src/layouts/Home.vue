<script setup lang="ts">
const { frontmatter } = $(useStore())
const { isLoading } = useImage({ src: frontmatter.hero?.image })
</script>

<template>
  <div class="home">
    <section v-if="frontmatter.hero" class="hero">
      <div v-if="isLoading" i-line-md:loading-loop text-3xl />
      <template v-else>
        <img :src="frontmatter.hero.image">
        <div class="relative text-gray-200" />
      </template>
    </section>

    <section p="x6 y10">
      <RouterView class="container" />
    </section>
  </div>
</template>

<style scoped>
.home {
  --at-apply: pb-6;
}

.home .hero {
  margin-top: calc(var(--nav-height) * -1);
}

.hero {
  --at-apply: relative w-full h-144 grid justify-center items-center;
}

.hero img {
  --at-apply: absolute inset-0 w-full h-full object-cover op-95;
}
</style>

