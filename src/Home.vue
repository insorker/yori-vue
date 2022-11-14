<script setup>
import HeroImage from './components/Heroimage.vue'
</script>

<template>
  <div class="container">
    <HeroImage class="heroimage" />
    <h4 class="welcome">也许，你认识我？</h4>
  </div>
</template>

<style scoped>
.heroimage {
  margin: var(--yr-nav-height) auto 0px;
}
.welcome {
  text-align: center;
}
</style>
