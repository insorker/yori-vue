<script setup lang="ts">
import NotePlayground from '../note/NotePlayground.vue';

defineProps<{
  title: string
}>()
</script>

<template>
  <div class="list">
    <div class="list__spacer"></div>
    <div class="list__header yr-flex-column yr-gap-null">
      <div class="list__title yr-flex-row yr-gap-2">
        <img src="/avatar.png" alt="avatar" class="list__header-avatar">
        <h1 class="yr-fs-1">{{ title }}</h1>
      </div>
      <div class="list__playground">
        <NotePlayground />
      </div>
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
  gap: var(--yr-v-gap);

  --yr-v-gap: var(--yr-font-size-h1);
}

.list__title {
  align-items: center;
}

.list__playground {
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
    gap: var(--yr-v-gap);

    --yr-v-gap: 10vw;
  }

  .list__spacer {
    display: none;
  }

  .list__playground {
    display: block;
    aspect-ratio : 1 / 1;
    width: 100%;
  }

  .list__title {
    margin-top: 5vh;
  }
}

.list__header-avatar {
  vertical-align: middle;
  width: var(--yr-font-size-h1);
  height: var(--yr-font-size-h1);
  border-radius: 50%;
}
</style>
