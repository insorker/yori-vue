<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
</script>

<template>
  <div class="page yr-flex-col-0">
    <TheHeader class="header" />
    <main class="container"><RouterView /></main>
    <div class="spacer"></div>
    <TheFooter />
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
}
.header {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: var(--yr-pd-top);
}
.container {
  margin: var(--yr-pd-top) auto 0rem;
  padding: 0rem var(--yr-pd-side);
  width: 100%;
  max-width: var(--yr-main-width);
}
.spacer {
  flex: 1;
}
@media (min-width: 1024px) {
  .container {
    padding: 0rem 0rem;
  }
}
</style>
