<script setup>
import fm from 'front-matter'
import SiteTitle from './components/SiteTitle.vue'
import TagList from './components/TagList.vue'
import PostCardBrief from './components/PostCardBrief.vue'
import { useRoute } from 'vue-router'
import { computed } from '@vue/reactivity'

const modules = import.meta.glob('../docs/study/**/*.md', { as: 'raw', eager: true })
const router = useRoute()
const tagTarget = computed(() => {
  return router.params.tag ? router.params.tag : 'All'
})

var pclist = []
var tagList = ['All']
for (const path in modules) {
  let attr = fm(modules[path]).attributes
  attr['link'] = '/post/' + path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
  pclist.push(attr)
  tagList.push(attr['tag'])
}
pclist.sort((l, r) => {
  if (l.top == true && r.top != true) return true
  if (r.top == true && l.top != true) return false
  Date.parse(l.date) > Date.parse(r.date)
})
</script>
<template>
  <SiteTitle title="study" brief="如果你看懂了，说明你没看懂。"></SiteTitle>
  <TagList :tagList="tagList" :tagTarget="tagTarget"></TagList>
  <div class="post-card-list" v-for="pc in pclist">
    <PostCardBrief v-if="tagTarget == 'All' || pc.tag == tagTarget" :link="pc.link" :title="pc.title" :date="pc.date"></PostCardBrief>
  </div>
</template>

<style scoped>
.post-card-list {
  display: grid;
  gap: 0.2rem;
}
</style>
