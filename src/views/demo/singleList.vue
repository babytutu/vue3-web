<template>
  <div class="flex">
    <div>
      <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
      <el-button type="primary" @click="getList">刷新</el-button>
    </div>
    <div class="flex-content">
      <el-table v-loading="loading" :data="tableData" height="100%">
        <el-table-column type="index" width="50" />
        <el-table-column v-for="i in header" :key="i" :label="i" :prop="i" />
        <el-table-column label="操作" width="90">
          <template #default="scope">
            <el-button link type="primary" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
  <el-dialog v-model="dialogFormVisible" title="新增" width="400px" @close="resetDialog">
    <formModel
      inline
      label-width="80px"
      ref="ruleFormRef"
      :formData="form"
      :formItem="formItem"
    ></formModel>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="addOption" :loading="loadingState"> 提交 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, onActivated } from 'vue'
import { http } from '@/utils/http'

const loading = ref(true)
const tableData = ref<Array<any>>([])

const header: string[] = ['type', 'label', 'value', 'createdAt']

const dialogFormVisible = ref(false)
const ruleFormRef = ref()
const loadingState = ref(false)

const form = reactive({
  label: '',
  value: '',
  type: 'type',
})

const formItem = reactive<any[]>([
  {
    label: 'label',
    prop: 'label',
    rules: [{ required: true, message: '请输入名称', trigger: 'blur' }],
    type: 'input',
  },
  {
    label: 'value',
    prop: 'value',
    rules: [{ required: true, message: '请输入值', trigger: 'blur' }],
    type: 'input',
  },
  {
    label: 'type',
    prop: 'type',
    type: 'select',
    options: [
      {
        label: 'type',
        value: 'type',
      },
      {
        label: 'region',
        value: 'region',
      },
      {
        label: 'resource',
        value: 'resource',
      },
    ],
  },
])

const handleDelete = (item: any) => {
  ElMessageBox.alert(`确定删除${item.label}`, '删除', {
    confirmButtonText: 'OK',
    callback: (action: string) => {
      if (action === 'confirm') {
        http('https://5ykenqzacs.hk.aircode.run/removeItem', {
          type: 'options',
          id: item._id,
        }).then(({ success }) => {
          if (success) {
            ElMessage.success('删除成功')
            getList()
          } else {
            ElMessage.error('删除失败')
          }
        })
      }
    },
  })
}

const addOption = async () => {
  const { valid, data } = await ruleFormRef.value?.submitForm()
  if (valid) {
    loadingState.value = true
    http(`https://5ykenqzacs.hk.aircode.run/addOption`, data).then(({ success }) => {
      if (success) {
        dialogFormVisible.value = false
        ElMessage.success('添加成功')
        getList()
      } else {
        ElMessage.error('添加失败')
        loadingState.value = false
      }
    }).catch(() => {
      loadingState.value = false
      ElMessage.error('添加失败')
    })
  }
}

const resetDialog = () => {
  ruleFormRef.value?.resetForm()
  loadingState.value = false
}

const getList = () => {
  loading.value = true
  tableData.value = []
  http(`https://5ykenqzacs.hk.aircode.run/getAllList`, {
    type: 'options',
  })
    .then((res: any) => {
      tableData.value = res.result
      loading.value = false
    })
    .catch(() => {
      loading.value = false
    })
}

onMounted(() => {
  getList()
})

onActivated(() => {
  getList()
})
</script>
