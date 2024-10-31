<script setup lang="ts">
import { useHead } from '@unhead/vue'
import TheTitle from '@/components/common/TheTitle.vue'
import ListView from '@/views/ListView.vue'
import { useMetaPostsTableStore } from '@/stores/MetaPosts'
import config from '../../docs/posts/config.json'

const { metaPostsTable } = useMetaPostsTableStore()

useHead({
  title: config['head'].title
})
</script>

<template>
  <div class="postlist yr-flex-col-16">
    <TheTitle :title="config['head'].title" />
    <ListView :metaPostsTable="metaPostsTable" />
  </div>

</template>

<style lang="css" scoped>
.postlist {
  padding: 4rem 0rem 0rem;
}
</style>
