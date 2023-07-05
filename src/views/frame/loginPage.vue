<template>
  <Layout>
    <el-card class="box-card" header="演示后台">
      <el-form label-width="80px" :model="loginInfo">
        <el-form-item label="帐号">
          <el-input v-model="loginInfo.username" maxLength="10" />
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
  </Layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const loginInfo = ref<any>({
  username: '',
  password: '',
})

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
</script>
<style lang="stylus" scoped>
.box-card {
  width 360px
  margin 10% auto 0
}
</style>
