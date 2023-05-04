<script setup lang="ts">
import TheHeader from '@/components/common/TheHeader.vue';
import TheFooter from '@/components/common/TheFooter.vue';
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
