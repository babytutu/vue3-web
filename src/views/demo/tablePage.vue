<template>
  <div class="flex">
    <el-form :inline="true" :model="formInline" @submit.prevent>
      <el-form-item label="关键字">
        <el-select v-model="formInline.key">
          <el-option v-for="item in options" :key="item" :label="item" :value="item" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="flex-content">
      <el-table v-loading="loading" :data="tableData" height="100%">
        <el-table-column v-for="i in tableHeader" :key="i" :prop="i" :label="i" />
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

onMounted(() => {
  getList()
})
</script>
