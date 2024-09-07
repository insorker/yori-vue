<script lang="ts" setup>
import { ref } from 'vue'

const fold = ref(true)
</script>

<template>
  <div class="dropdown">
    <IconSets icon="tabler:align-right" class="button" @click="fold = !fold" />
    <div :class="['dropdown__content', { dropdown__unfold: !fold }]" @click="fold = true">
      <div class="dropdown__list">
        <slot />
      </div>
      <div class="dropdown__mask"></div>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  align-items: center;
  padding: var(--yr-fs-2);
}
.button {
  font-size: var(--yr-fs-6);
}
.button:hover {
  cursor: pointer;
}
.dropdown__button svg {
  fill: var(--yr-c-text-1);
}
.dropdown__content {
  position: absolute;
  height: 0px;
  top: var(--yr-pd-top);
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
  padding: 0 var(--yr-fs-8);
  background-color: var(--yr-c-bg-soft);
  z-index: 10;
  transform: scaleY(0);
  transform-origin: top;
  transition-duration: 0.3s;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.dropdown__unfold .dropdown__list {
  transform: scaleY(1);
}
.dropdown__mask {
  position: fixed;
  height: 0px;
  top: var(--yr-pd-top);
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: #0005;
  z-index: 9;
}
.dropdown__unfold .dropdown__mask {
  height: calc(100vh - var(--yr-pd-top));
}
</style>
