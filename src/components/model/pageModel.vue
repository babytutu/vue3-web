<template>
  <el-pagination
    class="pagination"
    v-model:current-page="page"
    v-model:page-size="pageSize"
    :background="props.background"
    :small="props.small"
    :layout="props.layout"
    :total="props.total"
    :page-sizes="props.pageSizes"
    :default-page-size="props.defaultPageSize"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const emit = defineEmits(['size-change', 'current-change'])

/**
 * Pagination
 * @see https://element-plus.org/zh-CN/component/pagination.html#api
 */
export interface Props {
  total: number
  pageSizes?: Array<number>
  layout?: string
  small?: boolean
  background?: boolean
  defaultPageSize?: number
}

const props = withDefaults(defineProps<Props>(), {
  total: 0,
  pageSizes: () => [10, 20, 50, 100],
  layout: 'total, sizes, ->, prev, pager, next',
  small: true,
  background: true,
  defaultPageSize: 20,
})

const page = ref(1)
const pageSize = ref(props.defaultPageSize)

const handleSizeChange = (val: number) => {
  page.value = 1
  emit('size-change', val)
}

const handleCurrentChange = (val: number) => emit('current-change', val)
</script>
<style lang="stylus" scoped>
.pagination {
  padding-top 10px
}
</style>
