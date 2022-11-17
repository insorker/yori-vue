<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['checked'])
const checked = ref(true)
watch(checked, () => {
  emit('checked', checked)
})
</script>

<template>
  <label class="switch">
    <input type="checkbox" v-model="checked">
    <span class="slider round"></span>
  </label>
</template>

<style scoped>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: var(--yr-switch-width);
  height: var(--yr-switch-height);
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--yr-c-bg-pale);
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: var(--yr-slider-height);
  width: var(--yr-slider-height);
  left: calc(var(--yr-switch-padding) / 2);
  bottom: calc(var(--yr-switch-padding) / 2);
  background-color: var(--yr-c-bg-opaque);
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--yr-c-bg-pale);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--yr-c-bg-pale);
}

input:checked + .slider:before {
  -webkit-transform: translateX(var(--yr-slider-on));
  -ms-transform: translateX(var(--yr-slider-on));
  transform: translateX(var(--yr-slider-on));
}

/* Rounded sliders */
.slider.round {
  border-radius: var(--yr-slider-height);
}

.slider.round:before {
  border-radius: 50%;
}
</style>
