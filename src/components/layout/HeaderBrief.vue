<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const brief = ref<string>(route.path)
watch(
  () => route.path,
  (toParams) => {
    brief.value = toParams
  }
)
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