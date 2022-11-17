<script setup>
import Navigation from './Navigation.vue';
</script>

<template>
  <header class="YRHeader">
    <Navigation></Navigation>
  </header>
  <div class="YRContent">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.YRHeader {
  position: fixed;
  width: 100%;
  z-index: var(--yr-z-index-nav);
}
.YRContent {
  padding-top: var(--yr-nav-height);
  max-width: 720px;
  margin: 0 auto;
}
@media (max-width: 767px) {
  .YRContent {
    padding: 15px;
  }
}
</style>
