<script setup lang="ts">
import type { Post } from '~/types'

const { frontmatter } = $(useStore())
const { isLoading } = useImage({ src: frontmatter.hero?.image })

const router = useRouter()
const routes: Post[] = router.getRoutes()
  .filter(i => i.path.startsWith('/posts') && i.meta.frontmatter?.image)
  .sort((a, b) => +new Date(b.meta.frontmatter.lastUpdated) - +new Date(a.meta.frontmatter.lastUpdated))
  .map(i => ({
    path: i.path,
    title: i.meta.frontmatter.title,
    date: i.meta.frontmatter.date,
    duration: i.meta.frontmatter.duration,
    image: i.meta.frontmatter.image,
    lastUpdated: i.meta.frontmatter.lastUpdated,
  }))

const posts = computed(() => (routes.splice(0, 6)))
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

    <div class="container">
      <div class="my-10 md:my-20 grid gap-8 animate" grid-cols="1 md:2 lg:3">
        <RouterLink
          v-for="item in posts"
          :key="item.path"
          :to="item.path"
          class="post-card"
        >
          <div class="relative block mb-8 pb-60% rounded overflow-hidden">
            <img :src="item.image" class="absolute w-full h-full object-cover">
          </div>

          <h2 class="text-6 fw700">
            {{ item.title }}
          </h2>
        </RouterLink>
      </div>
    </div>

    <div class="container">
      <div class="flex items-center my-8">
        <h3 pr-5>
          Tags
        </h3>
        <hr flex-1 op10>
        <RouterLink to="" pl-5>
          See all
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home .hero {
  margin-top: calc(var(--nav-height) * -1);
}

.hero {
  @apply relative w-full h-150 grid justify-center items-center;
}

.hero img {
  @apply absolute inset-0 w-full h-full object-cover op-95;
}

.post-card:hover {
  transform: translateY(-4px);
  transition: transform .2s;
}

.post-card:hover h2 {
  text-decoration-color: unset;
}

.post-card h2 {
  text-decoration: underline;
  text-decoration-color: transparent;
  text-decoration-thickness: 3px;
  transition: all .35s;
}
</style>

