<script setup lang="ts">
/**
 * 整个页面的布局
 */
import TheHeader from '@/components/layout/TheHeader.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
</script>

<template>
  <div class="page yr-flex-col yr-gap-0">
    <TheHeader class="header" />
    <RouterView class="content" />
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
  height: 3.25rem;
}
.content {
  padding: 3.25rem 1.5rem 0 1.5rem;
}
.spacer {
  flex: 1;
}
</style>
