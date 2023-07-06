# 多页签方法

使用provide和inject实现方法复用

- 新增页签 addTab
- 删除页签 removeTab

## 使用示例

```vue
<template>
  <el-button @click="addTabByPath">新增页签</el-button>
  <el-button @click="removeTab($route.path)">删除页签</el-button>
</template>
<script lang="ts" setup>
import { inject } from 'vue'

const addTab: any = inject('addTab')
const removeTab: any = inject('removeTab')

const addTabByPath = () => {
  addTab({
    title: '分页列表',
    path: '/pageList',
    closable: true, // 可选
  })
}
</script>
```

## 参数说明

### addTab(tabType)

- tabType，对象

```ts
export interface tabType {
  title: string
  path: string
  closable?: boolean
}
```

### removeTab(path)

- path，字符串

## keepAlive

vue官方组件，支持3个参数

- includes
- excludes
- max

设置包含`List`的组件缓存，最多缓存3个

```html
<router-view v-slot="{ Component, route }">
  <!--https://cn.vuejs.org/guide/built-ins/keep-alive.html-->
  <keep-alive :max="3" :include="/List/">
    <component :is="Component" :key="route.path" />
  </keep-alive>
</router-view>
```

## 缓存路由自动更新

通过pinia维护需要刷新的路由，onActivated时进行验证并执行对应方法

### 方法定义

reloadTabs.ts

```ts
import { ref } from 'vue'
import { defineStore } from 'pinia'

// 缓存需要刷新的tab集合
export const useReloadTabsStore = defineStore('reloadTabs', () => {
  const reloadList = ref<string[]>([])

  // 新增需要刷新的tab
  function addReloadTab(path: string) {
    if (!reloadList.value.includes(path)) {
      reloadList.value.push(path)
    }
  }

  // 删除需要刷新的tab
  function removeReloadTab(path: string) {
    reloadList.value = reloadList.value.filter((i: string) => i !== path)
  }

  // 验证是否存在需要刷新的tab
  function checkReload(path: string, callback: any) {
    if (reloadList.value.includes(path)) {
      removeReloadTab(path)
      callback && callback()
    }
  }

  return { reloadList, addReloadTab, removeReloadTab, checkReload }
})

```

### 增加刷新页签

```js
import { useReloadTabsStore } from '@/stores/reloadTabs'

const store = useReloadTabsStore()

store.addReloadTab('pageList')
```

### 页面onActivated时验证

```js
import { useReloadTabsStore } from '@/stores/reloadTabs'

const store = useReloadTabsStore()

onActivated(() => {
  store.removeReloadTab('pageList', () => {
    getList()
  })
})
```