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
  color: inherit;
  font-size: var(--yr-fs-3);
  padding: 1rem;
  white-space: nowrap;
  text-decoration: none;
  transition: color 0.5s;
}
.nav:hover {
  color: var(--yr-c-brand);
  cursor: pointer;
}
</style>
