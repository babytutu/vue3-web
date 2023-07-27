export const route: any[] = [
  {
    path: '/singleList',
    name: 'singleList',
    component: () => import('@/views/demo/singleList.vue'),
    meta: {
      title: '简单列表',
      auth: 'singleList',
    },
  },
  {
    path: '/pageList',
    name: 'pageList',
    component: () => import('@/views/demo/pageList.vue'),
    meta: {
      title: '分页列表',
      auth: 'pageList',
    },
  },
  {
    path: '/detailInfo/:id',
    name: 'detailInfo',
    component: () => import('@/views/demo/detailInfo.vue'),
    meta: {
      title: '详情',
    },
  },
  {
    path: '/addForm',
    name: 'addForm',
    component: () => import('@/views/demo/formPage.vue'),
    meta: {
      title: '新增',
    },
  },
  {
    path: '/editForm/:id',
    name: 'editForm',
    component: () => import('@/views/demo/formPage.vue'),
    meta: {
      title: '编辑',
    },
  },
  {
    path: '/copyForm/:copyId',
    name: 'copyForm',
    component: () => import('@/views/demo/formPage.vue'),
    meta: {
      title: '复制',
    },
  },
  {
    path: '/echartPage',
    name: 'echartPage',
    component: () => import('@/views/demo/echartPage.vue'),
    meta: {
      title: 'echart',
      keepAlive: false,
    },
  },
  {
    path: '/docs',
    name: 'docs',
    component: () => import('@/views/demo/md.vue'),
    meta: {
      title: 'docs',
    },
  },
]
