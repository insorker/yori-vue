<script setup lang="ts">
import { ref } from 'vue';
import TheList from '@/components/common/TheList.vue'
import PostCard from '@/components/common/PostCard.vue'

const card = ref({
  date: 'Apr 1, 2023',
  title: 'Hello World',
  brief: 'Say hello'
})
</script>

<template>
  <TheList title="note">
    <template v-slot:content>
      <div class="note__content yr-flex-column yr-gap-1">
        <PostCard to="/" :card="card"/>
        <PostCard to="/" :card="card"/>
        <PostCard to="/" :card="card"/>
        <PostCard to="/" :card="card"/>
        <PostCard to="/" :card="card"/>
        <PostCard to="/" :card="card"/>
        <PostCard to="/" :card="card"/>
        <PostCard to="/" :card="card"/>
      </div>
    </template>
  </TheList>
</template>

<style scoped>
.note {

}
.note__content {
  width: 100%;
  max-width: 800px;
}
</style>
