<script setup>
import fm from 'front-matter'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js/lib/common';
import { useRoute } from 'vue-router'
import PostTitle from './components/PostTitle.vue';

const modules = import.meta.glob('../docs/**/*.md', { as: 'raw', eager: true })
const router = useRoute()
const pathNote = '../docs/note/' + router.params.name + '.md'
const pathStudy = '../docs/study/' + router.params.name + '.md'
var path;
if (pathNote in modules)
  path = pathNote
else if (pathStudy in modules)
  path = pathStudy

var file = fm(modules[path])
var md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }

    return '';
  }
})

var content = {
  title: file.attributes.title,
  date: file.attributes.date,
  body: md.render(file.body),
}
</script>

<template>
  <div class="markdown">
    <PostTitle :title="content.title" :date="content.date"></PostTitle>
    <article class="markdown-body" v-html="content.body"></article>
  </div>
</template>

<style scoped>
.markdown {
  padding-bottom: var(--yr-nav-height);
}
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
}
</style>
