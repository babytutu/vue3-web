<template>
  <div class="top-bar">
    <el-row :gutter="20">
      <el-col :span="4">
        <img src="/logo.png" class="top-bar-icon" alt="" />
      </el-col>
      <el-col :span="4" :offset="16" class="top-bar-right">
        <el-button @click="logout">
          {{ username }}<el-icon class="el-icon--right"><SwitchButton /></el-icon>
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const username = sessionStorage.getItem('username')
const logout = () => {
  sessionStorage.removeItem('login')
  sessionStorage.removeItem('username')
  router.push('/login')
}
</script>
<style lang="stylus" scoped>
.top-bar {
  height 50px
  padding 5px 10px
  border-bottom 1px solid var(--el-menu-border-color);
  &-icon {
    height 40px
  }
  &-right {
    text-align right
  }
}
</style>
