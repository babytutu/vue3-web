<template>
  <div class="flex">
    <el-form :inline="true" @submit.prevent>
      <el-form-item>
        <el-radio-group v-model="activeName" @change="getList">
          <el-radio-button v-for="i in cat" :key="i" :label="i" />
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div class="flex-content">
      <el-table v-loading="loading" :data="tableData" height="100%">
        <el-table-column label="Title" prop="title" />
        <el-table-column label="Price" prop="price" width="120" />
        <el-table-column label="Action" width="80">
          <template #default="scope">
            <el-button link type="primary" @click="handleDetail(scope.row)">Detail</el-button>
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

const cat: string[] = ['electronics', 'jewelery', "men's clothing", "women's clothing"]

const activeName = ref(cat[0])

const handleDetail = (item: any) => {
  router.push(`/detailInfo/${item.id}`)
}

const getList = () => {
  loading.value = true
  tableData.value = []
  get(`https://fakestoreapi.com/products/category/${activeName.value}`)
    .then((res: any) => {
      tableData.value = res
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
