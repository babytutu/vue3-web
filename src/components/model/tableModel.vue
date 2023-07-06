<template>
  <el-table
    @selection-change="selectionChange"
    ref="tableModelRef"
    v-loading="loading"
    :data="data"
    height="100%"
    border
  >
    <el-table-column v-if="selection" type="selection" width="55" />
    <el-table-column type="index" width="50" />
    <el-table-column
      v-for="i in header"
      :key="i.prop"
      :prop="i.prop"
      :width="i.width"
      :label="i.label"
      :fixed="i.fixed"
      :sortable="i.sortable"
    >
      <template #default="{ row }">
        <slot :name="i.prop" :row="row">
          <template v-if="i.prop === 'action'">
            <el-button
              v-for="item in i.options"
              :key="item.name"
              link
              type="primary"
              @click="item.onClick(row)"
              >{{ item.name }}</el-button
            >
          </template>
          <div v-else v-text="row[i.prop]"></div>
        </slot>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const emit = defineEmits(['selection-change'])

const loading = ref(false)

const tableModelRef = ref()

interface options {
  name: string
  onClick: any
}

interface headerType {
  prop: string
  label: string
  fixed?: boolean | string
  sortable?: boolean | string
  width?: string
  options?: Array<options>
}

defineProps({
  data: Array<any>,
  header: {
    type: Array<headerType>,
    required: true,
  },
  selection: {
    type: Boolean,
  },
})

function setLoading(state: boolean) {
  loading.value = state
}

function selectionChange(rows: any[]) {
  emit('selection-change', rows)
}

defineExpose({ setLoading })
</script>
