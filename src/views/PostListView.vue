<script setup lang="ts">
import AvatarHeader from '@/components/common/AvatarHeader.vue'
import { useMetaPostsTableStore } from '@/stores/MetaPosts'

const { metaPostsTable } = useMetaPostsTableStore()
</script>

<template>
  <div class="posts yr-flex-col-16">
    <AvatarHeader title="posts" />
    <div class="year-container left yr-flex-col-0">
      <div v-for="(i, year, idx) in metaPostsTable" :key="idx" class="left yr-flex-row-4">
        <div class="yr-h2">{{ String(-year).padStart(4, ' ') }}</div>
        <div class="month-container left yr-flex-col-4">
          <div v-for="(j, month, idx) in i" :key="idx" class="left yr-flex-row-4">
            <div class="yr-h2">{{ String(-month).padStart(2, '0') }}</div>
            <div class="posts-container left yr-flex-col-0">
              <div v-for="(item, idx) in j" :key="idx">
                <RouterLink class="yr-h2" :to="item.path">{{ item.meta.title }}</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.posts {
  padding: 4rem 0rem 0rem;
}
.left {
  justify-content: left;
}
.month-container,
.posts-container {
  flex: 1 1 auto;
}
.month-container,
.posts-container > * {
  padding: 0.5rem;
}
.month-container > *,
.posts-container > * {
  border-bottom: 1px solid var(--yr-c-divider);
}
.posts-container > *:last-child {
  border-bottom: none;
}
</style>
