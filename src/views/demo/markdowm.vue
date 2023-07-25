<template>
  <div class="markdown-warper">
    <el-tabs v-model="currentTab">
      <el-tab-pane v-for="i in modules.list" :name="i" :key="i" :label="i"></el-tab-pane>
    </el-tabs>
    <component :is="modules.modules[currentTab]?.default" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import modules from '@/docs/index'

const currentTab = ref<string>('tab')

</script>
<style lang="stylus" scoped>
.markdown-warper {
  padding 20px
}
</style>
