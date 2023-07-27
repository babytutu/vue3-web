# 路由多页签

使用 provide 和 inject 实现方法复用

## 路由配置

- title 页面名称
- closable 可关闭页签
- keepAlive 开启缓存

```js
{
  meta: {
    title: '首页',
    closable: false,
    keepAlive: false,
  },
}
```

## Methods

```ts
export interface TabType {
  title: string
  path: string
  closable?: boolean
}
```

| 名称       | 描述     | 参数    | 参数类型 |
| ---------- | -------- | ------- | -------- |
| addTab     | 新增页签 | tabType | TabType  |
| removeTab  | 删除页签 | path    | string   |
| reloadTab  | 刷新页签 | path    | string   |
| replaceTab | 替换页签 | path    | string   |

## 使用示例

```html
<el-button @click="addTabByPath">打开新页签</el-button>
<el-button @click="removeTab($route.path)">删除页签</el-button>
<el-button @click="reloadTab($route.path)">刷新页签</el-button>
<el-button @click="closeToTab">替换页签</el-button>
```

```js
import { inject } from 'vue'

const addTab = inject('addTab') as Function
const removeTab = inject('removeTab') as Function
const reloadTab = inject('reloadTab') as Function
const replaceTab = inject('replaceTab') as Function

const addTabByPath = () => {
  addTab({
    title: '分页列表',
    path: '/pageList',
  })
}

const closeToTab = () => {
  replaceTab({
    title: '分页列表',
    path: '/pageList',
  })
}
```

## keepAlive

vue 官方组件，未在生产环境开放清除缓存方法，需要修改源码实现

node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js

核心部分，去掉判断条件，使__v_cache暴露出来

```js
if (!!(process.env.NODE_ENV !== "production") || __VUE_PROD_DEVTOOLS__) {
  instance.__v_cache = cache;
}
```

注释1，3行即可

可通过node修改文件实现[replace-vue.js](https://github.com/babytutu/vue3-web/blob/master/build/replace-vue.js)

package.json

```json
{
  "script": {
    "build": "node build/replace-vue.js && run-p type-check build-only"
  }
}
```
