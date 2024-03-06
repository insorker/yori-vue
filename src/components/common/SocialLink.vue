<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faBilibili, faZhihu } from '@fortawesome/free-brands-svg-icons'
library.add(faGithub, faBilibili, faZhihu)

defineProps<{
  url: string
  icon?: string
}>()
</script>

<template>
  <a class="link yr-flex-row yr-gap-0" :href="url" target="_blank" rel="noopener">
    <span v-if="icon"><font-awesome-icon :icon="['fab', icon]"/></span>
  </a>
</template>

<style scoped>
a {
  color: var(--yr-c-text-1);
  background: var(--yr-c-gray-1);
  transition: color 0.5s, background-color 0.5s;
}
a:hover {
  color: var(--yr-c-text-inverse-1);
  background-color: var(--yr-c-brand);
}
.link {
  padding: 0.6rem;
  border-radius: 0.6rem;
}
</style>
