export const menuList: any = [
  {
    title: '首页',
    path: '/home',
    icon: 'HomeFilled',
  },
  {
    title: '示例',
    icon: 'List',
    children: [
      {
        title: '简单列表',
        path: '/singleList',
      },
      {
        title: '分页列表',
        children: [
          {
            title: '表单',
            path: '/addForm',
          },
          {
            title: '分页列表',
            path: '/pageList',
          },
        ],
      },
    ],
  },
]
