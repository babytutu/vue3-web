<template>
  <el-menu default-active="/home" class="side-bar">
    <template v-for="i in menuList" :key="i.title">
      <el-menu-item v-if="!i.children || !i.children.length" :index="i.title + i.path" @click="emit('addTab', i)">
        <span>{{ i.title }}</span>
      </el-menu-item>
      <el-sub-menu v-else :index="i.title + i.path">
        <template #title>
          <el-icon v-if="i.icon"><component :is="i.icon" /></el-icon>
          <span>{{ i.title }}</span>
        </template>
        <el-menu-item
          @click="emit('addTab', sub)"
          v-for="sub in i.children"
          :key="sub.path"
          :index="sub.path"
          >{{ sub.title }}</el-menu-item
        >
      </el-sub-menu>
    </template>
  </el-menu>
</template>
<script lang="ts" setup>
import { menuList } from '@/mock/menu'

const emit = defineEmits(['addTab'])

</script>

<style lang="stylus" scoped>
.side-bar {
  width 180px
  overflow auto
}
</style>
