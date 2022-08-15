<script setup lang="ts"></script>

<template>
  <nav text-xl mt-6>
    <RouterLink class="icon-btn mx-2" to="/" title="首页">
      <div i-carbon-campsite />
    </RouterLink>

    <button class="icon-btn mx-2 !outline-none" title="切换深色模式" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <!-- <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales()">
      <div i-carbon-language />
    </a> -->

    <RouterLink class="icon-btn mx-2" to="/about" title="关于">
      <div i-carbon-dicom-overlay />
    </RouterLink>

    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/6starlong" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a>
  </nav>
</template>
