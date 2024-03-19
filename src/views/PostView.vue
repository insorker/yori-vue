<script setup lang="ts">
import { useMetaPostsStore } from '@/stores/MetaPosts'
import { useTheme } from '@/utils/theme'
import Giscus from '@giscus/vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import '@/assets/markdown/github-markdown-modify.css'
import 'highlight.js/styles/github.css'

const route = useRoute()
const { metaPosts } = useMetaPostsStore()
const meta = ref(metaPosts[route.path].meta)
const { themeYori } = useTheme()
</script>

<template>
  <div class="post yr-flex-col-16">
    <div class="yr-img" v-if="meta.image"><img :src="meta.image" /></div>
    <div class="header yr-flex-col-0">
      <h1 class="title yr-h1">{{ meta.title }}</h1>
      <div class="date">{{ meta.date }}</div>
    </div>
    <div class="content yr-flex-col-8">
      <RouterView />
      <a v-if="!('notbyai' in meta) || meta.notbyai" href="https://notbyai.fyi">
        <img
          v-if="themeYori == 'light'"
          src="/Not-By-AI/Written-By-Human-Not-By-AI-Badge-white.svg"
          alt="Written by Human, Not by AI"
        />
        <img
          v-else
          src="/Not-By-AI/Written-By-Human-Not-By-AI-Badge-black.svg"
          alt="Written by Human, Not by AI"
        />
      </a>
    </div>
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
      crossorigin="anonymous"
    >
    </Giscus>
  </div>
</template>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css');
.post {
  max-width: 65ch;
  margin: var(--yr-pd-top) auto;
}
.header {
  align-items: center;
}
.title {
  margin-bottom: 10px;
}
.date {
  color: var(--yr-c-text-2);
}
.markdown-body {
  font-family: inherit;
}
</style>
