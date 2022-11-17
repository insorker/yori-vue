<script setup>
const props = defineProps({
  title: String,
  brief: String,
})
</script>

<template>
  <div class="YRTitleHeader">
    <h1 class="YRTitleName">{{ props.title }}</h1>
    <p class="YRTitleBrief">{{ props.brief }}</p>
  </div>
</template>
