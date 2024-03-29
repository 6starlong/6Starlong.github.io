<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const content = ref<HTMLDivElement>()
const { frontmatter } = $(useStore())

onMounted(() => {
  const { y } = $(useWindowScroll())

  const navigate = () => {
    if (location.hash) {
      const el = document.querySelector(decodeURIComponent(location.hash)) as HTMLDivElement
      if (y < el.offsetTop)
        el.scrollIntoView({ behavior: 'smooth' })
      else
        window.scrollTo({ top: el.offsetTop - 88, behavior: 'smooth' })
    }
  }

  const handleAnchors = (
    event: MouseEvent & { target: HTMLElement },
  ) => {
    const link = event.target.closest('a')

    if (
      !event.defaultPrevented
      && link
      && event.button === 0
      && link.target !== '_blank'
      && link.rel !== 'external'
      && !link.download
      && !event.metaKey
      && !event.ctrlKey
      && !event.shiftKey
      && !event.altKey
    ) {
      const url = new URL(link.href)
      if (url.origin !== window.location.origin)
        return

      event.preventDefault()
      const { pathname, hash } = url
      if (hash && (!pathname || pathname === location.pathname)) {
        window.history.replaceState({}, '', hash)
        navigate()
      }
      else {
        router.push({ path: pathname, hash })
      }
    }
  }

  useEventListener(window, 'hashchange', navigate)
  useEventListener(content.value!, 'click', handleAnchors, { passive: false })

  navigate()
  setTimeout(navigate, 500)
})
</script>

<template>
  <div class="doc">
    <div v-if="frontmatter.image" class="px-5">
      <img :src="frontmatter.image" class="w-1/1 h-75 object-cover rounded-lg">
    </div>
    <div class="container">
      <div class="prose m-auto py-5">
        <div v-if="frontmatter.tags" mb-5>
          <span v-for="tag in frontmatter.tags" :key="tag" class="c-#618770 bg-#618770/15 py-1 px-2 mr-2 rounded">
            {{ tag }}
          </span>
        </div>
        <div v-if="frontmatter.title" class="mb-8">
          <h1> {{ frontmatter.title }} </h1>
          <p v-if="frontmatter.date" class="opacity-50 !-mt-5">
            {{ formatDate(frontmatter.date) }}
            <span v-if="frontmatter.duration"> · {{ frontmatter.duration }}</span>
            <span v-if="frontmatter.lastUpdated" ml-2> Updated on {{ formatTimeAgo(frontmatter.lastUpdated) }}</span>
          </p>
          <p v-if="frontmatter.subtitle" class="opacity-50 !-mt-5 italic">
            {{ frontmatter.subtitle }}
          </p>
        </div>

        <RouterView ref="content" />

        <div class="my-8">
          <RouterLink
            :to="route.path.split('/').slice(0, -1).join('/') || '/'"
            class="font-mono no-underline opacity-50 hover:opacity-75"
          >
            cd ..
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
