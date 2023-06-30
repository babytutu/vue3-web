export const route: any[] = [
  {
    path: '/tablePage',
    name: 'tablePage',
    component: () => import('@/views/demo/tablePage.vue'),
  },
  {
    path: '/formList',
    name: 'formList',
    component: () => import('@/views/demo/formList.vue'),
  },
  {
    path: '/form/:id',
    name: 'formPage',
    component: () => import('@/views/demo/formDetail.vue'),
    meta: {
      title: '表单详情',
    },
  },
]
