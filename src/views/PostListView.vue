<script setup lang="ts">
import ListView from '@/views/ListView.vue'
import { useMetaPostsTableStore } from '@/stores/MetaPosts'

const { metaPostsTable } = useMetaPostsTableStore()
</script>

<template>
  <ListView title="posts" :metaPostsTable="metaPostsTable" />
</template>
