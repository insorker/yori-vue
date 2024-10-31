<script setup lang="ts">
import { useHead } from '@unhead/vue'
import TheTitle from '@/components/common/TheTitle.vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import config from '../../docs/projects/config.json'

useHead({
  title: config['head'].title
})
</script>

<template>
  <div class="project yr-flex-col-16">
    <TheTitle :title="config['head'].title" />
    <div class="list">
      <ProjectCard v-for="(item, idx) in config.projects" :key="idx" :meta="item" />
    </div>
  </div>
</template>

<style scoped>
.project {
  padding: 4rem 0rem 0rem;
}
.list {
  flex: 1;
  display: grid;
  grid-gap: 1rem;
  gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
@media (min-width: 1024px) {
  .list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
