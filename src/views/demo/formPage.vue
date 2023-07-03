<template>
  <formModel v-loading="loading" ref="ruleFormRef" :formData="ruleForm" :formItem="formItem" :itemStyle="itemStyle">
    <template #name>
      <el-button type="primary" @click="changeValue('name', 'test')">修改活动名称</el-button>
    </template>
    <el-button type="primary" @click="submitForm">提交</el-button>
    <el-button @click="resetForm">重置</el-button>
  </formModel>
</template>

<script lang="ts" setup>
import { onBeforeMount, reactive, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import type { formType } from '@/components/model/formModel.vue'
import { http } from '@/utils/http'

import { inject } from 'vue'

const removeTab: any = inject('removeTab')

const route = useRoute()
const id: any = route.params.id

const loading = ref(true)

const ruleFormRef = ref<any>()

const ruleForm = reactive<any>({
  name: '',
  num: 1,
  region: ['上海'],
  datetime: [],
  delivery: false,
  type: [],
  resource: '实物',
  desc: '呵呵',
  test: 'abc',
})

const itemStyle = {
  width: '220px',
}

const options = reactive<any>({})

const getOptions = async () => {
  const local = sessionStorage.getItem('options')

  if (local) {
    Object.assign(options, JSON.parse(local))
    return
  }
  const { result } = await http('https://5ykenqzacs.hk.aircode.run/getAllList', {
    type: 'options'
  })
  result.forEach((i: any) => {
    if (!options[i.type]) {
      options[i.type] = []
    }
    options[i.type].push(i)
  })
  sessionStorage.setItem('options', JSON.stringify(options))
}

const formItem = computed<formType[]>(() => [
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
    options: options.region,
    multiple: true,
  },
  {
    label: '活动时间',
    prop: 'datetime',
    rules: [{ required: true, message: '请选择活动时间', trigger: 'change' }],
    type: 'datetimerange',
    style: {
      width: '500px',
    },
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
    options: options.type,
  },
  {
    label: '资源类型',
    prop: 'resource',
    type: 'radio',
    options: options.resource,
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
  {
    label: '说明',
    prop: 'test',
    type: 'input'
  }
])

const submitForm = async () => {
  const { valid, data } = await ruleFormRef.value?.submitForm()
  if (valid) {
    if (id) {
      http('https://5ykenqzacs.hk.aircode.run/editItem', {
        data,
        id,
        type: 'demoList',
      }).then(({ success }) => {
        if (success) {
          ElMessage('修改成功')
          removeTab(route.path)
        }
      })
    } else {
      http('https://5ykenqzacs.hk.aircode.run/addItem', {
        data,
        type: 'demoList',
      }).then(({ success }) => {
        if (success) {
          ElMessage.success('提交成功')
          removeTab(route.path)
        } else {
          ElMessage.error('提交失败')
        }
      })
    }
  }
}

const resetForm = () => {
  ruleFormRef.value?.resetForm()
}

const changeValue = (key: string, value: any) => {
  ruleFormRef.value?.changeValue(key, value)
}

const getItemById = (id: string) => {
  http('https://5ykenqzacs.hk.aircode.run/getItem', {
    type: 'demoList',
    id,
  }).then(({ success, result }) => {
    if (success && result) {
      Object.keys(result).forEach((i: string) => {
        if (!['_id', 'updatedAt', 'createdAt'].includes(i)) {
          ruleForm[i] = result[i]
        }
      })
    }
  })
}

onBeforeMount(async () => {
  // 获取下拉配置
  await getOptions()
  if (id) {
    await getItemById(id)
  }
  loading.value = false
})
</script>
