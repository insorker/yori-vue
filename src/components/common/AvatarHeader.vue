<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="avatar yr-flex-row-4">
    <img src="/avatar.webp" alt="avatar" />
    <h1 class="yr-h1">{{ title }}</h1>
  </div>
</template>

<style scoped>
.avatar {
  align-items: center;
  font-size: var(--avator-size);
}
img {
  vertical-align: middle;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}
</style>
