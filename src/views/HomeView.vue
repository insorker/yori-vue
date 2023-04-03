<script setup lang="ts">
import SocialLink from '@/components/common/SocialLink.vue';
import TheFooter from '@/components/common/TheFooter.vue';
import NavLink from '@/components/home/NavLink.vue';
import { ref } from 'vue';

let id = 0;

const title = ref("Insorker")
const brief = ref([
  { id: id++, text: "Hi, this is insorker, a student who likes programming." },
  { id: id++, text: "Besides of programming, I like go, origami, pixel art, harmonica, whistle...Just for enjoyment and not professional. Maybe we can play together." },
  { id: id++, text: "Want to know more about me? Follow the links right below." },
])

</script>

<template>
  <div style="position:relative;overflow:hidden;height:100vh;">
    <img class="bg-img" src="/default-bg-img.png">
    <div class="yr-flex-column home-pane">
      <div class="yr-flex-column yr-gap-1">
        <h1 class="yr-fs-1">{{ title }}</h1>
        <ul class="brief yr-flex-column yr-gap-3">
          <li v-for="sentence in brief" :key="sentence.id">
            {{ sentence.text }}
          </li>
          <div>
            <SocialLink name="github"></SocialLink>
          </div>
        </ul>
        <div class="yr-flex-column yr-gap-2">
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
ul, li {
  padding: 0;
  margin: 0;
  list-style: none
}
.bg-img {
  position: absolute;
  top: 0px;
  left: 200px;
}
.home-pane {
  justify-content: space-around;
  width: 40%;
  min-height: 100vh;
  padding: 0px 120px;
  background: var(--color-background);
  box-shadow: 16px 0px 24px 0px rgba(0, 0, 0, 25%);
  position: absolute;
  top: 0px;
  left: 0px;
}
.brief {
  color: var(--color-text-soft);
  list-style: none;
}
</style>
