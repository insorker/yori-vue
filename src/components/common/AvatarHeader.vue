<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="avatar-header yr-flex-row yr-gap-2">
    <img src="/avatar.png" alt="avatar" class="avatar-header__avatar">
    <h1 class="yr-fs-1">{{ title }}</h1>
  </div>
</template>

<style scoped>
.avatar-header {
  align-items: center;
}
.avatar-header__avatar {
  vertical-align: middle;
  width: var(--yr-font-size-h1);
  height: var(--yr-font-size-h1);
  border-radius: 50%;
}
</style>