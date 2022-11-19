<script setup>
import fm from 'front-matter'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js/lib/common';
import { useRoute } from 'vue-router'
import PostTitle from './components/PostTitle.vue';
import { assert } from '@vue/compiler-core';
import MathJaxInit from './assets/js/mathjax'
import Giscus from '@giscus/vue';

const modules = import.meta.glob('../docs/**/*.md', { as: 'raw', eager: true })
const router = useRoute()
const pathPrefix = [ '../docs/note/', '../docs/study/' ]

var path;
for (let idx in pathPrefix) {
  path = pathPrefix[idx] + router.params.name + '.md'
  if (path in modules)
    break;
}
if (!(path in modules))
  assert('path error')

const file = fm(modules[path])
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
const content = {
  title: file.attributes.title,
  date: file.attributes.date,
  body: md.render(file.body),
}

MathJaxInit()
</script>

<template>
  <div class="markdown">
    <PostTitle :title="content.title" :date="content.date"></PostTitle>
    <article class="markdown-body" v-html="content.body"></article>
  </div>
  <Giscus></Giscus>
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
