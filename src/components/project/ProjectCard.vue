<script setup lang="ts">
interface MetaProject {
  name: string
  desc: string
  link: string
  icon: string
}

defineProps<{
  meta: MetaProject
}>()
</script>

<template>
  <a class="card yr-flex-row-3" :href="meta.link">
    <IconSets :icon="meta.icon" class="icon" />
    <div class="yr-flex-col-1">
      <div class="name">{{ meta.name }}</div>
      <div class="desc">{{ meta.desc }}</div>
    </div>
  </a>
</template>

<style scoped>
.card {
  padding: 1rem;
  background-color: var(--yr-c-bg-soft);
  justify-content: left;
  align-items: center;
  border-radius: 0.75rem;
}
.icon {
  flex: 0 0 auto;
  font-size: var(--yr-fs-12);
}
.name {
  font-weight: bold;
}
.desc {
  color: var(--yr-c-text-2);
}
</style>
