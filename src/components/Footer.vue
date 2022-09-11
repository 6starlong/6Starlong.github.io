<script setup>
const { title, layout, frontmatter } = $(useStore())
</script>

<template>
  <footer v-if="frontmatter.footer !== false" class="footer">
    <div class="container">
      <p :class="layout === 'doc' && 'prose m-auto'">
        <span class="font-500 text-sm">
          2022-PRESENT © Powered by {{ title }}
        </span>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  @apply py-6 opacity-50;
}
</style>
