<script setup>
const props = defineProps({
  link: String,
  date: Date,
  title: String,
})
const dateFormat = { year: 'numeric', month: 'long', day: 'numeric' };
</script>

<template>
  <article class="YRCard">
    <router-link class="YRCardLink" :to="props.link">
      <header class="post-card-data">
        <span class="YRCardTitle">{{ props.title }}</span>
        <span class="YRCardMeta">{{ props.date.toLocaleDateString("en-US", dateFormat) }}</span>
      </header>
    </router-link>
  </article>
</template>

<style scoped>
.post-card-data {
  display: flex;
  justify-content: space-between;
}
</style>
