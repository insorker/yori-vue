<script setup lang="ts">
import SocialLink from '@/components/common/SocialLink.vue';
import TheFooter from '@/components/common/TheFooter.vue';
import NavLink from '@/components/home/NavLink.vue';
import { ref } from 'vue';

let id = 0;

const title = ref("Insorker")
const brief = ref([
  { id: id++, text: "Hi, this is insorker, a student who likes programming." },
  { id: id++, text: "Besides, I like video games, go, origami, pixel art, harmonica, whistle...Just for enjoyment and not professional. Maybe we can play together." },
  { id: id++, text: "Want to know more about me? Follow the links right below." },
])

</script>

<template>
  <div class="home">
    <div class="home__bg">
      <img style="margin-left: 35vw;" src="/default-bg-img.png">
    </div>
    <div class="home__pane yr-flex-column">
      <div class="yr-flex-column yr-gap-1">
        <h1 class="home__pane-title yr-fs-1">{{ title }}</h1>
        <ul class="home__pane-brief yr-flex-column yr-gap-3">
          <li v-for="sentence in brief" :key="sentence.id">
            {{ sentence.text }}
          </li>
          <div class="home__pane-social-link">
            <SocialLink icon="github" font="github" url="https://github.com/insorker"></SocialLink>
            <SocialLink icon="bilibili" font="bilibili" url="https://space.bilibili.com/434618849"></SocialLink>
            <SocialLink icon="zhihu" url="https://www.zhihu.com/people/zhu-xing-da-15"></SocialLink>
          </div>
        </ul>
        <div class="yr-flex-column yr-gap-4">
          <NavLink name="Project" path="project"></NavLink>
          <NavLink name="Note" path="note"></NavLink>
          <NavLink name="About" path="about"></NavLink>
        </div>
      </div>
      <TheFooter />
    </div>
  </div>
</template>

<style scoped>
.home {
  position: relative;
}
ul, li {
  padding: 0;
  margin: 0;
  list-style: none
}
.home__bg {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: -1;
}
.home__bg img {
  display: block;
  height: 100%;
}
.home__pane {
  width: 55%;
  min-height: 100vh;
  padding: 0px 10%;
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
</style>
