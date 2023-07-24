import { createRouter, createWebHashHistory } from 'vue-router'
import { route as DemoRoute } from '@/views/demo/route'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/frame/loginPage.vue'),
    },
    {
      path: '/',
      component: () => import('@/views/frame/waper.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home.vue'),
          meta: {
            title: '首页',
            closable: false,
            keepAlive: false,
          },
        },
        ...DemoRoute,
        {
          path: '/:pathMatch(.*)*',
          name: '404',
          component: () => import('@/views/frame/404.vue'),
        },
      ],
    },
  ],
})

export default router
