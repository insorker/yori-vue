<script setup>
const props = defineProps({
  link: String,
  date: Date,
  title: String,
})
const dateFormat = { year: 'numeric', month: 'long', day: 'numeric' };
</script>

<template>
  <article class="post-card">
    <div>
      <router-link class="post-card-link" :to="props.link">
        <header class="post-card-header">
          <div class="post-card-title">{{ props.title }}</div>
          <div class="post-card-date">{{ props.date.toLocaleDateString("en-US", dateFormat) }}</div>
        </header>
      </router-link>
    </div>
  </article>
</template>

<style scoped>
.post-card-link {
  text-decoration: none;
}
.post-card-header {
  display: flex;
  justify-content: space-between;
}
.post-card-title {
  color: var(--yr-c-text);
}
.post-card-title:hover {
  color: var(--yr-c-brand);
  /* transition: color .25s; */
}
.post-card-date {
  color: var(--yr-c-text-pale);
}
a:hover,
a.router-link-active,
a.router-link-exact-active {
  cursor: pointer;
}
@media (max-width: 767px) {
  .post-card-date {
    display: none;
  }
}
</style>
