<script setup lang="ts">
defineProps<{
  to: string
  meta: any
}>()
</script>

<template>
  <div class="post-card">
    <RouterLink :to="to" class="yr-flex-column yr-gap-4">
      <div class="post-card__header">
        <div class="post-card__title yr-fs-2">{{ meta.title }}</div>
        <div class="post-card__date yr-fs-sm">{{ meta.date }}</div>
      </div>
      <div class="post-card__brief">{{ meta.brief }}</div>
    </RouterLink>
  </div>
</template>

<style scoped>
.post-card {
  padding: var(--yr-font-size-h2) 0px;
  border-bottom: 1px solid var(--color-border);
}
.post-card__date {
  color: var(--color-text-soft);
}

.post-card__title {
  color: var(--color-text);
  transition: all 0.3s ease;
}
.post-card__title:hover {
  color: var(--color-brand);
}
</style>
