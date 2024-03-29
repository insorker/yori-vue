<script setup lang="ts">
import HomeImage from '@/components/home/HomeImage.vue'
import HomeNav from '@/components/home/HomeNav.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import { ref } from 'vue'
import config from '../../docs/home/config.json'
import HomeHero from '@/components/home/HomeHero.vue'
import { useMetaPostsLatestStore } from '@/stores/MetaPosts'

const title = ref(config['title'])
const profile = ref(config['profile'])
const social_link = ref(config['social-link'])
const image_link = ref(config['image-link'])
const image_offset = ref(config['image-offset'])
const { metaPostsLatest } = useMetaPostsLatestStore()
</script>

<template>
  <main>
    <div class="left-container">
      <div class="content yr-flex-col-16">
        <HomeHero :title="title" :profile="profile" :social_link="social_link" />
        <div class="yr-flex-col-4">
          <HomeNav title="Projects" link="projects" />
          <div class="yr-flex-col-2">
            <HomeNav title="Latest Posts" link="posts" />
            <RouterLink
              v-for="(item, idx) in metaPostsLatest"
              :key="idx"
              :to="item.path"
              class="post-link"
              >{{ item.meta.title }}</RouterLink
            >
          </div>
          <HomeNav title="About" link="about" />
        </div>
        <TheFooter />
      </div>
    </div>
    <div class="right-container">
      <HomeImage :link="image_link" :offset="image_offset" />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
}
.left-container {
  overflow: auto;
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  width: 100%;
  min-height: 100vh;
  box-shadow: 16px 0px 24px 0px rgba(0, 0, 0, 25%);
  z-index: 10;
}
.right-container {
  flex: 1 0 auto;
  display: none;
}
.content {
  flex: 1 1 auto;
  max-width: 45rem;
  margin: 12vh auto 2vh;
  padding: 0px 1.5rem;
}
.post-link {
  padding: 0 1rem;
}

@media (min-width: 1024px) {
  .left-container {
    width: 55%;
  }
  .right-container {
    display: block;
  }
}
</style>
