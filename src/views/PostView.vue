<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { usePostMetaStore } from '@/stores/PostMeta'
import 'github-markdown-css'

const route = useRoute()
const { metaHash } = usePostMetaStore()
const meta = ref(metaHash[route.path])
</script>

<template>
  <div class="post yr-flex-column yr-gap-null">
    <div class="yr-content-wrapper yr-flex-column yr-gap-1">
      <div class="post__spacer"></div>
      <div class="post__header yr-flex-column yr-gap-null">
        <h1 class="post__title yr-fs-2">{{ meta.title }}</h1>
        <div class="post__date">{{ meta.date }}</div>
      </div>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.post {
  align-items: center;
}
.post__header {
  align-items: center;
}
.post__date {
  color: var(--color-text-soft);
}
</style>

<!-- <style>
.markdown-body {
  border-radius: 6px;
  border: 1px solid var(--color-border);
  padding: 16px;
}

@media (max-width: 767px) {
  .markdown-body {
    border-radius: 0px;
    border: none;
  }
}
</style> -->