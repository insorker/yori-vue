<script setup lang="ts">
import SocialLink from '@/components/common/SocialLink.vue'

defineProps<{
  title: string
  profile: string[]
  social_link: Record<string, string>
}>()
</script>

<template>
  <div class="hero yr-flex-col-12">
    <h1 class="title yr-h1">
      <span>{{ title }}</span>
    </h1>
    <ul class="profile yr-flex-col-4">
      <li v-for="(value, idx) in profile" :key="idx">
        <span>{{ value }}</span>
      </li>
      <li class="social-link yr-flex-row-4">
        <SocialLink v-for="(value, key, idx) in social_link" :key="idx" :icon="key" :link="value" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.hero {
  text-align: center;
}
.title {
  margin-bottom: 0px;
}
.profile {
  color: var(--yr-c-text-2);
}
.social-link {
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
