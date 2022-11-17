<script setup>
import fm from 'front-matter'
import PostCard from './components/PostCard.vue'
import SiteTitle from './components/SiteTitle.vue'

const modules = import.meta.glob('../docs/note/**/*.md', { as: 'raw', eager: true })

var pclist = []
for (const path in modules) {
  let attr = fm(modules[path]).attributes
  attr['link'] = '/note/' + path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
  pclist.push(attr)
}
pclist.sort((l, r) => Date.parse(l.date) > Date.parse(r.date))

</script>

<template>
  <SiteTitle title="note" brief="coffee or tea"></SiteTitle>
  <div class="post-card-list">
    <PostCard v-for="pc in pclist" :link="pc.link" :category="pc.category" :title="pc.title" :excerpt="pc.excerpt"></PostCard>
  </div>
</template>

<style scoped>
.post-card-list {
  display: grid;
  gap: 3.5rem;
}
</style>
