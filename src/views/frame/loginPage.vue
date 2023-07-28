<template>
  <Layout>
    <el-card class="box-card" :header="$translate('home.title')">
      <el-form label-width="80px" :model="loginInfo">
        <el-form-item label="帐号">
          <el-input ref="input" v-model="loginInfo.username" maxLength="10" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginInfo.password" maxLength="12" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            :loading="loading"
            :disabled="!loginInfo.username || !loginInfo.password"
            @click="onSubmit"
            >登陆</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
    <template #footer>
      <div class="version">vue3-web-demo {{ version }} {{ buildTime }}</div>
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import { ref, inject, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const input = ref()

const loginInfo = ref({
  username: '',
  password: '',
})

const log = inject('log') as Function

const version = document.querySelector('meta[name="version"]')?.getAttribute('content')
const buildTime = document.querySelector('meta[name="buildTime"]')?.getAttribute('content')

const loading = ref(false)

const onSubmit = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    sessionStorage.setItem('login', '1')
    sessionStorage.setItem('username', loginInfo.value.username)
    router.push('/home')
  }, 1000)
}

onMounted(() => {
  log('version', version)
  log('buildTime', buildTime)
  input.value?.input.focus()
})
</script>
<style lang="stylus" scoped>
.box-card {
  width 360px
  margin 10% auto 0
}

.version {
  font-size 12px
  text-align center
  color: #909399
  line-height 3
}
</style>
