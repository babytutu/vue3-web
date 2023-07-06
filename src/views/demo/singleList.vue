<template>
  <Layout>
    <template #header>
      <formModel
        inline
        ref="searchFormRef"
        :formData="searchForm"
        :formItem="searchItem"
        @submit="getList"
      >
        <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
      </formModel>
    </template>
    <TableModel :data="tableData" ref="tableRef" :header="header"> </TableModel>
    <infoDialog @submit="getList" v-model="dialogFormVisible" :typeOptions="typeOptions"></infoDialog>
  </Layout>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import { http } from '@/utils/http'
import infoDialog from './infoDialog.vue'

const tableData = ref<Array<any>>([])
const tableRef = ref()

const header: any[] = [
  {
    prop: 'type',
    label: '类型',
  },
  {
    prop: 'label',
    label: '名称',
  },
  {
    prop: 'value',
    label: '值',
  },
  {
    prop: 'createdAt',
    label: '创建时间',
    sortable: true,
  },
  {
    prop: 'action',
    label: '操作',
    width: '90',
    options: [
      {
        name: '删除',
        onClick: (row: any) => handleDelete(row),
      },
    ],
  },
]

const dialogFormVisible = ref(false)

const searchFormRef = ref()
const searchForm = reactive({
  type: '',
  label: '',
})

const typeOptions: any[] = [
  {
    label: '活动类型',
    value: 'type',
  },
  {
    label: '活动地区',
    value: 'region',
  },
  {
    label: '活动资源',
    value: 'resource',
  },
]

const searchItem = reactive<any[]>([
  {
    label: '类型',
    prop: 'type',
    type: 'select',
    options: typeOptions,
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

const getList = async () => {
  const { data } = await searchFormRef.value?.submitForm()
  tableData.value = []
  tableRef.value?.setLoading(true)
  searchFormRef.value?.setLoading(true)
  http(`https://5ykenqzacs.hk.aircode.run/getAllList`, {
    type: 'options',
    search: data,
  })
    .then((res: any) => {
      tableData.value = res.result
      tableRef.value?.setLoading(false)
      searchFormRef.value?.setLoading(false)
    })
    .catch(() => {
      tableRef.value?.setLoading(false)
      searchFormRef.value?.setLoading(false)
    })
}

onMounted(() => {
  getList()
})
</script>
