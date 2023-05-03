<script setup lang="ts">
import TheHeader from '@/components/common/TheHeader.vue';
import TheFooter from '@/components/common/TheFooter.vue';
</script>

<template>
  <div class="page">
    <TheHeader />
    <RouterView class="page__content" />
    <div class="page__spacer"></div>
    <TheFooter />
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.page__content {
  padding: 0 var(--yr-padding);
}
.page__spacer {
  flex: 1;
}
</style>
