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
        <el-button type="primary" @click="handleAdd">新增</el-button>
        <el-button type="primary" :disabled="!selectRows.length" @click="handleBatchDelete"
          >批量删除</el-button
        >
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
import { http } from '@/utils/http'
import { getOptions } from '@/utils/apis'

const router = useRouter()

const pageData = reactive<any>({
  page: 1,
  total: 0,
  size: 20,
})

const options = ref<any>({})

const tableData = ref<Array<any>>([])
const selectRows = ref<Array<any>>([])

const tableRef = ref()
const searchFormRef = ref()

const searchForm = reactive({
  type: '',
  name: '',
})

const searchItem = computed<any[]>(() => [
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

const header: any[] = [
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
  pageData.size = val
  pageData.page = 1
  getList()
}

const handleCurrentChange = (val: number) => {
  pageData.page = val
  getList()
}

const getList = async () => {
  const { data } = await searchFormRef.value?.submitForm()
  tableRef.value?.setLoading(true)
  searchFormRef.value?.setLoading(true)
  http(`https://5ykenqzacs.hk.aircode.run/getList`, {
    type: 'demoList',
    size: pageData.size,
    page: pageData.page,
    search: data,
  })
    .then((res) => {
      tableData.value = res.result || []
      pageData.total = res.total || 0
      tableRef.value?.setLoading(false)
      searchFormRef.value?.setLoading(false)
    })
    .catch(() => {
      tableData.value = []
      pageData.total = 0
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

onBeforeMount(async () => {
  options.value = await getOptions()
  getList()
})
</script>
