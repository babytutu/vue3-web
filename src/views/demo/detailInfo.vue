<template>
  <el-descriptions v-loading="loading" title="Info" :column="1" border>
    <el-descriptions-item v-for="i in Object.keys(info)" :key="i" :label="i">{{info[i]}}</el-descriptions-item>
  </el-descriptions>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { get } from '@/utils/http'

const route = useRoute()
const id = route.params.id

const info: any = ref({})
const loading = ref(true)

onMounted(() => {
  get(`https://fakestoreapi.com/products/${id}`).then((res: any) => {
    info.value = res
    loading.value = false
  }).catch(() => {
    loading.value = false
  })
})
</script>
