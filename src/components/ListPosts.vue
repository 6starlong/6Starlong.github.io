<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Post } from '~/types'

const props = defineProps<{
  type?: string
  posts?: Post[]
}>()

const router = useRouter()
const routes: Post[] = router.getRoutes()
  .filter(i => i.path.startsWith('/posts') && i.meta.frontmatter?.date)
  .sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date))
  .map(i => ({
    path: i.path,
    title: i.meta.frontmatter.title,
    date: i.meta.frontmatter.date,
    duration: i.meta.frontmatter.duration,
    image: i.meta.frontmatter.image,
  }))

const posts = computed(() => (props.posts || routes))
</script>

<template>
  <div class="container">
    <div my-8>
      <RouterLink
        v-for="route in posts"
        :key="route.path"
        :to="route.path"
        class="block max-w-225 mx-auto"
      >
        <div
          class="relative mb-10 h-60 rounded duration-300 hover:scale-105"
          bg="cover center"
          :style="{ backgroundImage: `url(${route.image})` }"
        >
          <div class="absolute inset-0 bg-#121518/25" />
          <div class="relative z-1 p-8 w-full h-full justify-center items-center" flex="~ col">
            <div class="my-3 text-25px text-#fff font-bold">
              {{ route.title }}
            </div>
            <div class="text-#fbf8f5 leading-none">
              {{ formatDate(route.date) }}
            </div>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
