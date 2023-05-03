<script setup lang="ts">
import HeaderNav from './HeaderNav.vue';
</script>

<template>
  <header class="header">
    <nav class="header__nav-left">
      <HeaderNav name="Insorker" path="/" />
    </nav>
    <nav class="header__nav-right">
      <HeaderNav name="Project" path="project" />
      <HeaderNav name="Note" path="note" />
      <HeaderNav name="About" path="about" />
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 0 var(--yr-padding);
  border-bottom: 1px solid var(--color-border);
}
.header__nav-left {
  flex: 1 0 auto;
}
.header__nav-right {
  display: flex;
  justify-content: center;
  flex: 0 0 auto;
}
</style>
