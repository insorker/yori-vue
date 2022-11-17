<script setup>
const props = defineProps({
  title: String,
  brief: String,
  date: Date,
})
const dateFormat = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
</script>

<template>
  <div class="post-header">
    <h1 class="post-title">{{ props.title }}</h1>
    <p class="post-date">{{ props.date.toLocaleDateString("en-US", dateFormat) }}</p>
  </div>
</template>

<style scoped>
.post-header {
  margin: var(--yr-nav-height) auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  word-wrap:break-word;
}
.post-title {
  font-size: var(--yr-c-title-size);
  margin-block-start: 0em;
  margin-block-end: 0em;
  color: var(--yr-c-text);
}
.post-date {
  color: var(--yr-c-text-pale);
}
.post-brief {
  color: var(--yr-c-text-pale);
}
</style>
