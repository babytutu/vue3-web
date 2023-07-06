# 页面结构组件

页面100%高度内flex布局，一般展示上中下结构

## 插槽

- header 头部
- footer 底部
- default 自动撑开中间

## 示例

```html
<Layout>
  <template #header></template>
  content
  <template #footer></template>
</Layout>
```
