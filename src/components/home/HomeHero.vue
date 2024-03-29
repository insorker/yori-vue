<script setup lang="ts">
import SocialLink from '@/components/common/SocialLink.vue'

defineProps<{
  title: string
  profile: string[]
  social_link: Record<string, string>[]
}>()
</script>

<template>
  <div class="hero yr-flex-row-8">
    <img src="/avatar.png" alt="avator" />
    <div class="content yr-flex-col-4">
      <div class="title">{{ title }}</div>
      <div class="profile yr-flex-col-2">
        <div v-for="(item, idx) in profile" :key="idx">{{ item }}</div>
      </div>
      <div class="social-link yr-flex-row-4">
        <SocialLink
          v-for="(item, idx) in social_link"
          :key="idx"
          :icon="item.icon"
          :link="item.link"
          :color="item.color"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  text-align: left;
  font-size: var(--avator-size);
}
img {
  vertical-align: middle;
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
}
.content {
  justify-content: left;
}
.title {
  font-size: var(--yr-fs-10);
  line-height: var(--yr-fs-10);
  font-weight: bold;
}
.profile {
  color: var(--yr-c-text-2);
}
.social-link {
  justify-content: left;
}
</style>
