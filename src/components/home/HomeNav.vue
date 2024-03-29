<script setup lang="ts">
defineProps<{
  title: string
  link: string
}>()
</script>

<template>
  <RouterLink :to="link" class="nav">
    <h2 class="yr-h2">{{ title }}</h2>
    <i class="ri-arrow-right-up-line ri-2x"></i>
  </RouterLink>
</template>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;
  padding: 0 0.5rem;
  background-color: var(--yr-c-bg);
  transition:
    color 0.5s,
    background-color 0.5s;
}
.nav:hover {
  color: var(--yr-c-brand);
  background: var(--yr-c-bg-soft);
}
</style>
