<template>
  <div class="chartDomStyle" ref="chartDom"></div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watch, shallowRef } from 'vue'
import echarts, { type ECOption } from '@/utils/echart'

const chartDom = ref<any>(null)

/**
 * @see https://echarts.apache.org/zh/faq.html
 * 如果你使用的是 Vue 3，请避免使用 reactive 及 ref。
 * 解决方案为：使用普通变量声明 ECharts 对象实例，或使用 shallowRef / shallowReactive / markRaw 等 API 防止 ECharts 对象实例被代理。
 */
const myChart = shallowRef<any>()

// 参数类型验证
interface Props {
  options: ECOption | Object
}

const props = defineProps<Props>()

const resize = (opt?: any) => {
  myChart.value?.resize(opt)
}

onMounted(() => {
  myChart.value = echarts.echarts.init(chartDom.value)
  myChart.value?.setOption(props.options)
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  window.removeEventListener('resize', resize)
})

watch(
  () => props.options,
  (newOptions) => {
    myChart.value?.setOption(newOptions)
  },
  {
    deep: true,
  }
)

defineExpose({ resize })
</script>
<style scoped>
.chartDomStyle {
  width: 100%;
  height: 100%;
}
</style>
