export const menuList: any = [
  {
    title: 'Home',
    path: '/home',
    icon: 'HomeFilled',
  },
  {
    title: 'API',
    icon: 'List',
    children: [
      {
        title: 'FakeStore',
        path: '/singleList',
      },
      {
        title: 'Fakerapis',
        path: '/pageList',
      },
    ],
  },
]
