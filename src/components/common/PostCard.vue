<script setup lang="ts">
import type { PostCardModel } from '@/models/PostCard'

defineProps<{
  to: string
  card: PostCardModel
}>()
</script>

<template>
  <RouterLink :to="to" class="post-card yr-flex-column yr-gap-null">
    <div class="post-card__date">{{ card.date }}</div>
    <div class="post-card__title yr-fs-2">{{ card.title }}</div>
    <div class="post-card__brief">{{ card.brief }}</div>
  </RouterLink>
</template>

<style scoped>
.post-card__date,
.post-card__brief {
  color: var(--color-text-soft);
}
.post-card__title {
  color: var(--color-text);
}
.post-card__title:hover {
  color: var(--color-brand);
}
</style>
