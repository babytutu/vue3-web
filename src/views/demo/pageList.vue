<template>
  <div class="flex">
    <el-form :inline="true" :model="formInline" @submit.prevent>
      <el-form-item>
        <el-select v-model="formInline.key" @change="onSubmit">
          <el-option v-for="item in options" :key="item" :label="item" :value="item" />
        </el-select>
      </el-form-item>
    </el-form>
    <div class="flex-content">
      <el-table v-loading="loading" :data="tableData" height="100%">
        <el-table-column v-for="i in tableHeader" :key="i" :prop="i" :label="i" />
        <el-table-column label="操作" width="80">
          <template #default="scope">
            <el-button link type="primary" @click="handleDetail(scope.row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="flex-footer">
      <pageModel
        ref="page"
        :total="total"
        :default-page-size="20"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { get } from '@/utils/http'
import { useRouter } from 'vue-router'

const router = useRouter()

const formInline = ref({
  key: 'books',
})

const page = ref()
const loading = ref(true)
const tableData = ref<Array<any>>([])
const total = ref<number>(0)
const size = ref(20)

const options = ['books', 'addresses', 'users']
const headers: any = {
  books: ['isbn', 'title', 'author', 'publisher', 'published'],
  addresses: ['country', 'city', 'streetName', 'street', 'zipcode'],
  users: ['uuid', 'username', 'lastname', 'website'],
}

const tableHeader = ref(headers['books'])

const onSubmit = () => {
  tableHeader.value = headers[formInline.value.key]
  getList()
}

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
  tableData.value = []
  get(`https://fakerapi.it/api/v1/${formInline.value.key}?_quantity=${size.value}&_characters=50`)
    .then((res) => {
      tableData.value = res.data || []
      total.value = (res.total || 0) * 5
      loading.value = false
    })
    .catch(() => {
      loading.value = false
      total.value = 0
    })
}

const handleDetail = (item: any) => {
  router.push(`/detailInfo/${item.id}`)
}

onMounted(() => {
  getList()
})
</script>
