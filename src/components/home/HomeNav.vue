<script setup lang="ts">
defineProps<{
  name: string
  path: string
}>()
</script>

<template>
  <RouterLink :to="path" class="nav">
    <div class="nav__title">{{ name }}</div>
    <svg class="nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
  </RouterLink>
</template>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--yr-c-bg);
  transition: color 0.5s, background-color 0.5s;
}
.nav:hover {
  color: var(--yr-c-brand);
  background: var(--yr-c-bg-soft);
}
.nav svg path {
  fill: var(--yr-c-text-1);
  transition: fill 0.5s;
}
.nav:hover svg path {
  fill: var(--yr-c-brand);
}
.nav__title {
  font-size: var(--yr-fs-2);
  font-weight: 600;
}
.nav__icon {
  max-height: var(--yr-fs-2);
}
</style>