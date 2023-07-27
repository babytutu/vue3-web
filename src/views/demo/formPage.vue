<template>
  <el-scrollbar>
    <formModel
      v-loading="loading"
      ref="ruleFormRef"
      :formData="ruleForm"
      :formItem="formItem"
      label-width="120px"
      @submit="submitForm"
      @close="removeTab($route.path)"
    >
      <template #name>
        <el-button type="primary" @click="changeValue('name', 'test')">修改活动名称</el-button>
      </template>
      <template #test>
        <el-input v-model="ruleForm.test"></el-input>
      </template>
    </formModel>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { onBeforeMount, reactive, ref, computed, inject } from 'vue'
import { useRoute } from 'vue-router'
import { http } from '@/utils/http'
import { getOptions, type Res } from '@/utils/apis'

const removeTab = inject('removeTab') as Function
const reloadTab = inject('reloadTab') as Function

const route = useRoute()
const id = route.params.id as string
const copyId = route.params.copyId as string

const loading = ref(true)

const ruleFormRef = ref()

const ruleForm = reactive<Res>({
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

const options = ref<Res>({})

const formItem = computed(() => [
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
    options: options.value.region,
    multiple: true,
  },
  {
    label: '活动时间',
    prop: 'datetime',
    rules: [{ required: true, message: '请选择活动时间', trigger: 'change' }],
    dateType: 'datetimerange',
    type: 'date',
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
    options: options.value.type,
  },
  {
    label: '资源类型',
    prop: 'resource',
    type: 'radio',
    options: options.value.resource,
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
  },
  {
    prop: 'submitBtn',
  },
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
          ElMessage.success('修改成功')
          leavePage()
        } else {
          ElMessage.error('修改失败')
        }
      })
    } else {
      http('https://5ykenqzacs.hk.aircode.run/addItem', {
        data,
        type: 'demoList',
      }).then(({ success }) => {
        if (success) {
          ElMessage.success('提交成功')
          leavePage()
        } else {
          ElMessage.error('提交失败')
        }
      })
    }
  }
}

const leavePage = () => {
  reloadTab('/pageList')
  removeTab(route.path)
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
  options.value = await getOptions()
  if (id || copyId) {
    await getItemById(id || copyId)
  }
  loading.value = false
})
</script>
