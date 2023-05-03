<template>
  <div class="post yr-flex-column yr-gap-null">
    <div class="post__content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.post {
  align-items: center;
}
.post__content {
  width: 100%;
  max-width: 800px;
}
</style>