<template>
  <div class="home-waper">
    <div class="home-waper-top">
      <topBar />
    </div>
    <div class="home-waper-body">
      <sideBar @addTab="addTab" />
      <div class="home-waper-content">
        <tabMenu ref="tabMenuRef" @delCache="delCache" @reloadTab="reloadTab" />
        <div class="home-waper-view">
          <router-view v-slot="{ Component, route }">
            <!--https://cn.vuejs.org/guide/built-ins/keep-alive.html-->
            <keep-alive ref="tabTool">
              <component
                v-if="isRouterAlive && route.meta.keepAlive !== false"
                :is="Component"
                :key="route.fullPath"
              />
            </keep-alive>
            <component
              v-if="isRouterAlive && route.meta.keepAlive === false"
              :is="Component"
              :key="route.fullPath"
            />
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import type { tabType } from '@/components/frame/tabMenu.vue'

const tabMenuRef = ref()
const isRouterAlive = ref(true)
const tabTool = ref()
const route = useRoute()

/**
 * 清除keepAlive缓存
 * 因缓存对象未开放，需要修改源码实现功能
 * @param path 路径
 */
function delCache(path: string) {
  tabTool?.value.$.__v_cache?.delete(path)
}

/**
 * 刷新指定页面
 * 1、清除keepAlive缓存
 * 2、页面通过v-if重新渲染
 * @param path 页面路径
 */
function reloadTab(path: string): void {
  delCache(path)
  isRouterAlive.value = false
  nextTick(() => {
    isRouterAlive.value = true
  })
}

/**
 * 打开新页签
 * @param tabInfo
 */
function addTab(tabInfo: tabType): void {
  tabMenuRef.value?.addTab(tabInfo)
}

/**
 * 关闭页签
 * @param path 路径
 */
function removeTab(path: string): void {
  tabMenuRef.value?.removeTab(path)
}

function replaceTab(tabInfo: tabType): void {
  tabMenuRef.value?.removeTab(route.path)
  tabMenuRef.value?.addTab(tabInfo)
}

provide('addTab', addTab)
provide('removeTab', removeTab)
provide('reloadTab', reloadTab)
provide('replaceTab', replaceTab)
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
