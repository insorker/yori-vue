<script setup lang="ts">
import { onMounted } from 'vue';

function switchTheme() {
  const htmlELement = document.getElementsByTagName('html')[0]

  if (htmlELement.classList.contains('light')) {
    htmlELement.classList.remove('light')
    htmlELement.classList.add('dark');
  }
  else {
    htmlELement.classList.remove('dark')
    htmlELement.classList.add('light');
  }

  console.log(1)
}
onMounted(() => {
  const htmlELement = document.getElementsByTagName('html')[0]
  const theme = window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light"

  htmlELement.classList.add(theme)
})
</script>

<template>
  <div class="switch">
    <input class="switch__checkbox" type="checkbox" id="yr-id-switch-theme" @change="switchTheme"/>
    <label for="yr-id-switch-theme" class="switch__button"></label>
  </div>
</template>

<style scoped>
.switch {
  width: 100%;
  height: 100%;
  position:relative;
  align-items: center;
}
.switch__button {
  --yr-switch-height: calc(var(--yr-fs-3));

  width: calc(2 * var(--yr-switch-height));
  height: var(--yr-switch-height);
  display: block;
  position: relative;
  background-color: var(--yr-c-bg-soft);
  border-radius: var(--yr-switch-height);
  border: 1px solid var(--yr-c-divider);
  cursor: pointer;
  transition: 0.3s;
}
.switch__button::after {
  content: "";
  width: calc(var(--yr-switch-height) * 0.7);
  height: calc(var(--yr-switch-height) * 0.7);
  position: absolute;
  top: calc(var(--yr-switch-height) * 0.15);
  left: calc(var(--yr-switch-height) * 0.15);
  background-color: var(--yr-c-bg);
  border-radius: var(--yr-switch-height);
  transition: 0.3s;
}
.switch__checkbox {
  visibility: hidden;
}
.switch__checkbox:checked + .switch__button::after {
  left: calc(var(--yr-switch-height) * 1.7);
  transform: translateX(-100%);
}
.switch__button:active::after {
  width: var(--yr-switch-height);
}
</style>