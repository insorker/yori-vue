<script setup lang="ts">
import HeaderLogo from './HeaderLogo.vue'
import HeaderNav from './HeaderNav.vue'
import HeaderMenu from './HeaderMenu.vue'
import HeaderSwitch from './HeaderSwitch.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const logoBrief = ref<string>(route.path)
watch(
  () => route.path,
  (toParams) => {
    logoBrief.value = toParams
  }
)

const navItems = ref([
  { id: 1, name: 'Projects', path: '/projects' },
  { id: 2, name: 'Posts', path: '/posts' },
  { id: 3, name: 'About', path: '/about' }
])
</script>

<template>
  <header class="header yr-h3">
    <nav class="nav-left">
      <HeaderLogo title="Insorker" :brief="logoBrief" to="/" />
    </nav>
    <nav class="nav-right">
      <ul class="nav-right-row yr-flex-row-0">
        <li v-for="item in navItems" :key="item.id">
          <HeaderNav :name="item.name" :path="item.path" />
        </li>
        <li>
          <HeaderSwitch />
        </li>
      </ul>
      <HeaderMenu class="nav-right-col">
        <ul class="yr-flex-col-0">
          <li v-for="item in navItems" :key="item.id">
            <HeaderNav :name="item.name" :path="item.path" />
          </li>
          <li>
            <HeaderSwitch />
          </li>
        </ul>
      </HeaderMenu>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  border-bottom: 1px solid var(--yr-c-divider);
  background-color: var(--yr-c-bg-blur);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  z-index: 10;
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
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav-right-col ul li {
  padding: 0.5rem;
  border-bottom: 1px solid var(--yr-c-divider);
}
.nav-right-col ul li:last-child {
  border-bottom: none;
}
@media (min-width: 640px) {
  header {
    padding: 0 1.5rem 0 2.5rem;
  }
  .nav-right-row {
    display: flex;
  }
  .nav-right-col {
    display: none;
  }
}
</style>
