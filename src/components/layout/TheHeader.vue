<script setup lang="ts">
import HeaderNav from './HeaderNav.vue'
import HeaderBrief from './HeaderBrief.vue'
import HeaderSwitch from './HeaderSwitch.vue'
import HeaderMenu from './HeaderMenu.vue'
import { ref } from 'vue'

const navItems = ref([
  { id: 1, name: 'Projects', path: '/projects' },
  { id: 2, name: 'Posts', path: '/posts' },
  { id: 4, name: 'Series', path: '/series' },
  { id: 5, name: 'About', path: '/about' }
])
</script>

<template>
  <header class="header yr-flex-row-0">
    <div class="container">
      <nav class="nav-left">
        <HeaderNav name="insorker" path="/" />
        <HeaderBrief />
      </nav>
      <nav class="nav-right">
        <div class="nav-right-row yr-flex-row-0">
          <HeaderNav v-for="item in navItems" :key="item.id" :name="item.name" :path="item.path" />
          <HeaderSwitch />
        </div>
        <HeaderMenu class="nav-right-col">
          <div class="yr-flex-col-0" >
            <HeaderNav v-for="item in navItems" :key="item.id" :name="item.name" :path="item.path" />
            <HeaderSwitch />
          </div>
        </HeaderMenu>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  align-items: center;
  background-color: var(--yr-c-bg);
  border-bottom: 1px solid var(--yr-c-divider);
  z-index: 10;
}
.container {
  flex: 1 0 auto;
  display: flex;
}
.nav-left {
  flex: 1 0 auto;
  /* flex 需要子元素去撑高度，如果 flex 的子元素没有高度，那么他就没去找子元素是 flex 的高度。所以这里添加了 display: flex */
  display: flex;
}
.nav-right {
  flex: 0 0 auto;
  display: flex;
}
.nav-right-row {
  display: none;
  align-items: center;
}
.nav-right-col a:not(:last-child) {
  padding: 0.5rem;
  border-bottom: 1px solid var(--yr-c-divider);
}
@media (min-width: 640px) {
  .container {
    max-width: var(--yr-head-width);
  }
  .nav-right-row {
    display: flex;
  }
  .nav-right-col {
    display: none;
  }
}
</style>
