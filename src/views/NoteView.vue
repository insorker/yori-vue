<script setup lang="ts">
import { ref } from 'vue'
import TheList from '@/components/common/TheList.vue'
import PostCard from '@/components/common/PostCard.vue'
import VPRoutes from '~pages'

const cards = ref<any[]>([])

for (let item of <any>VPRoutes) {
  if (item.yaml) {
    cards.value.push(item.yaml)
  }
}
</script>

<template>
  <TheList title="note">
    <template v-slot:content>
      <div class="note__content yr-flex-column yr-gap-1">
        <PostCard to="/" v-for="item in cards" :card="item"/>
      </div>
    </template>
  </TheList>
</template>

<style scoped>
.note__content {
  width: 100%;
  max-width: 800px;
}
</style>
