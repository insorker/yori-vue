<script setup lang="ts">
defineProps<{
  to: string
  meta: any
}>()
</script>

<template>
  <RouterLink :to="to" class="post-card yr-flex-column yr-gap-sm">
    <div class="post-card__title yr-fs-2">{{ meta.title }}</div>
    <div class="post-card__date yr-fs-sm">{{ meta.date }}</div>
    <div class="post-card__brief">{{ meta.brief }}</div>
  </RouterLink>
</template>

<style scoped>
.post-card__date, .post-card__brief {
  color: var(--color-text-soft);
}
.post-card__title {
  color: var(--color-text);
}
.post-card__title:hover {
  color: var(--color-brand);
}
</style>
