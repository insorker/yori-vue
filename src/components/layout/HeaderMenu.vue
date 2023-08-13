<script lang="ts" setup>
import { ref } from 'vue'

const fold = ref(true)
</script>

<template>
  <div class="dropdown">
    <div class="dropdown__button" @click="fold = !fold">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M4 6h24v2H4zm0 18h24v2H4zm0-12h24v2H4zm0 6h24v2H4z"></path></svg>
      </span>
    </div>
    <div :class="[ 'dropdown__content', { 'dropdown__unfold': !fold } ]" @click="fold = true">
      <div class="dropdown__list">
        <slot />
      </div>
      <div class="dropdown__mask"></div>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  width: 30px;
}
.dropdown__button {
  color: black;
  background: inherit;
}
.dropdown__content {
  position: absolute;
  height: 0px;
  top: 3.25rem;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
}
.dropdown__content.dropdown__unfold {
  height: auto;
}
/* Style the dropdown content (hidden by default) */
.dropdown__list {
  position: relative;
  padding: 0 var(--yr-fs-4);
  background-color: var(--yr-c-bg-soft);
  z-index: 10;
  transform: scaleY(0);
  transform-origin: top;
  transition-duration: .3s;
  transition-property: transform;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
}
.dropdown__unfold .dropdown__list {
  transform: scaleY(1);
}
.dropdown__mask {
  position: fixed;
  height: 0px;
  top: 3.25rem;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: #0003;
  z-index: 9;
}
.dropdown__unfold .dropdown__mask {
  height: calc(100vh - 3.25rem);
}
</style>