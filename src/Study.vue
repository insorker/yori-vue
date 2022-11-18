<script setup>
import fm from 'front-matter'
import { ref } from 'vue'
import SiteTitle from './components/SiteTitle.vue'
import TagList from './components/TagList.vue'
import PostCardBrief from './components/PostCardBrief.vue'

const modules = import.meta.glob('../docs/study/**/*.md', { as: 'raw', eager: true })
const tagSelected = ref('All')

var tagList = new Set([tagSelected.value])
var postCardList = []
for (const path in modules) {
  let attr = fm(modules[path]).attributes
  attr['link'] = '/post/' + path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
  postCardList.push(attr)
  tagList.add(attr['tag'])
}
postCardList.sort((l, r) => {
  if (l.top == true && r.top != true) return true
  if (r.top == true && l.top != true) return false
  Date.parse(l.date) > Date.parse(r.date)
})
</script>

<template>
  <SiteTitle title="study" brief="如果你看懂了，说明你没看懂。"></SiteTitle>
  <TagList :tagList="tagList" :tagDefault="tagSelected" @tagChange="(tag) => tagSelected = tag"></TagList>
  <div class="post-card-list">
    <div v-for="pc in postCardList">
      <PostCardBrief v-if="tagSelected == 'All' || pc.tag == tagSelected" :link="pc.link" :title="pc.title" :date="pc.date"></PostCardBrief>
    </div>
  </div>
</template>
