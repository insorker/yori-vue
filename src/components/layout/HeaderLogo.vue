<script setup lang="ts">
defineProps<{
  title: string
  brief: string
  to: string
}>()
</script>

<template>
  <div class="logo yr-flex-row-4">
    <RouterLink :to="to">{{ title }}</RouterLink>
    <div class="brief">{{ '~' + brief }}</div>
  </div>
</template>

<style scoped>
.brief {
  color: var(--yr-c-text-2);
}
@media (max-width: 1024px) {
  .brief {
    display: none;
  }
}
</style>
