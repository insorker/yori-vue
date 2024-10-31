<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useTheme } from '@/utils/theme'
import config from '../docs/global_config.json'

useHead(config['head'])
useTheme()
</script>

<template>
  <RouterView />
</template>
