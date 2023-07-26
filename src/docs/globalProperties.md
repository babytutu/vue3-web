# 扩展全局属性

app.config.globalProperties

## 定义

### 直接定义

```ts
app.config.globalProperties.msg = 'hello'
```

### 插件中使用

tool.ts

```ts
export default {
  install(app: any, options: any) {
    // 配置此应用
    app.config.globalProperties.$translate = (key: string) => {
      return key.split('.').reduce((o: any, i: any) => {
        if (o) return o[i]
      }, options)
    }
  },
}
```

引入插件

```ts
// 引入插件
import tool from '@/utils/tool'

const app = createApp(App)

// 配置并使用插件
app.use(tool, {
  home: {
    title: 'vue3 demo',
  },
})
```

## 在 TypeScript 中使用

[需要做类型定义](https://cn.vuejs.org/guide/typescript/options-api.html#augmenting-global-properties)

\*.d.ts

```ts
export {}

declare module 'vue' {
  interface ComponentCustomProperties {
    msg: string
    $translate: (key: string) => string
  }
}
```

## 在组件中使用

### 在 html 中可直接使用

```html
<div>{{msg}} {{$translate('home.title')}}</div>
```

### 在 ts 中使用

- 增加引用的模块定义

useProxy.ts

```ts
import {
  getCurrentInstance,
  type ComponentInternalInstance,
  type ComponentPublicInstance,
} from 'vue'
export default () =>
  (getCurrentInstance() as ComponentInternalInstance).proxy as ComponentPublicInstance
```

- 在 ts 中使用

```html
<template>
  <div>{{ message }}{{ title }}</div>
</template>
<script lang="ts" setup>
import useProxy from '@/utils/useProxy'
const proxy = useProxy()

const message = proxy.msg // hello
const title = proxy.$translate('home.title') // vue3 demo
</script>
```
