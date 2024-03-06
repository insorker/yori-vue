<script setup lang="ts">
defineProps<{
  title: string
  brief: string
  to: string
}>()
</script>

<template>
  <RouterLink class="nav" :to="to">{{ title }}</RouterLink>
  <div class="nav-brief">{{ '~' + brief }}</div>
</template>

<style scoped>
.nav {
  color: inherit;
  font-size: var(--yr-fs-3);
  white-space: nowrap;
  text-decoration: none;
  transition: color 0.5s;
}
.nav-brief {
  color: var(--yr-c-text-2);
  font-size: var(--yr-fs-3);
  padding: 0rem 1rem;
}
.nav:hover {
  color: var(--yr-c-brand);
  cursor: pointer;
}
@media (max-width: 640px) {
  .nav-brief {
    display: none;
  }
}
</style>
