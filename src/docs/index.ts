import type { Component } from 'vue'

interface Model {
  [key: string]: Component
}

/**
 * 获取所有文档
 * @see https://cn.vitejs.dev/guide/features.html#glob-import-as
 */
const files: Model = import.meta.glob('./*.md', { eager: true, import: 'default' })

const list: string[] = []
const modules: Model = {}

Object.keys(files).forEach((path) => {
  const moduleName = path.replace(/^\.\/(.*)\.\w+$/, '$1')
  list.push(moduleName)
  modules[moduleName] = files[path]
})

export default {
  modules,
  list,
}
