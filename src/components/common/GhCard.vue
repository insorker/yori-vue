<script lang="ts" setup>
import { useTheme } from '@/utils/theme'

const { themeState } = useTheme()
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
a {
  z-index: -1;
}
img {
  display: block;
  max-width: 100%;
  filter: invert(v-bind('themeState == false ? 0 : 1'));
}
</style>