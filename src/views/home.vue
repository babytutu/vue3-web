<template>
  <el-descriptions :title="title" :column="1" border>
    <el-descriptions-item v-for="i in apiList" :key="i.label" :label="i.label">
      {{ i.content }}
    </el-descriptions-item>
  </el-descriptions>
  <el-button @click="toggle">
    {{ isFullscreen ? '退出全屏' : '全屏' }}
  </el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import useProxy from '@/utils/useProxy'
import { useFullscreen } from '@vueuse/core'

const proxy = useProxy()
const title = ref(proxy.$translate('home.title'))

const { toggle, isFullscreen } = useFullscreen()

const apiList = [
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
