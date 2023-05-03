<script setup lang="ts">
defineProps<{
  name: string
  path: string
}>()
</script>

<template>
  <RouterLink class="header-nav yr-fs-3" :to="path">{{ name }}</RouterLink>
</template>

<style scoped>
.header-nav {
  color: inherit;
  padding: var(--yr-font-size);
  white-space: nowrap;
  text-decoration: none;
  transition: color 0.5s, background-color 0.5s;
}
.header-nav:hover {
  color: var(--color-brand);
  cursor: pointer;
}
</style>
