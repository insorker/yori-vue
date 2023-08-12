<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="avatar yr-flex-row yr-gap-2">
    <img class="avatar__img" src="/avatar.png" alt="avatar" />
    <h1 class="avatar__name">{{ title }}</h1>
  </div>
</template>

<style scoped>
.avatar {
  align-items: center;
}
.avatar__img {
  vertical-align: middle;
  width: var(--yr-fs-1);
  height: var(--yr-fs-1);
  border-radius: 50%;
}
.avatar__name {
  font-size: var(--yr-fs-1);
}
</style>