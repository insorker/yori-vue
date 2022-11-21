<script setup>
const props = defineProps({
  link: String,
  tags: Array,
  date: Date,
  title: String,
  brief: String,
})
const dateFormat = { year: 'numeric', month: 'long', day: 'numeric' };
</script>

<template>
  <article class="YRCard post-card">
    <router-link class="YRCardLink" :to="props.link">
      <div class="post-card-meta">
        <span class="YRCardTags">
          <span class="YRCardMeta" v-for="tag in props.tags">{{ tag }}</span>
        </span>
        <span class="YRCardMeta">{{ props.date.toLocaleDateString("en-US", dateFormat) }}</span>
      </div>
      <h1 class="YRCardTitle">{{ props.title }}</h1>
      <section class="YRCardBrief">{{ props.brief }}</section>
    </router-link>
  </article>
</template>

<style scoped>
.post-card {
  margin: 4rem auto;
}
.post-card-meta {
  display: flex;
  justify-content: space-between;
}
</style>
