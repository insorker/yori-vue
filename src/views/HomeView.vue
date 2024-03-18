<script setup lang="ts">
import HomeImage from '@/components/home/HomeImage.vue'
import HomeNav from '@/components/home/HomeNav.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import { ref } from 'vue'
import config from '../../docs/home/config.json'
import HomeHero from '@/components/home/HomeHero.vue'

const title = ref(config['title'])
const profile = ref(config['profile'])
const social_link = ref(config['social-link'])
const image_link = ref(config['image-link'])
const image_offset = ref(config['image-offset'])
</script>

<template>
  <main>
    <div class="left-container">
      <div class="content yr-flex-col-12">
        <HomeHero :title="title" :profile="profile" :social_link="social_link" />
        <div class="yr-flex-col-4">
          <HomeNav title="Projects" link="projects" />
          <HomeNav title="Posts" link="posts" />
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
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  width: 100%;
  min-height: 100vh;
  box-shadow: 16px 0px 24px 0px rgba(0, 0, 0, 25%);
}
.right-container {
  flex: 1 0 auto;
  display: none;
}
.content {
  flex: 1 1 auto;
  max-width: 48rem;
  margin: 0rem auto;
  padding: 12vh 1.5rem 2vh;
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
