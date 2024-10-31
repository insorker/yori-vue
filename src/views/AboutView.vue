<script lang="ts" setup>
import { useHead } from '@unhead/vue'
import TheTitle from '@/components/common/TheTitle.vue'
import TimeLine from '@/components/about/TimeLine.vue'
import config from '../../docs/about/config.json'

useHead({
  title: config['head'].title
})
</script>

<template>
  <div class="about yr-flex-col-16">
    <TheTitle :title="config['head'].title" />
    <TimeLine :items="config['about']"></TimeLine>
  </div>
</template>

<style scoped>
.about {
  padding: 4rem 0rem 0rem;
}
</style>
