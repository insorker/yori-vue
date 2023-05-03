<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="list yr-flex-column yr-gap-1">
    <div class="list__spacer"></div>
    <h1 class="list__title yr-fs-1">{{ title }}</h1>
    <slot name="content" class="list__content" />
  </div>
</template>

<style scoped>
.list {
  align-items: center;
}
</style>
