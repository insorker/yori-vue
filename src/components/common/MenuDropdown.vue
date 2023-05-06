<script lang="ts" setup>
import { ref } from 'vue'

const showDropdown = ref(false)
</script>

<template>
  <div class="dropdown">
    <div class="dropdown__button" @click="showDropdown = !showDropdown">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
        </svg>
      </span>
    </div>
    <div v-if="showDropdown" @click="showDropdown = false">
      <div class="dropdown__content yr-flex-column yr-gap-null">
        <slot />
      </div>
      <div class="dropdown__mask"></div>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  width: 40px;
}
.dropdown__button {
  padding: 16px;
  background: inherit;
  color: black;
}
.dropdown__button svg {
  height: var(--yr-fs-3);
  width: var(--yr-fs-3);
}
/* Style the dropdown content (hidden by default) */
.dropdown__content {
  position: absolute;
  padding: var(--yr-padding);
  right: 0px;
  width: 100%;
  background-color: var(--color-background-soft);
  transition: background-color 0.5s;
  z-index: 10;
}
.dropdown__mask {
  position: absolute;
  top: 10vh;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: calc(100% - 10vh);
  background-color: #0003;
  transition: background-color 0.5s;
  z-index: 9;
}
</style>