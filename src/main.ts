import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { isNavigationFailure } from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import tool from '@/utils/tool'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(createPinia())
app.use(router)

app.mount('#app')

app.use(tool, {
  home: {
    title: 'vue3 demo',
  },
})
app.config.globalProperties.msg = 'hello'

NProgress.configure({
  easing: 'ease', // 动画方式，和css动画属性一样（默认：ease）
  speed: 500, // 递增进度条的速度，单位ms（默认： 200）
  showSpinner: false, // 是否显示加载ico
  trickle: true, //是否自动递增
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 初始化时的最小百分比，0-1（默认：0.08）
  parent: '#container', //指定此选项以更改父容器（默认：body）
})

sessionStorage.setItem('reload', '1')

router.beforeEach((to, from, next) => {
  NProgress.start()

  const isLogin = sessionStorage.getItem('login') === '1'
  const isReload = sessionStorage.getItem('reload') === '1'
  const isLoging = to.fullPath === '/login'

  sessionStorage.removeItem('reload')

  if (isReload && isLogin) {
    next('/home')
  } else if (isLogin || isLoging) {
    next()
  } else {
    next('/login')
  }
})

router.afterEach((to, from, failure) => {
  NProgress.done()
  if (isNavigationFailure(failure)) {
    console.log('failed navigation', failure)
  }
})
