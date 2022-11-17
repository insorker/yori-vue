<script setup>
const props = defineProps({
  title: String,
  brief: String,
  date: Date,
})
const dateFormat = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
</script>

<template>
  <div class="YRTitleHeader">
    <h1 class="YRTitleName">{{ props.title }}</h1>
    <p class="YRTitleBrief">{{ props.date.toLocaleDateString("en-US", dateFormat) }}</p>
  </div>
</template>
