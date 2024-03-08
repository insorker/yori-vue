<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>
<template>
  <div class="yr-img">
    <img :src="image" />
  </div>
</template>

<style scoped>
img {
  max-width: 100%;
}
</style>