<template>
  <el-form :model="formInline">
    <el-form-item label="Name">
      {{formInline.name}}
    </el-form-item>
    <el-form-item label="Age">
      {{formInline.age}}
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { http } from '@/utils/http'

const route = useRoute()
const id = route.params.id

const formInline = ref({
  name: '',
  age: '',
})

onMounted(() => {
  http('https://87tetwnrqe.hk.aircode.run/getItemById', {
    id,
    category: 'react_app'
  }).then((res: any) => {
    if (res.result.length) formInline.value = res.result[0]
  })
})
</script>
