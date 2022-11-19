<script setup>
import fm from 'front-matter'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js/lib/common';
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import PostTitle from './components/PostTitle.vue';
import MathJaxInit from './assets/js/mathjax'
import Giscus from '@giscus/vue';

const modules = import.meta.glob('../docs/**/*.md', { as: 'raw' })
const router = useRoute()
const md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }
    return '';
  }
})
const content = ref({})

for (const path in modules) {
  const name = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))

  if (name == router.params.name) {
    modules[path]().then((mod) => {
      const file = fm(mod);
      
      content.value = {
        title: file.attributes.title,
        date: file.attributes.date,
        body: md.render(file.body),
      }
    })
    break;
  }
}

MathJaxInit()
</script>

<template>
  <div class="markdown" v-if="content != {}">
    <PostTitle :title="content.title" :date="content.date"></PostTitle>
    <article class="markdown-body" v-html="content.body"></article>
  </div>
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
        crossorigin="anonymous"></Giscus>
</template>

<style scoped>
.markdown {
  padding-bottom: var(--yr-header-height);
}
.markdown-body {
  background-color: var(--yr-c-bg);
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
}
</style>
