# 分页组件

[Pagination 分页](https://element-plus.org/zh-CN/component/pagination.html)

## 参数

|名称|说明|类型|是否必填|
|---|---|---|---|
|total|总条数|number|是|
|pageSizes|每页显示个数选择器的选项设置|Array\<number>|否|
|layout|组件布局|string|否|
|small|是否使用小型分页样式|boolean|否|
|background|背景|boolean|否|
|defaultPageSize|每页默认条数|number|否|

### 类型定义

```ts
export interface Props {
  total: number
  pageSizes?: Array<number>
  layout?: string
  small?: boolean
  background?: boolean
  defaultPageSize?: number
}

const props = withDefaults(defineProps<Props>(), {
  total: 0,
  pageSizes: () => [10, 20, 50, 100],
  layout: 'total, sizes, ->, prev, pager, next',
  small: true,
  background: true,
  defaultPageSize: 20,
})
```

## 事件

|名称|说明|回调参数|
|---|---|---|
|size-change|每页条数变更|条数|
|current-change|当前页变更|当前页|

## 示例

```html
<pageModel
  ref="pageModel"
  :total="pageData.total"
  :default-page-size="20"
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
/>
```