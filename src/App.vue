<template>
  <div id="container"></div>
  <el-config-provider :size="size" :z-index="zIndex" :locale="locale">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// @see https://element-plus.org/zh-CN/component/config-provider.html#api
const size = 'small' // 全局组件大小
const zIndex = 3000 // 全局初始化 zIndex 的值
const locale = zhCn
</script>

<style scoped>
</style>
