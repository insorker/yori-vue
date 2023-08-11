<script setup lang="ts">
/**
 * 整个页面的布局
 */
import TheHeader from '@/components/layout/TheHeader.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
</script>

<template>
  <div class="page yr-flex-column yr-gap-null">
    <TheHeader />
    <RouterView class="page__content" />
    <div class="page__spacer"></div>
    <TheFooter />
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
}
.page__content {
  padding: 0 var(--yr-content-padding);
}
.page__spacer {
  flex: 1;
}
</style>
