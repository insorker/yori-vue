<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="list">
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

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--yr-v-gap);

  --yr-v-gap: var(--yr-font-size-h1);
}

@media (min-width: 1024px) {
  .list {
    align-items: flex-start;
    margin: 3rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: var(--yr-v-gap);

    --yr-v-gap: 10vw;
  }

  .list__header {
    margin-top: 25vh;
    align-items: center;
  }
}

.list__header-avatar {
  vertical-align: middle;
  width: var(--yr-font-size-h1);
  height: var(--yr-font-size-h1);
  border-radius: 50%;
}
</style>
