# 权限策略

- 后端接口返回菜单权限
- 前端配置页面是否需要按钮权限
- 进入页面前调用后端接口返回按钮权限并缓存
- 离开页面前清除已缓存的按钮权限

## 路由配置

- auth 权限key

```js
{
  meta: {
    auth: 'pageList'
  },
}
```

## 路由鉴权

- 后端接口返回按钮权限保存在store中

main.ts

```ts
import { useAuthStore } from '@/stores/auth'

// 接口返回权限
const getAuth = async (path: string) => {
  const auth = await fetch(...).then((res) => res.json())
  return auth || ''
}

router.beforeEach(async (to, from, next) => {
  const { setAuth, removeAuth } = useAuthStore()
  if (to.meta.auth) {
    const rulePath = to.meta.auth
    const authList = await getAuth(rulePath)
    setAuth(rulePath, authList)
  }
  if (from.meta.auth) {
    removeAuth(from.meta.auth)
  }
  next()
})
```

auth.ts

```ts
import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Auth {
  [key: string]: string
}

// 权限验证方法集合
export const useAuthStore = defineStore('auth', () => {
  // 权限集合
  const authModel = ref<Auth>({})

  // 新增权限
  function setAuth(path: string, authList: string) {
    authModel.value[path] = authList
  }

  // 删除权限
  function removeAuth(path: string) {
    delete authModel.value[path]
  }

  // 验证是否有权限
  function checkAuth(path: string, type: string): boolean {
    return Boolean(path && authModel.value[path]?.includes(type))
  }

  return { authModel, setAuth, removeAuth, checkAuth }
})

```

## 鉴权组件

auth.vue

```html
<template>
  <slot v-if="showModel" />
</template>
<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const { checkAuth } = useAuthStore()

const showModel = ref(false) // 是否显示模块

const props = defineProps<{
  type: string
}>()

onBeforeMount(() => {
  const rulePath = route.meta?.auth || ''
  showModel.value = Boolean(rulePath) && checkAuth(rulePath, props.type)
})
</script>
```

### 页面使用示例

```html
<auth type="add">
  <el-button type="primary" @click="handleAdd">新增</el-button>
</auth>
```

## 在table组件使用

操作列中通过配置`auth`实现鉴权

部分代码示例

```ts
import { useAuthStore } from '@/stores/auth'

const { checkAuth } = useAuthStore()

const header: any[] = [
  {
    prop: 'action',
    label: '操作',
    width: '90',
    options: [
      {
        name: '删除',
        onClick: (row: any) => handleDelete(row),
        auth: checkAuth('singleList', 'del')
      },
    ],
  },
]
```