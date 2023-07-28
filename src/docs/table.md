# 列表常用功能封装

[Table 表格 el-table](https://element-plus.org/zh-CN/component/table.html)

## 参数

| 名称      | 说明         | 类型               | 是否必填 |
| --------- | ------------ | ------------------ | -------- |
| header    | 表头配置集合 | Array\<headerType> | 是       |
| data      | 列表数据集合 | Array              | 是       |
| selection | 多选标志     | Boolean            | 否       |

- headerType

[Table-column 属性](https://element-plus.org/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7)

| 名称     | 说明               | 类型             | 是否必填 |
| -------- | ------------------ | ---------------- | -------- |
| prop     | 字段名             | string           | 是       |
| label    | 表头               | string           | 是       |
| fixed    | 固定在左侧或者右侧 | boolean / string | 否       |
| sortable | 是否排序           | boolean / string | 否       |
| width    | 列宽               | string           | 否       |
| options  | 操作列配置         | Array\<options>  | 否       |

- options

| 名称    | 说明          | 类型   | 是否必填 |
| ------- | ------------- | ------ | -------- |
| name    | 按钮文案      | string | 是       |
| onClick | function(row) | string | 是       |
| auth | 权限验证参数 | boolean | 否 |

### 类型定义

```ts
interface DataType {
  [key: string]: any
}

interface Options {
  name: string
  onClick(item: DataType): void
  auth?: boolean
}

interface HeaderType {
  prop: string
  label: string
  fixed?: boolean | string
  sortable?: boolean | string
  width?: string
  options?: Array<Options>
}

defineProps({
  data: Array<DataType>,
  header: {
    type: Array<HeaderType>,
    required: true,
  },
  selection: {
    type: Boolean,
  },
})
```

### 操作列

通过设置 options 实现操作列快捷配置

```js
[
  {
    prop: 'action',
    label: '操作',
    width: '220',
    options: [
      {
        name: '查看',
        onClick: (row: Res) => handleDetail(row),
        auth: checkAuth('pageList', 'view')
      },
      {
        name: '编辑',
        onClick: (row: Res) => handleEdit(row),
        auth: checkAuth('pageList', 'edit')
      },
      {
        name: '复制',
        onClick: (row: Res) => handleCopy(row),
        auth: checkAuth('pageList', 'copy')
      },
      {
        name: '删除',
        onClick: (row: Res) => handleDelete(row),
        auth: checkAuth('pageList', 'del')
      },
    ],
  },
]
```

## 事件

| 名称             | 说明         | 回调参数       |
| ---------------- | ------------ | -------------- |
| selection-change | 多选变化触发 | 选中的数据集合 |

## 方法

| 名称       | 说明         | 参数           |
| ---------- | ------------ | -------------- |
| setLoading | 设置加载状态 | state: boolean |

## 插槽

- 部分字段需要特殊处理，直接使用和 prop 同名的具名插槽即可

```html
<TableModel :data="tableData" ref="tableRef" :header="header">
  <template #region="{row}"> {{ row.region.join() }} </template>
</TableModel>
```
