/// <reference types="vite/client" />

declare module 'nprogress'
declare module 'element-plus/dist/locale/zh-cn.mjs'

declare module '*.vue' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}

declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}
