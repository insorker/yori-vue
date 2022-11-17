<script setup>
import Navigation from './Navigation.vue';
</script>

<template>
  <header class="YRAppHeader">
    <Navigation></Navigation>
  </header>
  <div class="YRAppContent">
    <router-view></router-view>
  </div>
</template>
