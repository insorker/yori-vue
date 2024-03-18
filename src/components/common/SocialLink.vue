<script setup lang="ts">
defineProps<{
  link: string
  icon: string
}>()
</script>

<template>
  <a class="link yr-flex-row-0" :href="link" target="_blank" rel="noopener">
    <i :class="icon"></i>
  </a>
</template>

<style scoped>
a {
  color: var(--yr-c-text-1);
  background: var(--yr-c-gray-1);
}
a:hover {
  color: var(--yr-c-text-inverse-1);
  background-color: var(--yr-c-brand);
}
.link {
  padding: 0.6rem;
  border-radius: 0.6rem;
}
</style>
