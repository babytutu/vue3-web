# 表单常用功能封装

[Form 表单](https://element-plus.org/zh-CN/component/form.html)

## 参数

|名称|说明|类型|是否必填|
|---|---|---|---|
|formData|表单数据合集|Object|是|
|formItem|表单内容配置|Array\<formType>|是|
|itemStyle|输入框样式|默认宽度220px|否|
|inline|是否行内表单|boolean|否|
|size|表单尺寸|string|否|
|labelWidth|标签宽度|string|否|

- formType

|名称|说明|类型|是否必填|
|---|---|---|---|
|prop|Model 的键名|string|是|
|type|form类型|string|否|
|label|标签名|string|否|
|rules|验证规则|any[]|否|
|min|数字输入最小值|number|否|
|max|数字输入最大值|number|否|
|options|下拉菜单，多选参数配置数组|Array\<options>|否|
|datetype|时间控件类型|string|否|
|format|时间控件格式|string|否|
|maxlength|输入框最大长度|number|否|
|style|样式|any|否|
|multiple|是否多选|boolean|否|
|row|textarea行数|number|否|

- options

快捷配置radio,checkbox,select

|名称|说明|类型|是否必填|
|---|---|---|---|
|label|radio,checkbox,select|string|是|
|value|select|string|否|
|name|radio,checkbox|string|否|

### 类型定义

```ts
interface options {
  label: string
  value?: any
  name?: string
}

export interface formType {
  prop: string
  type?: string
  label?: string
  rules?: any[]
  min?: number
  max?: number
  options?: Array<options>
  datetype?: string
  format?: string
  maxlength?: number
  style?: any
  multiple?: boolean
  row?: number
}

export interface Props {
  formData: any
  formItem: Array<formType>
  itemStyle?: any
  inline?: boolean
  size?: string
  labelWidth?: string
}

const props = withDefaults(defineProps<Props>(), {
  formData: undefined,
  formItem: undefined,
  itemStyle: {
    width: '220px'
  },
  inline: false,
  size: '',
  labelWidth: '',
})
```

## 方法

|名称|说明|传参|回调参数|
|---|---|---|---|
|submitForm|返回验证结果，表单数据，错误数据||{valid: boolean, data: any, fields: any}|
|resetFields|重置表单|||
|validateField|验证单个表单项|field: string||
|changeValue|变更表单值|key: string, value: any||
|setLoading|设置加载状态|state: boolean||


## 事件

配合快捷按钮使用

|名称|说明|
|---|---|---|
|submit|点击提交按钮|
|close|点击关闭按钮|

## 快捷按钮

通过2个特殊prop展示常用按钮组合

### 查询/重置

- searchBtn 查询和重置按钮对应的外部方法submit，如加载列表

```html
<formModel
  inline
  ref="searchFormRef"
  :formData="searchForm"
  :formItem="searchItem"
  @submit="getList"
>
</formModel>
```

```js
const searchFormRef = ref()

const searchForm = reactive({
  type: '',
  label: '',
})

const searchItem = reactive<any[]>([
  {
    label: '类型',
    prop: 'type',
    type: 'select',
    options: [
      {
        label: '线上',
        value: '线上'
      }
    ],
  },
  {
    label: '名称',
    prop: 'label',
    type: 'input',
  },
  {
    prop: 'searchBtn',
  },
])
```

### 提交/关闭

- submitBtn 提交和关闭按钮，对应方法分别是`submit`和`close`

```html
<formModel
  label-width="90px"
  ref="ruleFormRef"
  :formData="form"
  :formItem="formItem"
  @submit="submit"
  @close="close"
>
</formModel>
```

```js
const ruleFormRef = ref()

const form = reactive({
  label: '',
  value: '',
  type: 'type',
})

const formItem = reactive<any[]>([
  {
    label: '类型',
    prop: 'type',
    type: 'select',
    options: [
      {
        label: '线上',
        value: '线上'
      }
    ],
  },
  {
    label: '名称',
    prop: 'label',
    rules: [{ required: true, message: '请输入名称', trigger: 'blur' }],
    type: 'input',
  },
  {
    label: '值',
    prop: 'value',
    rules: [{ required: true, message: '请输入值', trigger: 'blur' }],
    type: 'input',
  },
  {
    prop: 'submitBtn',
  },
])
```

## 插槽

- 部分字段需要特殊处理，直接使用和prop同名的具名插槽即可

- 默认插槽为空的表单内容

```html
<formModel
  ref="ruleFormRef"
  :formData="ruleForm"
  :formItem="formItem"
  label-width="120px"
>
  <template #test>
    <el-input v-model="ruleForm.test"></el-input>
  </template>
  <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
</formModel>
```
