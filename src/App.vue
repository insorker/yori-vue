<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useHead } from '@unhead/vue'
import config from '../docs/home/config.json'

useHead({
  title: config['head'].title,
  meta: [
    {
      name: 'description',
      content: config['head'].description
    }
  ]
})
</script>

<template>
  <RouterView />
</template>
