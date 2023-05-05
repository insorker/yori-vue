<script lang="ts" setup>
defineProps<{
  repo: string
}>()
</script>

<template>
  <a :href="`https://github.com/${repo}`">
    <img :src="`https://gh-card.dev/repos/${repo}.svg`" />
  </a>
</template>

<style scoped>
img {
  display: block;
  max-width: 100%;
}
</style>