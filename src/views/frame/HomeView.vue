<template>
  <div class="home-waper">
    <div class="home-waper-top">
      <topBar />
    </div>
    <div class="home-waper-body">
      <sideBar @addTab="addTabByMenu" />
      <div class="home-waper-content">
        <tabMenu ref="addTab" />
        <div class="home-waper-view">
          <router-view v-slot="{ Component, route }">
            <keep-alive :max="3">
              <component :is="Component" :key="route.path" />
            </keep-alive>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import type { tabType } from '@/components/frame/tabMenu.vue'

const addTab = ref()

/**
 * 菜单新增页签
 * @param tabInfo 页签对象
 */
function addTabByMenu(tabInfo: tabType) {
  addTab.value?.addTab(tabInfo)
}
</script>

<style lang="stylus" scoped>
.home-waper {
  height 100%
  display flex
  flex-direction: column;
  &-top {
    height 50px
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.08);
  }
  &-body {
    display flex
    flex 1
    width 100%
    overflow hidden
  }
  &-content {
    flex 1
    overflow hidden
    display flex
    flex-direction: column;
  }
  &-view {
    height 100%
    flex 1
    padding 10px
    overflow auto
  }
}
</style>
