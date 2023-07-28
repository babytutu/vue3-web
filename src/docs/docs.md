# 文档生成

直接展示md文件

## 安装和配置

- vite-plugin-vue-markdown 处理md文件
- markdown-it-prism 标记md中代码类型
- github-markdown-css 高亮样式

```bash
yarn add vite-plugin-vue-markdown markdown-it-prism github-markdown-css -D
```

vite.config.ts

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Markdown from 'vite-plugin-vue-markdown'
import prism from 'markdown-it-prism'

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      // default options passed to markdown-it
      // see: https://markdown-it.github.io/markdown-it/
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      markdownItUses: [prism],
    }),
  ]
})
```

## 自动读取md文件

docs为md文件目录，新建`index.ts`

```ts
import type { Component } from 'vue'

interface Model {
  [key: string]: Component
}

/**
 * 获取所有文档
 * @see https://cn.vitejs.dev/guide/features.html#glob-import-as
 */
const files: Model = import.meta.glob('./*.md', { eager: true, import: 'default' })

export const moduleList: string[] = []
export const modules: Model = {}

Object.keys(files).forEach((path) => {
  const moduleName = path.replace(/^\.\/(.*)\.\w+$/, '$1')
  moduleList.push(moduleName)
  modules[moduleName] = files[path]
})

```

页面调用

```html
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

```