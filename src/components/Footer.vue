<script setup>
const { title, frontmatter } = $(useStore())
</script>

<template>
  <footer v-if="frontmatter.footer !== false" class="footer">
    <div :class="frontmatter.layout && frontmatter.layout !== 'doc' ? 'container' : 'prose m-auto'">
      <span class="font-500 text-sm"> 2022-PRESENT © Powered by {{ title }}</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  --at-apply: p-6 opacity-50;
}
</style>
