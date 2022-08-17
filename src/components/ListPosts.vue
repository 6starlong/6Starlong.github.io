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
  }))

const posts = computed(() => (props.posts || routes))
</script>

<template>
  <section class="md:w-full lg:w-688px xl:w-900px md:translate-x-[calc(65ch/2-50%)]">
    <ul>
      <template v-for="route, idx in posts" :key="route.path">
        <RouterLink :to="route.path" no-underline>
          <li class="pt-8 pb-5">
            <div
              class="h-60 bg-cover bg-center duration-300 hover:scale-[1.05] rounded"
              :class="idx ? `bg-[url(https://p0.meituan.net/csc/a36a11f29ac67842a71b2fcd4c41291b530265.jpg)]` : 'bg-[url(https://p0.meituan.net/csc/4f2840d18a3f0c52638fc4d0af10f61a635711.jpg)]'"
            >
              <div class="p-8 w-full h-full justify-center items-center text-center" flex="~ col">
                <h2 class="my-3 text-white">
                  {{ route.title }}
                </h2>
                <div class="text-#fbf8f5 leading-none">
                  {{ route.date }}
                </div>
              </div>
            </div>
          </li>
        </RouterLink>
      </template>
    </ul>
  </section>
</template>
