<script lang="ts" setup>
import { useTheme } from '@/utils/theme'

const { themeState } = useTheme()
defineProps<{
  repo: string
}>()
</script>

<template>
  <a :href="`https://github.com/${repo}`">
    <img :src="`https://gh-card.dev/repos/${repo}.svg`" :class="{ 'img-dark': themeState }"/>
  </a>
</template>

<style scoped>
a {
  z-index: -1;
}
img {
  display: block;
  max-width: 100%;
  filter: invert(0);
}
.img-dark {
  filter: invert(1);
}
</style>