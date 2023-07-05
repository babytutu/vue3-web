<template>
  <el-descriptions title="文件说明" :column="1" border>
    <el-descriptions-item v-for="i in apiList" :key="i.label" :label="i.label">
      {{ i.content }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<script lang="ts" setup>
const apiList: any[] = [
  {
    label: '全局样式',
    content: 'src/assets/main.css',
  },
  {
    label: '示例',
    content: 'src/views/demo',
  },
  {
    label: '组件',
    content: 'src/components',
  },
  {
    label: '工具类',
    content: 'src/utils',
  },
  {
    label: 'Mock数据',
    content: 'src/mock',
  },
  {
    label: '状态管理',
    content: 'src/stores',
  },
]
</script>
