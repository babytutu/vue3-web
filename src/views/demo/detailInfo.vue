<template>
  <el-descriptions v-loading="loading" :column="1" border>
    <template #extra>
      <el-button @click="removeTab($route.path)">关闭</el-button>
    </template>
    <el-descriptions-item v-for="i in Object.keys(info)" :key="i" :label="i">{{info[i]}}</el-descriptions-item>
  </el-descriptions>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { http } from '@/utils/http'
import { inject } from 'vue'

const removeTab: any = inject('removeTab')

const route = useRoute()
const id = route.params.id

const info: any = ref({})
const loading = ref(true)

onMounted(() => {
  http('https://5ykenqzacs.hk.aircode.run/getItem', {
    type: 'demoList',
    id
  }).then((res: any) => {
    info.value = res.result
    loading.value = false
  }).catch(() => {
    loading.value = false
  })
})
</script>
