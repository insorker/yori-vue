<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import '@/assets/markdown/github-markdown-modify.css'
import { useMetaPostsStore } from '@/stores/MetaPosts'
import { useTheme } from '@/utils/theme'
import Giscus from '@giscus/vue'
import 'highlight.js/styles/github.css'

const route = useRoute()
const { metaPosts } = useMetaPostsStore()
const meta = ref(metaPosts[route.path].meta)
const { theme } = useTheme()

useHead({
  title: meta.value.title
})
</script>

<template>
  <div class="post yr-flex-col-16">
    <div class="yr-img post-img" v-if="meta.image"><img :src="meta.image" /></div>
    <div class="header yr-flex-col-0">
      <h1 class="title yr-h1">{{ meta.title }}</h1>
      <div class="brief">
        <span>{{ meta.date }}</span>
        <span v-if="'series' in meta">
          | From <RouterLink :to="'/series/' + meta.series" style="color: var(--yr-c-brand)">{{ meta.series }}</RouterLink> series.
        </span>
      </div>
    </div>
    <div class="content yr-flex-col-8">
      <RouterView />
    </div>
    <Giscus
      :key="theme"
      repo="insorker/insorker.github.io"
      repo-id="MDEwOlJlcG9zaXRvcnkzMDI5NTUyMjU="
      category="Announcements"
      category-id="DIC_kwDOEg662c4CSpKy"
      mapping="url"
      strict="0"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="top"
      :theme="theme"
      lang="zh-CN"
      loading="lazy"
      crossorigin="anonymous"
    >
    </Giscus>
  </div>
</template>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css');
.post {
  max-width: 780px;
  margin: var(--yr-pd-top) auto;
}
.post-img {
  max-width: 640px;
  margin: 0 auto;
}
.header {
  align-items: center;
}
.title {
  margin-bottom: 10px;
}
.brief {
  color: var(--yr-c-text-2);
}
.markdown-body {
  font-family: inherit;
}
</style>
