<template>
  <el-tabs v-model="currentTab">
    <el-tab-pane v-for="i in moduleList" :name="i" :key="i" :label="i">
    </el-tab-pane>
  </el-tabs>
  <component :is="modules[currentTab]" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import 'github-markdown-css'
import { modules, moduleList } from '@/docs/index'

const currentTab = ref<string>(moduleList[0])
</script>
