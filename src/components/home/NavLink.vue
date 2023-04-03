<script setup lang="ts">
defineProps<{
  name: string
  path: string
}>()
</script>

<template>
  <RouterLink :to="path" class="nav-link">
    <div class="yr-fs-2">{{ name }}</div><div>箭头</div>
  </RouterLink>
</template>

<style>
.nav-link {
  display: flex;
  justify-content: space-between;
}
.nav-link:hover {
  background: var(--color-background-soft);
}
</style>