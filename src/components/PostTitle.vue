<script setup>
const props = defineProps({
  title: String,
  brief: String,
  date: String,
})
</script>

<template>
  <div class="post-header">
    <h1 class="post-title">{{ props.title }}</h1>
    <p class="post-date">{{ props.date }}</p>
  </div>
</template>

<style scoped>
.post-header {
  margin: var(--yr-nav-height) auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: left;
}
.post-title {
  margin-block-end: 0em;
  color: var(--yr-c-text);
}
.post-brief {
  color: var(--yr-c-text-pale);
}
</style>
