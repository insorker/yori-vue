<script setup lang="ts">
import SocialLink from '@/components/common/SocialLink.vue'
import HomeImage from '@/components/home/HomeImage.vue'
import HomeNav from '@/components/home/HomeNav.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import { ref } from 'vue'
import config from '../../docs/home/config.json'

const title = ref(config['title'])
const brief = ref(config['brief'])
const social_link = ref(config['social-link'])
const image_url = ref(config['image-url'])
const image_offset = ref(config['image-offset'])
</script>

<template>
  <main>
    <div class="main-container yr-flex-col yr-gap-0">
      <div class="yr-flex-col yr-gap-1">
        <h1 class="title"><span>{{ title }}</span></h1>
        <ul class="brief yr-flex-col yr-gap-3">
          <li v-for="(value, idx) in brief" :key="idx">{{ value }}</li>
          <li><ul class="social-link"><li v-for="(value, key, idx) in social_link" :key="idx"><SocialLink :icon="key" :url="value" /></li></ul></li>
        </ul>
        <ul class="yr-flex-col yr-gap-4">
          <li><HomeNav name="Project" path="project"></HomeNav></li>
          <li><HomeNav name="Note" path="note"></HomeNav></li>
          <li><HomeNav name="About" path="about"></HomeNav></li>
        </ul>
      </div>
      <TheFooter />
    </div>
    <div class="sidebar-container">
      <HomeImage :url="image_url" :offset="image_offset"/>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
}
.main-container {
  flex: 0 0 auto;
  position: relative;
  width: 55%;
  min-height: 100vh;
  padding: 8vh 10% 0vh;
  z-index: 10;
  background: var(--yr-c-bg);
  box-shadow: 16px 0px 24px 0px rgba(0, 0, 0, 25%);
}
.title {
  text-align: center;
  margin-bottom: 0px;
  font-size: var(--yr-fs-1);
}
.title span {
  background: linear-gradient(90deg, #6818aa, #0d67bb);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
.brief {
  text-align: center;
  color: var(--yr-c-text-2);
}
.social-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.social-link > * {
  margin-right: 1rem;
}
.sidebar-container {
  flex: 1 0 auto;
}

@media (max-width: 1024px) {
  .main-container {
    width: 100%;
    justify-content: space-around;
  }
  .sidebar-container {
    display: none;
  }
}
</style>
