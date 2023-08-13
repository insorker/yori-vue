<script setup lang="ts">
defineProps<{
  to: string
  meta: any
}>()
</script>

<template>
  <div class="post-card">
    <RouterLink :to="to" class="yr-flex-col yr-gap-4">
      <div class="post-card__header">
        <div class="post-card__date">{{ meta.date }}</div>
        <div class="post-card__title">{{ meta.title }}</div>
      </div>
      <div class="post-card__brief">{{ meta.brief }}</div>
    </RouterLink>
  </div>
</template>

<style scoped>
.post-card {
  padding: var(--yr-fs-2) 0px;
  border-bottom: 1px solid var(--color-border);
}
.post-card__date {
  color: var(--yr-c-text-2);
}
.post-card__title {
  color: var(--yr-c-text-1);
  font-size: var(--yr-fs-2);
  font-weight: 600;
  transition: all 0.3s ease;
}
.post-card__title:hover {
  color: var(--yr-c-brand);
}
.post-card__brief {
  font-size: var(--yr-fs-5);
  color: var(--yr-c-text-2);
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>
