<script setup lang="ts">
defineProps<{
  name: string
  path: string
}>()
</script>

<template>
  <RouterLink class="nav-item yr-fs-3" :to="path">{{ name }}</RouterLink>
</template>

<style scoped>
.nav-item {
  color: inherit;
  padding: var(--yr-font-size);
  white-space: nowrap;
  text-decoration: none;
}
.nav-item:hover {
  color: var(--color-brand);
  cursor: pointer;
}
</style>
