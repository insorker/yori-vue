<script setup lang="ts">
import ListLayout from '@/components/common/ListLayout.vue';
import PostCard from '@/components/common/PostCard.vue'
import { usePostMetaStore } from '@/stores/PostMeta'

const { metaArray } = usePostMetaStore()
</script>

<template>
  <ListLayout title="note">
    <template v-slot:content>
      <div class="yr-content-wrapper yr-flex-column yr-gap-1">
        <PostCard v-for="item in metaArray" :to="item.path" :meta="item.meta" />
      </div>
    </template>
  </ListLayout>
  <!-- <TheList title="note" direction="row">
    <template v-slot:content>
      <div class="yr-content-wrapper yr-flex-column yr-gap-1">
        <PostCard v-for="item in metaArray" :to="item.path" :meta="item.meta" />
      </div>
    </template>
  </TheList> -->
</template>
