<template>
  <div class="top-bar">
    <el-row :gutter="20">
      <el-col :span="12">
        <img src="/logo.svg" class="top-bar-icon" alt="" />
        <span class="top-bar-text">vue3+element-plus</span>
      </el-col>
      <el-col :span="4" :offset="8" class="top-bar-right">
        <el-link :underline="false" @click="logout">
          {{ username }}<el-icon class="el-icon--right"><SwitchButton /></el-icon>
        </el-link>
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
  padding 5px 15px
  border-bottom 1px solid var(--el-menu-border-color);
  &-icon {
    height 40px
    padding 5px
    vertical-align: text-bottom;
  }
  &-right {
    text-align right
    line-height 40px
  }
  &-text {
    color: #909399
    font-size 13px
  }
}
</style>
