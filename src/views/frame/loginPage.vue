<template>
  <el-button type="primary" @click="onSubmit">登录</el-button>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const onSubmit = () => {
  sessionStorage.setItem('login', '1')
  router.push('/home')
}
</script>
