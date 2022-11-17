<script setup>
import { ref } from 'vue'
import AppearanceSwich from './components/AppearanceSwitch.vue'

const navItems = ref([
  { name: 'Home', link: '/home', },
  { name: 'Note', link: '/note', },
  { name: 'Study', link: '/study' },
  { name: 'TIC80', link: '/tic80', },
])
</script>

<template>
  <div class="nav-bar">
    <router-link class="nav-logo" to='/Home'>Home</router-link>
    
    <div class="nav-links">
      <router-link v-for="item in navItems" :to="item.link">{{ item.name }}</router-link>
    </div>
    <AppearanceSwich class="nav-switch"></AppearanceSwich>
  </div>
</template>

<style scoped>
.nav-bar {
  position: relative;
  font-size: 16px;
  height: var(--yr-nav-height);
  border-bottom: 1px solid var(--yr-c-divider);
  background-color: var(--yr-c-bg-opaque);
  padding: 0 15%;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.nav-logo, .nav-links {
  padding: 15px 0px;
}
.nav-links {
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
}
a {
  padding: 0 12px;
  color: var(--yr-c-text);
  white-space: nowrap;
  text-decoration:none;
}
a:hover {
  color: var(--yr-c-brand);
  /* transition: color .25s; */
}
a:hover,
a.router-link-active,
a.router-link-exact-active {
  cursor: pointer;
}
</style>
