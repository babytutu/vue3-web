<template>
  <div id="container"></div>
  <el-config-provider :size="size" :z-index="zIndex">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
// @see https://element-plus.org/zh-CN/component/config-provider.html#api
const size = 'large'
const zIndex = 3000
</script>

<style scoped>
</style>
