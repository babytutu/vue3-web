<template>
  <el-descriptions v-loading="loading" :column="1" border>
    <template #extra>
      <el-button @click="addTabByPath">返回列表</el-button>
      <el-button @click="removeTab($route.path)">关闭</el-button>
      <el-button @click="reloadTab($route.path)">刷新页签</el-button>
    </template>
    <el-descriptions-item v-for="i in Object.keys(info)" :key="i" :label="i">{{
      info[i]
    }}</el-descriptions-item>
  </el-descriptions>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getItem, type Res } from '@/utils/apis'
import { inject } from 'vue'

const replaceTab = inject('replaceTab') as Function
const removeTab = inject('removeTab') as Function
const reloadTab = inject('reloadTab') as Function

const route = useRoute()

const info = ref<Res>({})
const loading = ref(true)

const addTabByPath = () => {
  replaceTab({
    title: '分页列表',
    path: '/pageList',
    closable: true, // 可选
  })
}

onMounted(async () => {
  const result = await getItem({
    type: 'demoList',
    id: route.params.id,
  })
  info.value = result
  loading.value = false
})
</script>
