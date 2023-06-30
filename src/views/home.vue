<template>
  <el-descriptions title="API" :column="1" border>
    <el-descriptions-item v-for="i in apiList" :key="i.label" :label="i.label">
      <el-link type="primary" :href="i.link" target="_blank">{{ i.link }}</el-link>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script lang="ts" setup>
const apiList: any[] = [
  {
    label: 'FakeStore',
    link: 'https://fakestoreapi.com/docs',
  },
  {
    label: 'Fakerapis',
    link: 'https://fakerapi.it/en',
  },
]
</script>
