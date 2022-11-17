<script setup>
const props = defineProps({
  title: String,
  brief: String,
})
</script>

<template>
  <div class="site-header">
    <h1 class="site-title">{{ props.title }}</h1>
    <p class="site-brief">{{ props.brief }}</p>
  </div>
</template>

<style scoped>
.site-header {
  margin: var(--yr-nav-height) auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  word-wrap:break-word;
}
.site-title {
  font-size: var(--yr-c-title-size);
  margin-block-start: 0em;
  margin-block-end: 0em;
  color: var(--yr-c-text);
}
.site-brief {
  color: var(--yr-c-text-pale);
}
</style>
