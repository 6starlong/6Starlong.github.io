<script setup lang="ts">
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const heroUrl = 'https://w.wallhaven.cc/full/6o/wallhaven-6ozkzl.jpg'
const { isLoading } = useImage({ src: heroUrl })
</script>

<template>
  <section :style="{ height: 'var(--hero-height)' }">
    <div v-if="isLoading" w-full h-full class="flex justify-center items-center">
      <div i-line-md:loading-loop text-3xl />
    </div>
    <img v-else :src="heroUrl" alt="hero-img" w-full h-full object-cover>
  </section>
  <!-- TODO: 最新更新的posts -->
  <!-- TODO: 每日 -->
  <section class="mt-10">
    <README />
  </section>
  <!-- eslint-disable-next-line vue/no-constant-condition -->
  <div v-if="false" h-200vh px-4 py-10>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse
      </a>
    </p>
    <p>
      <em text-sm opacity-75>固执己见的 Vite 项目模板</em>
    </p>

    <div py-4 />

    <input
      id="input"
      v-model="name"
      placeholder="输入你的名字"
      aria-label="输入你的名字"
      type="text"
      autocomplete="false"
      p="x4 y2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >
    <label class="hidden" for="input">输入你的名字</label>

    <div>
      <button
        btn m-3 text-sm
        :disabled="!name"
        @click="go"
      >
        确定
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
