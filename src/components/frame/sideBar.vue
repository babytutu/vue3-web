<template>
  <el-menu class="side-bar">
    <el-scrollbar>
      <template v-for="i in menuList" :key="i.title">
        <el-menu-item
          v-if="!i.children || !i.children.length"
          :index="i.title + i.path"
          @click="emit('addTab', i)"
        >
          <el-icon v-if="i.icon"><component :is="i.icon" /></el-icon>
          <span>{{ i.title }}</span>
        </el-menu-item>
        <template v-else>
          <sub-menu :i="i" @addTab="(tab) => emit('addTab', tab)"></sub-menu>
        </template>
      </template>
    </el-scrollbar>
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
