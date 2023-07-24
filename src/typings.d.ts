import 'vue-router'
declare module 'vue-router' {
  interface RouteMeta {
    closable?: boolean = true
    keepAlive?: boolean = true
    title: string
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    msg: string
    $translate: (key: string) => string
  }
}
