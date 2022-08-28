<script setup>
const { title } = useStore()
</script>

<template>
  <footer p="6 t-10">
    <div class="prose m-auto opacity-50 flex">
      <span class="font-500 text-sm"> 2022-PRESENT © Powered by {{ title }}</span>
      <div class="flex-auto" />
    </div>
  </footer>
</template>
