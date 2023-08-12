<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { usePostMetaStore } from '@/stores/PostMeta'
import Giscus from '@giscus/vue'
import 'github-markdown-css'
import 'highlight.js/styles/github.css'

const route = useRoute()
const { metaHash } = usePostMetaStore()
const meta = ref(metaHash[route.path])
console.log(meta.value)
</script>

<template>
  <div class="post yr-flex-col yr-gap-0">
    <div class="yr-flex-col yr-gap-1">
      <div class="post__spacer"></div>
      <div class="post__header yr-flex-col yr-gap-5">
        <div  class="yr-img" v-if="meta.image"><img :src="meta.image" /></div>
        <h1 class="post__title yr-fs-1">{{ meta.title }}</h1>
        <div class="post__date yr-fs-3">{{ meta.date }}</div>
      </div>
      <RouterView class="post__content" />
      <Giscus
        repo="insorker/insorker.github.io"
        repo-id="MDEwOlJlcG9zaXRvcnkzMDI5NTUyMjU="
        category="Announcements"
        category-id="DIC_kwDOEg662c4CSpKy"
        mapping="url"
        strict="0"
        reactions-enabled="1"
        emit-metadata="0"
        input-position="top"
        theme="preferred_color_scheme"
        lang="zh-CN"
        loading="lazy"
        crossorigin="anonymous">
      </Giscus>
    </div>
  </div>
</template>

<style scoped>
.post {
  align-items: center;
  max-width: var(--yr-content-width);
}
.post__header {
  align-items: center;
}
.post__title {
  margin-bottom: 10px;
}
.post__date {
  color: var(--color-text-soft);
}
.markdown-body {
  font-size: 16px;
  font-family: inherit;
}
</style>