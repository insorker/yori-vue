<script setup>
const props = defineProps({
  link: String,
  category: String,
  title: String,
  excerpt: String,
})
</script>

<template>
  <article class="post-card">
    <div>
      <router-link class="post-card-link" :to="props.link">
        <header class="post-card-header">
          <div class="post-card-category">{{ category }}</div>
          <h2 class="post-card-title">{{ title }}</h2>
        </header>
        <section class="post-card-excerpt">{{ excerpt }}</section>
      </router-link>
    </div>
  </article>
</template>

<style scoped>
.post-card-link {
  text-decoration: none;
}
.post-card-category, .post-card-excerpt {
  color: var(--yr-c-text-pale);
}
.post-card-title {
  margin-block-start: 0;
  margin-block-end: 0.2em;
  color: var(--yr-c-text);
}
.post-card-title:hover {
  color: var(--yr-c-brand);
  /* transition: color .25s; */
}
a:hover,
a.router-link-active,
a.router-link-exact-active {
  cursor: pointer;
}
</style>
