<script setup lang="ts">
import ListLayout from '@/components/common/ListLayout.vue';
import NoteCard from '@/components/note/NoteCard.vue'
import NotePlayground from '@/components/note/NotePlayground.vue'
import { usePostMetaStore } from '@/stores/PostMeta'
import { ref } from 'vue'
import config from '../../docs/note/config.json'

const { metaArray } = usePostMetaStore()
const playground_image = ref(config['playground-image'])
</script>

<template>
  <ListLayout title="note">
    <template v-slot:playground>
      <NotePlayground :image="playground_image" />
    </template>
    <template v-slot:content>
      <div class="note__content yr-flex-col yr-gap-0">
        <NoteCard v-for="(item, idx) in metaArray" :key="idx" :to="item.path" :meta="item.meta" />
      </div>
    </template>
  </ListLayout>
</template>

<style scoped>
.note__content {
  max-width: 600px;
}
</style>
