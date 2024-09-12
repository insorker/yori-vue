<script lang="ts" setup>
import AvatarHeader from '@/components/common/AvatarHeader.vue'
import ListView from '@/views/ListView.vue'
import { useRoute } from 'vue-router'
import { useMetaSeriesStore } from '@/stores/MetaPosts'

const route = useRoute()
const { metaSeries } = useMetaSeriesStore()
</script>

<template>
  <div v-if="route.params.name == '' || !(route.params.name as string in metaSeries)" class="series yr-flex-col-16">
    <AvatarHeader title="series" />
    <div class="container">
      <RouterLink v-for="(_, series) in metaSeries" :key="series" :to="'series/' + series" ><div>{{ series }}</div></RouterLink>
    </div>
  </div>
  <ListView v-else :title="'series : ' + route.params.name" :metaPostsTable="metaSeries[route.params.name as string]" />
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
