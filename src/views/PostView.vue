<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { usePostMetaStore } from '@/stores/PostMeta'
import '@/assets/markdown/github-markdown.css'
import 'highlight.js/styles/github.css'
import Giscus from '@giscus/vue'
import { useTheme } from '@/utils/theme'
import { useHead } from '@unhead/vue'

const route = useRoute()
const { metaHash } = usePostMetaStore()
const meta = ref(metaHash[route.path])
const { themeYori } = useTheme()

useHead({
  title: meta.value.title,
  meta: [
    {
      name: 'description',
      content: meta.value.brief,
    },
  ],
})
</script>

<template>
  <div class="post yr-flex-col yr-gap-1">
    <div class="post__spacer"></div>
    <div class="post__header yr-flex-col yr-gap-5">
      <div  class="yr-img" v-if="meta.image"><img :src="meta.image" /></div>
      <h1 class="post__title">{{ meta.title }}</h1>
      <div class="post__date">{{ meta.date }}</div>
    </div>
    <RouterView class="post__content" />
    <a href="https://notbyai.fyi">
      <img v-if="themeYori == 'light'" src="/Not-By-AI/Written-By-Human-Not-By-AI-Badge-white.svg" alt="Written by Human, Not by AI">
      <img v-else src="/Not-By-AI/Written-By-Human-Not-By-AI-Badge-black.svg" alt="Written by Human, Not by AI">
    </a>
    <Giscus
      :key="themeYori"
      repo="insorker/insorker.github.io"
      repo-id="MDEwOlJlcG9zaXRvcnkzMDI5NTUyMjU="
      category="Announcements"
      category-id="DIC_kwDOEg662c4CSpKy"
      mapping="url"
      strict="0"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="top"
      :theme="themeYori"
      lang="zh-CN"
      loading="lazy"
      crossorigin="anonymous">
    </Giscus>
  </div>
</template>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css');
.post {
  width: 100%;
  max-width: 720px;
}
.post__header {
  align-items: center;
}
.post__title {
  margin-bottom: 10px;
  font-size: var(--yr-fs-1);
}
.post__date {
  color: var(--yr-c-text-2);
  font-size: var(--yr-fs-3);
}
.markdown-body {
  font-family: inherit;
}
</style>