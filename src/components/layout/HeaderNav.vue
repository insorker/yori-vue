<script setup lang="ts">
defineProps<{
  name: string
  path: string
}>()
</script>

<template>
  <RouterLink class="nav" :to="path">{{ name }}</RouterLink>
</template>

<style scoped>
.nav {
  padding: 0.75rem;
}
</style>
