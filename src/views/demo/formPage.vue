<template>
  <formModel v-if="loadEnd" ref="ruleFormRef" :formData="ruleForm" :formItem="formItem" :itemStyle="itemStyle">
    <el-button type="primary" @click="changeValue('name', 'test')">修改活动名称</el-button>
    <el-button type="primary" @click="submitForm">提交</el-button>
    <el-button @click="resetForm">重置</el-button>
  </formModel>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import type { formType } from '@/components/model/formModel.vue'

const loadEnd = ref(false)
const ruleFormRef = ref<any>()

const ruleForm = reactive<any>({
  name: '',
  num: 1,
  region: [],
  datetime: '',
  delivery: false,
  type: [],
  resource: '实物',
  desc: '',
})

const itemStyle = {
  width: '220px',
}

const formItem = reactive<formType[]>([
  {
    label: '活动名称',
    prop: 'name',
    rules: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
    type: 'input',
  },
  {
    label: '数量(1-10)',
    prop: 'num',
    rules: [{ required: true, message: '请输入数量', trigger: 'blur' }],
    min: 1,
    max: 10,
    type: 'input-number',
  },
  {
    label: '活动地区',
    prop: 'region',
    rules: [{ required: true, message: '请选择地区', trigger: 'change' }],
    type: 'select',
    options: [
      {
        label: '北京',
        value: '北京',
      },
      {
        label: '上海',
        value: '上海',
      },
      {
        label: '杭州',
        value: '杭州',
      },
    ],
    multiple: true,
  },
  {
    label: '活动时间',
    prop: 'datetime',
    rules: [{ type: 'date', required: true, message: '请选择活动时间', trigger: 'change' }],
    type: 'date',
    style: itemStyle,
  },
  {
    label: '快递',
    prop: 'delivery',
    type: 'switch',
  },
  {
    label: '活动分类',
    prop: 'type',
    type: 'checkbox',
    rules: [{ type: 'array', required: true, message: '请选择至少1个', trigger: 'change' }],
    options: [
      {
        label: '线上',
        name: '线上活动',
      },
      {
        label: '线下',
        name: '线下活动',
      },
    ],
  },
  {
    label: '资源类型',
    prop: 'resource',
    type: 'radio',
    options: [
      {
        label: '实物',
        name: '实物1',
      },
      {
        label: '电子券',
        name: '电子券1',
      },
    ],
  },
  {
    label: '说明',
    prop: 'desc',
    type: 'textarea',
    maxlength: 50,
    rules: [{ required: true, message: '请输入说明', trigger: 'blur' }],
    style: {
      width: '500px',
    },
    row: 3,
  },
])

const submitForm = async () => {
  const { valid, data } = await ruleFormRef.value?.submitForm()
  console.log(valid, data)
}

const resetForm = () => {
  ruleFormRef.value?.resetForm()
}

const changeValue = (key: string, value: any) => {
  ruleFormRef.value?.changeValue(key, value)
}

onMounted(() => {
  ruleForm.name = '活动名称是啥'
  loadEnd.value = true
})
</script>
