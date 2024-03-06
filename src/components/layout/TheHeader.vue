<script setup lang="ts">
import HeaderLogo from './HeaderLogo.vue'
import HeaderNav from './HeaderNav.vue'
import HeaderMenu from './HeaderMenu.vue'
import HeaderSwitch from './ HeaderSwitch.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const logoBrief = ref<string>(route.path)
watch(() => route.path, (toParams) => {
  logoBrief.value = toParams
})

const navItems = ref([
  { id: 1, name: 'Project', path: '/project' },
  { id: 2, name: 'Note', path: '/note' },
  { id: 3, name: 'About', path: '/about' },
])
</script>

<template>
  <header class="header">
    <nav class="nav-left">
      <HeaderLogo title="Insorker" :brief="logoBrief" to="/" />
    </nav>
    <nav class="header__nav-right">
      <div class="header__nav-row">
        <ul class="yr-flex-row yr-gap-0">
          <li v-for="item in navItems" :key="item.id"><HeaderNav :name="item.name" :path="item.path" /></li>
          <li class="header__nav-switch">
            <HeaderSwitch />
          </li>
        </ul>
      </div>
      <HeaderMenu class="header__nav-col">
        <ul class="yr-flex-col yr-gap-0">
          <li v-for="item in navItems" :key="item.id"><HeaderNav :name="item.name" :path="item.path" /></li>
          <li class="header__nav-switch">
            <HeaderSwitch />
          </li>
        </ul>
      </HeaderMenu>
    </nav>
    
  </header>
</template>

<style scoped>
ul li {
  display: flex;
}
header {
  display: flex;
  align-items: center;
  padding: 0 1.5rem 0 2.5rem;
  border-bottom: 1px solid var(--yr-c-divider);
  background-color: var(--yr-c-bg-blur);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
.nav-left {
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
  border-bottom: 1px solid var(--yr-c-divider);
}
.header__nav-col ul li:last-child {
  border-bottom: none;
}
.header__nav-witch {
  flex: 0 0 auto;
  align-items: center;
}
@media (max-width: 640px) {
  header {
    padding: 0 1.5rem;
  }
  .header__nav-row {
    display: none;
  }
  .header__nav-col {
    display: block;
  }
}
</style>
