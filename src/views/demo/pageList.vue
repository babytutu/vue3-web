<template>
  <Layout>
    <template #header>
      <formModel
        inline
        label-width="60px"
        ref="searchFormRef"
        :formData="searchForm"
        :formItem="searchItem"
        @submit="getList"
      >
        <el-button type="primary" @click="handleAdd">新增</el-button>
        <el-button type="primary" :disabled="!selectRows.length" @click="handleBatchDelete">批量删除</el-button>
      </formModel>
    </template>
    <TableModel @selection-change="changeRows" selection :data="tableData" ref="tableRef" :header="header"> </TableModel>
    <template #footer>
      <pageModel
        ref="pageModel"
        :total="total"
        :default-page-size="10"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, onActivated } from 'vue'
import { useRouter } from 'vue-router'
import { http } from '@/utils/http'
import { useTabStore } from '@/stores/tab'

const store = useTabStore()

const router = useRouter()
const page = ref<number>(1)
const total = ref<number>(0)
const size = ref(10)

const tableData = ref<Array<any>>([])
const selectRows = ref<Array<any>>([])

const tableRef = ref()
const searchFormRef = ref()

const searchForm = reactive({
  type: '',
  name: '',
})

const searchItem = reactive<any[]>([
  {
    label: '名称',
    prop: 'name',
    type: 'input',
  },
  {
    type: 'searchBtn',
  },
])

const header: any[] = [
  {
    prop: 'name',
    label: '名称',
  },
  {
    prop: 'region',
    label: '地区',
  },
  {
    prop: 'num',
    label: '数量',
  },
  {
    prop: 'type',
    label: '类型',
  },
  {
    prop: 'action',
    label: '操作',
    width: '220',
    options: [
      {
        name: '查看',
        onClick: (row: any) => handleDetail(row),
      },
      {
        name: '编辑',
        onClick: (row: any) => handleEdit(row),
      },
      {
        name: '复制',
        onClick: (row: any) => handleCopy(row),
      },
      {
        name: '删除',
        onClick: (row: any) => handleDelete(row),
      },
    ],
  },
]

const handleSizeChange = (val: number) => {
  size.value = val
  page.value = 1
  getList()
}

const handleCurrentChange = (val: number) => {
  page.value = val
  getList()
}

const getList = async () => {
  const { data } = await searchFormRef.value?.submitForm()
  tableRef.value?.setLoading(true)
  searchFormRef.value?.setLoading(true)
  http(`https://5ykenqzacs.hk.aircode.run/getList`, {
    type: 'demoList',
    size: size.value,
    page: page.value,
    search: data
  })
    .then((res) => {
      tableData.value = res.result || []
      total.value = res.total || 0
      tableRef.value?.setLoading(false)
      searchFormRef.value?.setLoading(false)
    })
    .catch(() => {
      tableData.value = []
      total.value = 0
      tableRef.value?.setLoading(false)
      searchFormRef.value?.setLoading(false)
    })
}

const handleAdd = () => {
  router.push('/addForm')
}

const handleDetail = (item: any) => {
  router.push(`/detailInfo/${item._id}`)
}

const handleEdit = (item: any) => {
  router.push(`/editForm/${item._id}`)
}

const handleCopy = (item: any) => {
  router.push(`/copyForm/${item._id}`)
}

const handleDelete = (item: any) => {
  ElMessageBox.alert(`确定删除${item.name}`, '删除', {
    confirmButtonText: 'OK',
    callback: (action: string) => {
      if (action === 'confirm') {
        http('https://5ykenqzacs.hk.aircode.run/removeItem', {
          type: 'demoList',
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

const changeRows = (rows: any[]) => {
  selectRows.value = rows
}

const handleBatchDelete = () => {
  ElMessageBox.alert(`确定删除${selectRows.value.length}条记录`, '删除', {
    confirmButtonText: 'OK',
    callback: (action: string) => {
      if (action === 'confirm') {
        http('https://5ykenqzacs.hk.aircode.run/removeItems', {
          type: 'demoList',
          ids: selectRows.value.map((i: any) => i._id),
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

onMounted(() => {
  getList()
})

onActivated(() => {
  store.checkPath('pageList', () => {
    getList()
  })
})
</script>
