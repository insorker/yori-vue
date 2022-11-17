<script setup>
import fm from 'front-matter'
import PostCard from './components/PostCard.vue'
import SiteTitle from './components/SiteTitle.vue'

const modules = import.meta.glob('../docs/note/**/*.md', { as: 'raw', eager: true })

var postCardList = []
for (const path in modules) {
  let attr = fm(modules[path]).attributes
  attr['link'] = '/post/' + path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
  postCardList.push(attr)
}
postCardList.sort((l, r) => {
  if (l.top == true && r.top != true) return true
  if (r.top == true && l.top != true) return false
  Date.parse(l.date) > Date.parse(r.date)
})

</script>

<template>
  <SiteTitle title="note" brief="coffee or tea"></SiteTitle>
  <div class="post-card-list">
    <div v-for="pc in postCardList">
      <PostCard :link="pc.link" :tag="pc.tag" :date="pc.date" :title="pc.title" :brief="pc.brief"></PostCard>
    </div>
  </div>
</template>

<style scoped>
.post-card-list {
  display: grid;
  gap: 3.5rem;
}
</style>
