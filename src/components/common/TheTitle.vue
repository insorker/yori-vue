<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="yr-flex-row-4">
    <h1 class="yr-h1">{{ title }}</h1>
  </div>
</template>
