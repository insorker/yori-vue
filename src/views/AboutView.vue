<script lang="ts" setup>
import AvatarHeader from '@/components/common/AvatarHeader.vue'
import TimeLine from '@/components/about/TimeLine.vue'
import config from '../../docs/about/config.json'
</script>

<template>
  <div class="about yr-flex-col-16">
    <AvatarHeader title="about" />
    <TimeLine :items="config"></TimeLine>
  </div>
</template>

<style scoped>
.about {
  padding: 4rem 0rem 0rem;
}
</style>
