export const route: any[] = [
  {
    path: '/singleList',
    name: 'singleList',
    component: () => import('@/views/demo/singleList.vue'),
    meta: {
      title: 'FakeStore',
    },
  },
  {
    path: '/pageList',
    name: 'pageList',
    component: () => import('@/views/demo/pageList.vue'),
    meta: {
      title: 'Fakerapis',
    },
  },
  {
    path: '/detailInfo/:id',
    name: 'detailInfo',
    component: () => import('@/views/demo/detailInfo.vue'),
    meta: {
      title: 'Info',
    },
  },
]
