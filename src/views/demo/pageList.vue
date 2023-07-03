<template>
  <div class="flex">
    <div>
      <el-button type="primary" @click="getList">刷新</el-button>
    </div>
    <div class="flex-content">
      <el-table v-loading="loading" :data="tableData" height="100%">
        <el-table-column v-for="i in header" :key="i" :prop="i" :label="i" />
        <el-table-column label="操作" width="150">
          <template #default="scope">
            <el-button link type="primary" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button link type="primary" @click="handleDetail(scope.row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="flex-footer">
      <pageModel
        ref="pageModel"
        :total="total"
        :default-page-size="10"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { http } from '@/utils/http'

const router = useRouter()
const page = ref<number>(1)
const loading = ref(true)
const tableData = ref<Array<any>>([])
const total = ref<number>(0)
const size = ref(10)

const header: string[] = ['name', 'region', 'num', 'type']

const handleSizeChange = (val: number) => {
  size.value = val
  page.value = 1
  getList()
}

const handleCurrentChange = (val: number) => {
  page.value = val
  getList()
}

const getList = () => {
  loading.value = true
  http(`https://5ykenqzacs.hk.aircode.run/getList`, {
    type: 'demoList',
    size: size.value,
    page: page.value,
  })
    .then((res) => {
      tableData.value = res.result || []
      total.value = res.total || 0
      loading.value = false
    })
    .catch(() => {
      tableData.value = []
      loading.value = false
      total.value = 0
    })
}

const handleDetail = (item: any) => {
  router.push(`/detailInfo/${item._id}`)
}

const handleEdit = (item: any) => {
  router.push(`/editForm/${item._id}`)
}

onMounted(() => {
  getList()
})
</script>
