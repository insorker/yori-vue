<template>
  <div class="wrapper">
    <img src="/background.png">
  </div>
</template>

<style scoped>
.wrapper {
  height: 100%;
  position: relative;
  overflow: hidden;
}
.wrapper img {
  height: 100%;
  max-width: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>