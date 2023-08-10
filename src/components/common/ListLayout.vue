<script setup lang="ts">
import AvatarHeader from './AvatarHeader.vue'

defineProps<{
  title: string
}>()
</script>

<template>
  <div class="list">
    <div class="list__spacer"></div>
    <div class="list__header yr-flex-column yr-gap-null">
      <AvatarHeader class="list__header-title" title="note" />
      <div class="list__header-playground"><slot name="playground" /></div>
    </div>
    <slot name="content" class="list__content" />
  </div>
</template>

<style scoped>
.list {
  align-items: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--list-gap);

  --list-gap: var(--yr-font-size-h2);
}
.list__header-playground {
  display: none;
  max-width: 240px;
}
@media (min-width: 1024px) {
  .list {
    align-items: flex-start;
    margin: 3rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: var(--list-gap);

    --list-gap: 5vw;
  }

  .list__spacer {
    display: none;
  }

  .list__header-playground {
    display: block;
    aspect-ratio : 1 / 1;
    width: 100%;
  }

  .list__header-title {
    margin-top: 5vh;
  }
}
</style>
