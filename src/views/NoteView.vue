<script setup lang="ts">
import ListLayout from '@/components/common/ListLayout.vue';
import NoteCard from '@/components/note/NoteCard.vue'
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
      <div class="note__content yr-content-wrapper yr-flex-column yr-gap-null">
        <NoteCard v-for="item in metaArray" :to="item.path" :meta="item.meta" />
      </div>
    </template>
  </ListLayout>
</template>

<style scoped>
.note__content {
  max-width: 600px;
}
</style>
