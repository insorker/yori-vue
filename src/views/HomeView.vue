<script setup lang="ts">
import { ref } from 'vue'
import SocialLink from '@/components/common/SocialLink.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import HomeNav from '@/components/home/HomeNav.vue'
import HomeImage from '@/components/home/HomeImage.vue'
import self from '../../docs/home/self.json'

const title = ref(self.name)
const brief = ref<{ id: string, text: string }[]>([])
for (let idx in self.brief) {
  brief.value.push({
    id: idx, text: self.brief[idx]
  })
}
const social_link = ref(self['social-link'])
</script>

<template>
  <div class="home">
    <div class="home__pane yr-flex-col yr-gap-0">
      <div class="yr-flex-col yr-gap-1">
        <h1 class="home__pane-title">{{ title }}</h1>
        <ul class="home__pane-brief yr-flex-col yr-gap-3">
          <li v-for="sentence in brief" :key="sentence.id">{{ sentence.text }}</li>
          <li>
            <ul class="home__pane-link">
              <li><SocialLink icon="github" font="github" :url="social_link.github"></SocialLink></li>
              <li><SocialLink icon="bilibili" font="bilibili" :url="social_link.bilibili"></SocialLink></li>
              <!-- <li><SocialLink icon="zhihu" url="https://www.zhihu.com/people/zhu-xing-da-15"></SocialLink></li> -->
            </ul>
          </li>
        </ul>
        <ul class="yr-flex-col yr-gap-4">
          <li><HomeNav name="Project" path="project"></HomeNav></li>
          <li><HomeNav name="Note" path="note"></HomeNav></li>
          <li><HomeNav name="About" path="about"></HomeNav></li>
        </ul>
      </div>
      <TheFooter />
    </div>
    <div class="home__image">
      <HomeImage />
    </div>
  </div>
</template>

<style scoped>
.home {
  position: relative;
  display: flex;
  height: 100vh;
}
.home__pane {
  flex: 0 0 auto;
  position: relative;
  width: 55%;
  min-height: 100vh;
  padding: 0px 10%;
  z-index: 10;
  background: var(--yr-c-bg);
  box-shadow: 16px 0px 24px 0px rgba(0, 0, 0, 25%);
}
.home__pane-title {
  margin-bottom: 0px;
  font-size: var(--yr-fs-1);
}
.home__pane-brief {
  color: var(--yr-c-text-2);
}
.home__pane-link {
  display: flex;
  flex-direction: row;
  justify-content: start;
}
.home__pane-link > * {
  margin-right: 1rem;
}
.home__image {
  flex: 1 0 auto;
}

@media (max-width: 1024px) {
  .home__pane {
    width: 100%;
    justify-content: space-around;
  }
  .home__image {
    display: none;
  }
}
</style>
