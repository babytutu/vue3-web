<template>
  <div class="flex">
    <el-form :inline="true" @submit.prevent>
      <el-form-item>
        <el-button type="primary" @click="getList">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="flex-content">
      <el-table v-loading="loading" :data="tableData" height="100%">
        <el-table-column v-for="i in tableHeader" :key="i" :prop="i" :label="i" />
        <el-table-column label="操作" width="80">
          <template #default="scope">
            <el-button link type="primary" @click="handleDetail(scope.row)">查看</el-button>
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

const tableHeader = ref(['name', 'age'])

const handleDetail = (item: any) => {
  router.push(`/form/${item._id}`)
}

const getList = () => {
  loading.value = true
  tableData.value = []
  get(`https://87tetwnrqe.hk.aircode.run/getItem`)
    .then((res) => {
      tableData.value = res.result || []
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
