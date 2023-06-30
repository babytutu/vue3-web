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
      name: 'home',
      component: () => import('@/views/frame/HomeView.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home.vue'),
          meta: {
            title: '首页',
            closable: false,
          },
        },
        ...DemoRoute,
        {
          path: '/:pathMatch(.*)*',
          name: 'NotFound',
          component: () => import('@/views/frame/NotFound.vue'),
        },
      ],
    },
    // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
})

export default router
