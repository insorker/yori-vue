<script setup lang="ts">
import HeaderNav from './HeaderNav.vue'
import HeaderMenu from './HeaderMenu.vue'
import { ref } from 'vue'

const navItems = ref([
  { name: 'Project', path: '/project' },
  { name: 'Note', path: '/note' },
  { name: 'About', path: '/about' },
])
</script>

<template>
  <header class="header">
    <nav class="header__nav-left">
      <HeaderNav name="Insorker" path="/" />
    </nav>
    <nav class="header__nav-right">
      <div class="header__nav-row">
        <ul class="yr-flex-row yr-gap-null">
          <li v-for="item in navItems"><HeaderNav :name="item.name" :path="item.path" /></li>
        </ul>
      </div>
      
      <HeaderMenu class="header__nav-col">
        <ul class="yr-flex-column yr-gap-null">
          <li v-for="item in navItems"><HeaderNav :name="item.name" :path="item.path" /></li>
        </ul>
      </HeaderMenu>
    </nav>
  </header>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul li {
  display: flex;
}
.header {
  display: flex;
  align-items: center;
  padding: 0 var(--yr-padding);
  border-bottom: 1px solid var(--color-border);
}
.header__nav-left {
  flex: 1 0 auto;
  /* flex 需要子元素去撑高度，如果 flex 的子元素没有高度，那么他就没去找子元素是 flex 的高度。所以这里添加了 display: flex */
  display: flex;
}
.header__nav-right {
  flex: 0 0 auto;
  display: flex;
}
.header__nav-col {
  display: none;
}
.header__nav-col ul li {
  border-bottom: 1px solid var(--color-border);
}
.header__nav-col ul li:last-child {
  border-bottom: none;
}
@media (max-width: 640px) {
  .header__nav-row {
    display: none;
  }
  .header__nav-col {
    display: block;
  }
}
</style>
