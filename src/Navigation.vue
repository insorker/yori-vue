<script setup>
import { ref } from 'vue'
const navItems = ref([
  { name: 'Home', link: '/Home', }, { name: 'TIC80', link: '/TIC80', },
])
</script>

<template>
  <div class="nav-bar">
    <router-link class="nav-logo" to='/Home'>Home</router-link>
    
    <div class="nav-links">
      <router-link v-for="item in navItems" :to='item.link'>{{ item.name }}</router-link>
    </div>
  </div>
</template>

<style scoped>
.nav-bar {
  position: relative;
  font-size: 16px;
  height: var(--yr-nav-height);
  border-bottom: 1px solid #4034542f;
  background-color: #ffffffb3;
  padding: 0 10%;
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
}
a {
  align-items: center;
  padding: 0 12px;
  color: #403454;
  white-space: nowrap;
  text-decoration:none;
}
a:hover {
  color: #f58f54;
  transition: color .25s;
}
a:hover,
a.router-link-active,
a.router-link-exact-active {
   cursor: pointer;
 }
</style>
