<script setup>
import { ref } from 'vue'
const emit = defineEmits(['tagChange'])
const props = defineProps({
  tagList: Set,
  tagDefault: String,
})
const tagSelected = ref(props.tagDefault)

function tagSelect(tag) {
  if (tagSelected.value != tag) {
    emit('tagChange', tag)
    tagSelected.value = tag
  }
}
function isTagSelected(tag) {
  return tag == tagSelected.value
}
</script>

<template>
  <div class="tag-list">
    <div class="tag-item" v-for="tag in tagList" :select="isTagSelected(tag)" @click="tagSelect(tag)">
      {{ tag }}
    </div>
  </div>
  <div class="tag-list-divider">Total: {{ props.tagList.size - 1 }}</div>
</template>

<style scoped>
.tag-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.tag-item {
  margin: 0.5rem;
  padding: 0.5rem;
  color: var(--yr-c-text);
  white-space: nowrap;
  text-decoration:none;
}
.tag-item:hover {
  color: var(--yr-c-brand);
}
.tag-item:hover,
.tag-item.router-link-active,
.tag-item.router-link-exact-active {
  cursor: pointer;
}
.tag-item[select=true] {
  color: var(--yr-c-text-inverse);
  background-color: var(--yr-c-brand);
  border-radius: 0.25rem;
  box-shadow: #00000029 0 2px 5px, #0000001f 0 2px 10px;
}
.tag-item[select=true]:hover {
  color: var(--yr-c-text);
}
.tag-list-divider {
  font-size: 0.1rem;
  color: var(--yr-c-text-pale);
  padding: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--yr-c-divider);
}

</style>