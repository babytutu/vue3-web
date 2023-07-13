export default {
  install(app: any, options: any) {
    // 配置此应用
    app.config.globalProperties.$translate = (key: string) => {
      return key.split('.').reduce((o: any, i: any) => {
        if (o) return o[i]
      }, options)
    }
    app.provide('i18n', options)
  },
}
