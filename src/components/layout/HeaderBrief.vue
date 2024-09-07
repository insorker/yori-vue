<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const brief = computed(() => decodeURI(route.path))
</script>

<template>
  <div class="brief">{{ '~' + brief }}</div>
</template>

<style scoped>
.brief {
  padding: 0.75rem;
  color: var(--yr-c-text-2);
}
@media (max-width: 1024px) {
  .brief {
    display: none;
  }
}
</style>