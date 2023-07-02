<template>
  <div class="flex">
    <div class="flex-content">
      <el-table v-loading="loading" :data="tableData" height="100%">
        <el-table-column v-for="i in header" :key="i" :label="i" :prop="i" />
        <el-table-column label="操作" width="80">
          <template #default="scope">
            <el-button link type="primary" @click="handleDetail(scope.row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { get } from '@/utils/http'
import { useRouter } from 'vue-router'

const router = useRouter()

const loading = ref(true)
const tableData = ref<Array<any>>([])

const header: string[] = ['isbn', 'title', 'author', 'publisher', 'published']

const handleDetail = (item: any) => {
  router.push(`/detailInfo/${item.id}`)
}

const getList = () => {
  loading.value = true
  tableData.value = []
  get(`https://fakerapi.it/api/v1/books?_quantity=20&_characters=50`)
    .then((res: any) => {
      tableData.value = res.data
      loading.value = false
    })
    .catch(() => {
      loading.value = false
    })
}

onMounted(() => {
  getList()
})
</script>
