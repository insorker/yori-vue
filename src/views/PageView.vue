<script setup lang="ts">
import TheHeader from '@/components/common/TheHeader.vue';
import TheFooter from '@/components/common/TheFooter.vue';
</script>

<template>
  <div class="flex-box">
    <TheHeader class="header" />
    <RouterView class="content" />
    <div class="spacer"></div>
    <TheFooter class="footer" />
  </div>
</template>

<style scoped>
.flex-box {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.spacer {
  flex: 1;
}
</style>
