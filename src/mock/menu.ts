export const menuList = [
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
        path: '/pageList',
      },
      {
        title: '表单',
        path: '/addForm',
      },
      {
        title: '图表',
        path: '/echartPage',
      },
    ],
  },
  {
    title: '文档',
    icon: 'Notebook',
    path: '/docs',
  },
]
