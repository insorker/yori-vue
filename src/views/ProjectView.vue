<script setup lang="ts">
import { ref } from 'vue'
import GhCard from '@/components/common/GhCard.vue'
import AvatarHeader from '@/components/common/AvatarHeader.vue'
import repo from '/docs/project/repo.txt?raw'

const projects = ref(repo.split('\n'))
</script>

<template>
  <div class="project yr-flex-column yr-gap-2">
    <div class="list__spacer"></div>
    <AvatarHeader title="project" />
    <div class="project__content">
      <GhCard v-for="item in projects" :repo="item" />
    </div>
  </div>
</template>

<style scoped>
.project {
  align-items: center;
}
.project__content {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  max-width: 60vw;
}
@media (max-width: 1024px) {
  .project__content {
    flex-direction: column;
    max-width: 90vw;
  }
}
.project__content > * {
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 24px;
  flex: 0 1 auto;
}
</style>