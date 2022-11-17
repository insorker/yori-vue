<script setup>
import fm from 'front-matter'
import MarkdownIt from 'markdown-it'
import { useRoute } from 'vue-router'
import PostTitle from './components/PostTitle.vue';

const modules = import.meta.glob('../docs/note/**/*.md', { as: 'raw', eager: true })
const router = useRoute()
const path = '../docs/note/' + router.params.name + '.md'

var file = fm(modules[path])
var md = new MarkdownIt()

var content = {
  title: file.attributes.title,
  date: file.attributes.date.toISOString().split('T')[0],
  content: md.render(file.body),
}

</script>

<template>
  <PostTitle :title="content.title" :date="content.date"></PostTitle>
  <div class="md-container" v-html="content.content"></div>
</template>

<style scoped>
@import './assets/css/github-markdown.min.css';
@import './assets/css/github.min.css';
</style>
