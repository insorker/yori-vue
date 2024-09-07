<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
</script>

<template>
  <div class="layout yr-flex-col-0">
    <TheHeader class="header" />
    <main class="container">
      <RouterView />
    </main>
    <div class="spacer"></div>
    <TheFooter class="footer" />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  padding: var(--yr-pd-top) 0rem;
}
.header {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: var(--yr-pd-top);
  padding: 0rem 1rem;
}
.container {
  width: 100%;
  max-width: var(--yr-main-width);
  margin: 0 auto;
  padding: 0rem var(--yr-pd-side);
}
.spacer {
  flex: 1;
}
.footer {
  padding: 0rem 1.5rem;
}
</style>
