<script lang="ts" setup>
import { useHead } from '@unhead/vue'
import TheTitle from '@/components/common/TheTitle.vue'
import ListView from '@/views/ListView.vue'
import { useRoute } from 'vue-router'
import { useMetaSeriesStore } from '@/stores/MetaPosts'
import config from '../../docs/series/config.json'

const route = useRoute()
const { metaSeries } = useMetaSeriesStore()

useHead({
  title: config['head'].title
})
</script>

<template>
  <div v-if="route.params.name == '' || !(route.params.name as string in metaSeries)" class="series yr-flex-col-16">
    <TheTitle :title="config['head'].title" />
    <div class="container">
      <RouterLink v-for="(_, series) in metaSeries" :key="series" :to="'/series/' + series" ><div>{{ series }}</div></RouterLink>
    </div>
  </div>
  <div v-else class="series yr-flex-col-16">
    <TheTitle :title="config['head'].title + ' : ' + route.params.name" />
    <ListView :metaPostsTable="metaSeries[route.params.name as string]" />
  </div>
</template>

<style scoped>
.series {
  padding: 4rem 0rem 0rem;
}
.container {
  display: flex;
  justify-content: center;
  font-weight: bold;
}
.container a {
  margin: 0 1rem;
  padding: 0.75rem;
  background-color: var(--yr-c-bg-soft);
  border-radius: 0.75rem;
}
</style>
