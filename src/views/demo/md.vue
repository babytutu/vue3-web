<template>
  <div class="markdown-warper">
    <el-tabs type="border-card" v-model="currentTab">
      <el-tab-pane v-for="i in modules.list" :name="i" :key="i" :label="i">
        <component :is="modules.modules[currentTab]" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import 'github-markdown-css'
import modules from '@/docs/index'

const currentTab = ref<string>(modules.list[0])

</script>
