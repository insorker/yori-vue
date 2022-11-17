<script setup>
const props = defineProps({
  link: String,
  tag: String,
  date: Date,
  title: String,
  brief: String,
})
const dateFormat = { year: 'numeric', month: 'long', day: 'numeric' };
</script>

<template>
  <article>
    <router-link class="YRCardLink" :to="props.link">
      <div class="YRCardMeta post-card-meta">
        <span class="YRCardMeta">{{ props.tag }}</span>
        <span class="YRCardMeta">{{ props.date.toLocaleDateString("en-US", dateFormat) }}</span>
      </div>
      <h1 class="YRCardTitle">{{ props.title }}</h1>
      <section class="YRCardBrief">{{ props.brief }}</section>
    </router-link>
  </article>
</template>

<style scoped>
.post-card-meta {
  display: flex;
  justify-content: space-between;
}
</style>
