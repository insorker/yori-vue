<script setup>
import { ref } from 'vue'
import AppearanceSwich from './components/AppearanceSwitch.vue'

const navLinks = ref([
  { name: 'Home', link: '/home', },
  { name: 'Note', link: '/note', },
  { name: 'Study', link: '/study' },
  { name: 'TIC80', link: '/tic80', },
])
</script>

<template>
  <div class="YRNavBar">
    <router-link class="YRNavLink" to='/Home'>Home</router-link>
    
    <div class="YRNavLinks">
      <router-link class="YRNavLink" v-for="link in navLinks" :to="link.link">{{ link.name }}</router-link>
    </div>
    <AppearanceSwich class="nav-switch"></AppearanceSwich>
  </div>
</template>
