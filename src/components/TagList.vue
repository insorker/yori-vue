<script setup>
const props = defineProps({
  tagList: Array,
  tagTarget: String,
})
function isTagTarget(tag) {
  return tag == props.tagTarget
}
</script>

<template>
  <div class="tag-list">
    <div class="tag-item" v-for="tag in props.tagList">
      <router-link class="tag-target" :tag-target="isTagTarget(tag)" :to="`/study/${tag}`">{{ tag }}</router-link>
    </div>
  </div>
  <div class="divider">Total: {{ props.tagList.length }}</div>
</template>

<style scoped>
.tag-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.tag-item {
  padding: 0.5rem;
}
.divider {
  font-size: 8px;
  color: var(--yr-c-text-pale);
  padding: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid var(--yr-c-divider);
}
a[tag-target=true] {
  color: var(--yr-c-text-inverse);
  background-color: var(--yr-c-brand);
  border-radius: 0.25rem;
  box-shadow: #00000029 0 2px 5px, #0000001f 0 2px 10px;
}
a[tag-target=true]:hover,
a[tag-target=true].router-link-active,
a[tag-target=true].router-link-exact-active {
  cursor: pointer;
}
a[tag-target=true]:hover {
  color: var(--yr-c-text);
}

a {
  padding: 0.5rem;
  color: var(--yr-c-text);
  white-space: nowrap;
  text-decoration:none;
}
a:hover,
a.router-link-active,
a.router-link-exact-active {
  cursor: pointer;
}
a:hover {
  color: var(--yr-c-brand);
}
</style>