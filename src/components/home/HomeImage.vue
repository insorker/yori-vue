<script setup lang="ts">
defineProps<{
  offset: string
}>()
</script>

<template>
  <div class="wrapper">
    <img src="/background.png">
  </div>
</template>

<style scoped>
.wrapper {
  height: 100%;
  position: relative;
  overflow: hidden;
}
.wrapper img {
  height: 100%;
  max-width: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(v-bind(offset)) translateY(-50%);
}
</style>