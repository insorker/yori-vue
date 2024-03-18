<script setup lang="ts">
import AvatarHeader from '@/components/common/AvatarHeader.vue'
import ProjectCard from '@/components/project/ProjectCard.vue'
import projects from '../../docs/projects/config.json'
</script>

<template>
  <div class="project yr-flex-col-16">
    <AvatarHeader title="projects" />
    <div class="list">
      <ProjectCard v-for="(item, idx) in projects" :key="idx" :meta="item" />
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
