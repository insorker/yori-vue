<script setup lang="ts">
import AvatarHeader from '@/components/common/AvatarHeader.vue'
import { useMetaPostsTableStore } from '@/stores/MetaPosts'

const { metaPostsTable } = useMetaPostsTableStore()
function sortMeta(meta: Record<number, any>) {
  return [...Object.entries(meta)].sort((a, b) => {
    return parseInt(b[0]) - parseInt(a[0])
  })
}
</script>

<template>
  <div class="posts yr-flex-col-16">
    <AvatarHeader title="posts" />
    <div class="year-container left yr-flex-col-0">
      <div
        v-for="(year_item, idx) in sortMeta(metaPostsTable)"
        :key="idx"
        class="left yr-flex-row-4"
      >
        <div class="yr-h3">{{ String(year_item[0]).padStart(4, ' ') }}</div>
        <div class="month-container left yr-flex-col-4">
          <div
            v-for="(month_item, idx) in sortMeta(year_item[1])"
            :key="idx"
            class="left yr-flex-row-4"
          >
            <div class="yr-h3">{{ String(month_item[0]).padStart(2, '0') }}</div>
            <div class="posts-container left yr-flex-col-0">
              <div v-for="(item, idx) in month_item[1]" :key="idx">
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
  padding: 0.25rem;
}
.month-container > *,
.posts-container > * {
  border-bottom: 1px solid var(--yr-c-divider);
}
.posts-container > *:last-child {
  border-bottom: none;
}
@media (min-width: 1024px) {
  .month-container,
  .posts-container > * {
    padding: 0.5rem;
  }
}
</style>
