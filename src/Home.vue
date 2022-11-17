<script setup>
import HeroImage from './components/Heroimage.vue'
</script>

<template>
  <HeroImage class="heroimage" />
  <h4 class="welcome">也许，你认识我？</h4>
</template>

<style scoped>
.heroimage {
  margin: var(--yr-header-height) auto 0px;
}
.welcome {
  color: var(--yr-c-text);
  text-align: center;
}
</style>
