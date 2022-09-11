<script setup>
let active = $ref(false)
onMounted(() => {
  const { height } = useWindowSize()
  const { y } = useScroll(document, {
    onScroll: () => (active = y.value > height.value / 2),
  })
})

const backTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>

<template>
  <div class="back-top" :class="{ 'is-active animate-wobble': active }" @click="backTop">
    <div i-ri:arrow-up-s-line text-lg />
  </div>
</template>

<style scoped>
  .back-top {
    position: fixed;
    right: -100px;
    z-index: 1;
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    cursor: pointer;
    transition: right .25s ease;
    @apply bottom-9 lt-md:bottom-6;
    @apply bg-#ebebeb dark:bg-#1c2024;
  }

  .back-top.is-active {
    @apply right-9 lt-md:right-6;
  }
  </style>

