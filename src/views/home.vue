<template>
  <el-steps :active="5">
    <el-step v-for="i in steps" :key="i.title" :title="i.title" :description="i.description" />
  </el-steps>
  <el-descriptions title="文件说明" :column="1" border>
    <el-descriptions-item v-for="i in apiList" :key="i.label" :label="i.label">
      {{ i.content }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<script lang="ts" setup>
const steps = [
  {
    title: '页面样式',
    description: '整体结构，菜单',
  },
  {
    title: '接口请求',
    description: 'fetch简单封装',
  },
  {
    title: '多页签',
    description: '缓存，右键关闭',
  },
  {
    title: '分页封装',
    description: '参数统一',
  },
  {
    title: '表单封装',
    description: 'js配置化',
  },
  {
    title: '列表封装',
    description: 'js配置化',
  },
  {
    title: '状态管理',
    description: 'demo演示',
  },
]

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
