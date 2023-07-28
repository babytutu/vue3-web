<template>
  <Layout>
    <template #header>
      <formModel
        inline
        ref="searchFormRef"
        :formData="searchForm"
        :formItem="searchItem"
        @submit="getListData"
      >
        <auth type="add">
          <el-button type="primary" @click="handleAdd">新增</el-button>
        </auth>
        <auth type="del">
          <el-button type="primary" :disabled="!selectRows.length" @click="handleBatchDelete"
            >批量删除</el-button
          >
        </auth>
      </formModel>
    </template>
    <TableModel
      @selection-change="changeRows"
      selection
      :data="tableData"
      ref="tableRef"
      :header="header"
    >
      <template #region="{ row }">
        {{ row.region.join() }}
      </template>
      <template #type="{ row }">
        <el-space wrap>
          <el-tag v-for="i in row.type" :key="i">{{ i }}</el-tag>
        </el-space>
      </template>
    </TableModel>
    <template #footer>
      <pageModel
        ref="pageModel"
        :total="pageData.total"
        :default-page-size="20"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import { ref, reactive, onBeforeMount, computed } from 'vue'
import { useRouter } from 'vue-router'
import { removeItem, getList, removeItems } from '@/utils/apis'
import { getOptions, type Res } from '@/utils/apis'
import { useAuthStore } from '@/stores/auth'

const { checkAuth } = useAuthStore()

const router = useRouter()

const pageData = reactive<Res>({
  page: 1,
  total: 0,
  size: 20,
})

const options = ref<Res>({})

const tableData = ref<Array<Res>>([])
const selectRows = ref<Array<Res>>([])

const tableRef = ref()
const searchFormRef = ref()

const searchForm = reactive({
  type: '',
  name: '',
})

const searchItem = computed(() => [
  {
    label: '名称',
    prop: 'name',
    type: 'input',
  },
  {
    label: '活动地区',
    prop: 'region',
    type: 'select',
    options: options.value.region,
  },
  {
    label: '活动分类',
    prop: 'type',
    type: 'select',
    options: options.value.type,
  },
  {
    prop: 'searchBtn',
  },
])

const header = [
  {
    prop: 'name',
    label: '活动名称',
  },
  {
    prop: 'region',
    label: '活动地区',
  },
  {
    prop: 'type',
    label: '活动分类',
  },
  {
    prop: 'createdAt',
    label: '创建时间',
    sortable: true,
    width: '240',
  },
  {
    prop: 'updatedAt',
    label: '更新时间',
    sortable: true,
    width: '240',
  },
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

const handleSizeChange = (val: number) => {
  pageData.size = val
  pageData.page = 1
  getListData()
}

const handleCurrentChange = (val: number) => {
  pageData.page = val
  getListData()
}

const getListData = async () => {
  const { data } = await searchFormRef.value?.submitForm()
  tableRef.value?.setLoading(true)
  searchFormRef.value?.setLoading(true)
  const res = await getList({
    type: 'demoList',
    size: pageData.size,
    page: pageData.page,
    search: data,
  })
  if (res.success) {
    tableData.value = res.result || []
    pageData.total = res.total || 0
    tableRef.value?.setLoading(false)
    searchFormRef.value?.setLoading(false)
  } else {
    tableData.value = []
    pageData.total = 0
    tableRef.value?.setLoading(false)
    searchFormRef.value?.setLoading(false)
  }
}

const handleAdd = () => {
  router.push('/addForm')
}

const handleDetail = (item: Res) => {
  router.push(`/detailInfo/${item._id}`)
}

const handleEdit = (item: Res) => {
  router.push(`/editForm/${item._id}`)
}

const handleCopy = (item: Res) => {
  router.push(`/copyForm/${item._id}`)
}

const handleDelete = (item: Res) => {
  ElMessageBox.alert(`确定删除${item.name}`, '删除', {
    confirmButtonText: 'OK',
    callback: async (action: string) => {
      if (action === 'confirm') {
        const success = await removeItem({
          type: 'demoList',
          id: item._id,
        })
        if (success) {
          ElMessage.success('删除成功')
          getListData()
        } else {
          ElMessage.error('删除失败')
        }
      }
    },
  })
}

const changeRows = (rows: Res[]) => {
  selectRows.value = rows
}

const handleBatchDelete = () => {
  ElMessageBox.alert(`确定删除${selectRows.value.length}条记录`, '删除', {
    confirmButtonText: 'OK',
    callback: async (action: string) => {
      if (action === 'confirm') {
        const success = await removeItems({
          type: 'demoList',
          ids: selectRows.value.map((i: Res) => i._id),
        })
        if (success) {
          ElMessage.success('删除成功')
          getListData()
        } else {
          ElMessage.error('删除失败')
        }
      }
    },
  })
}

onBeforeMount(async () => {
  options.value = await getOptions()
  getListData()
})
</script>
