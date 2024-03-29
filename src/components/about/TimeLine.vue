<script lang="ts" setup>
interface TimeLineItem {
  time: string
  title: string
  brief: string
  more: string
}

defineProps<{
  items: TimeLineItem[]
}>()
</script>

<template>
  <div>
    <ul class="time-line">
      <li v-for="(item, idx) in items" :key="idx" class="time-line-item">
        <div class="time-line-dot"></div>
        <div class="content yr-flex-col-0">
          <div class="yr-h3 time">{{ item.time }}</div>
          <div class="yr-h2 title">{{ item.title }}</div>
          <div class="yr-h3 brief">{{ item.brief }}</div>
          <div class="yr-h3 more">{{ item.more }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.time-line {
  max-width: 32rem;
  margin: 0 auto;
}
.time-line-item {
  position: relative;
  padding: 1.5rem 0 1.5rem 2rem;
  align-items: center;
  border-left: 2px solid var(--yr-c-divider);
}
.time-line-dot {
  position: absolute;
  top: 50%;
  left: -5px;
  width: 8px;
  height: 8px;
  background: var(--yr-c-bg-inverse);
  border-radius: 50%;
}
.time,
.brief,
.more {
  font-weight: 400;
}
.title {
  font-weight: 600;
}
.more {
  color: var(--yr-c-text-2);
}
</style>
