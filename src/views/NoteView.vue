<script setup lang="ts">
import TheList from '@/components/common/TheList.vue'
import PostCard from '@/components/common/PostCard.vue'
import VPRoutes from '~pages'

VPRoutes.sort((a: any, b: any): number => {
  const ta = new Date(b.meta.date).getTime()
  const tb = new Date(a.meta.date).getTime()
  return ta - tb
})
</script>

<template>
  <TheList title="note">
    <template v-slot:content>
      <div class="note__content yr-flex-column yr-gap-1">
        <PostCard v-for="item in VPRoutes" :to="item.path" :meta="item.meta"/>
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
