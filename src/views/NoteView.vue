<script setup lang="ts">
import ListLayout from '@/components/common/ListLayout.vue';
import PostCard from '@/components/common/PostCard.vue'
import NotePlayground from '@/components/note/NotePlayground.vue'
import { usePostMetaStore } from '@/stores/PostMeta'

const { metaArray } = usePostMetaStore()
</script>

<template>
  <ListLayout title="note">
    <template v-slot:playground>
      <NotePlayground />
    </template>
    <template v-slot:content>
      <div class="note__content yr-content-wrapper yr-flex-column yr-gap-1">
        <PostCard v-for="item in metaArray" :to="item.path" :meta="item.meta" />
      </div>
    </template>
  </ListLayout>
</template>

<style scoped>
@media (min-width: 1024px) {
  .note__content {
    padding-left: 32px;
    border-left: 1px solid var(--color-border);
  }
}
</style>
