<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="list yr-flex-column yr-gap-1">
    <div class="list__spacer"></div>
    <div class="list__header yr-flex-row yr-gap-2">
      <img src="/avatar.png" alt="avatar" class="list__header-avatar">
      <h1 class="yr-fs-1">{{ title }}</h1>
    </div>
    <slot name="content"/>
  </div>
</template>

<style scoped>
.list {
  align-items: center;
}
.list__header-avatar {
  vertical-align: middle;
  width: var(--yr-font-size-h1);
  height: var(--yr-font-size-h1);
  border-radius: 50%;
}
</style>
