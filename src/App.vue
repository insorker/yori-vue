<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { switchTheme } from '@/utils/theme'
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

switchTheme()
</script>

<template>
  <RouterView />
</template>
