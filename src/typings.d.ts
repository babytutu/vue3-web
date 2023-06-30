import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 是否可关闭
    closable?: boolean = true
    // 页签名称
    title: string
  }
}
