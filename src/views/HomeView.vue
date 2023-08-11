<script setup lang="ts">
import { ref } from 'vue'
import SocialLink from '@/components/common/SocialLink.vue'
import TheFooter from '@/components/common/TheFooter.vue'
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

const switcher = ref(0)
const switcherTrigger = () => {
  switcher.value += 1
  if (switcher.value > 1) {
    switcher.value = 0
  }
}
</script>

<template>
  <div class="home">
    <div class="home__pane yr-flex-column yr-gap-null">
      <div class="yr-flex-column yr-gap-1">
        <h1 class="home__pane-title yr-fs-1">{{ title }}</h1>
        <ul class="home__pane-brief yr-flex-column yr-gap-3">
          <li v-for="sentence in brief" :key="sentence.id">
            {{ sentence.text }}
          </li>
          <div class="home__pane-social-link">
            <SocialLink icon="github" font="github" :url="social_link.github"></SocialLink>
            <SocialLink icon="bilibili" font="bilibili" :url="social_link.bilibili"></SocialLink>
            <!-- <SocialLink icon="zhihu" url="https://www.zhihu.com/people/zhu-xing-da-15"></SocialLink> -->
          </div>
        </ul>
        <div class="yr-flex-column yr-gap-4">
          <HomeNav name="Project" path="project"></HomeNav>
          <HomeNav name="Note" path="note"></HomeNav>
          <HomeNav name="About" path="about"></HomeNav>
        </div>
      </div>
      <TheFooter />
      <div class="home__pane-switcher yr-flex-column yr-gap-4">
        <div class="home__pane-switcher-item" @click="switcherTrigger"></div>
      </div>
    </div>
    <div v-if="switcher == 0" class="home__image">
      <HomeImage />
    </div>
    <div v-if="switcher == 1" class="home__playground yr-flex-column yr-gap-null">
      <div class="xdsh">
        To be built...
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  position: relative;
  display: flex;
  height: 100vh;
}
ul, li {
  padding: 0;
  margin: 0;
  list-style: none
}
.home__pane {
  flex: 0 0 auto;
  position: relative;
  width: 55%;
  min-height: 100vh;
  padding: 0px 10%;
  z-index: 10;
  background: var(--color-background);
  box-shadow: 16px 0px 24px 0px rgba(0, 0, 0, 25%);
}
.home__pane-title {
  margin-bottom: 0px;
}
.home__pane-brief {
  color: var(--color-text-soft);
  list-style: none;
}
.home__pane-social-link {
  display: flex;
  flex-direction: row;
  justify-content: start;
}
.home__pane-social-link > * {
  margin-right: 1rem;
}
.home__pane-switcher {
  position: absolute;
  align-items: center;
  width: 32px;
  height: 32px;
  right: 16px;
  bottom: 16px;
}
.home__pane-switcher-item {
  width: 20px;
  height: 20px;
  transition: all 0.3s ease;
}
.home__pane-switcher-item:hover {
  cursor: pointer;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: solid 1px var(--color-border);
  background-color: var(--color-brand);
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 15%);
}
.home__image {
  flex: 1 0 auto;
}
.home__playground {
  background-color: var(--color-background);
  width: 45%;
  min-height: 100vh;
  align-items: center;
}

@media (max-width: 1024px) {
  .home__pane {
    width: 100%;
    justify-content: space-around;
  }
  .home__pane-switcher {
    display: none;
  }
  .home__image {
    display: none;
  }
  .home__playground {
    display: none;
  }
}
</style>
