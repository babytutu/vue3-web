<template>
  <el-radio-group v-model="height" @change="changeSize">
    <el-radio-button label="300px" />
    <el-radio-button label="500px" />
  </el-radio-group>
  <el-radio-group v-model="type" @change="changeType">
    <el-radio-button label="bar" />
    <el-radio-button label="line" />
  </el-radio-group>
  <div class="chartDom" :style="{ height }">
    <echartModel ref="chartDom" :options="defaultOptions(type)"></echartModel>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

// 指定图表的配置项和数据
const defaultOptions = (type: string) => ({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type,
    },
  ],
})

const height = ref('300px')
const chartDom = ref()
const type = ref('bar')

function changeSize(size: any) {
  chartDom.value?.resize({
    height: size,
  })
}

function changeType(val: any) {
  type.value = val
}

</script>
<style>
.chartDom {
  width: 100%;
}
</style>
