<template>
  <el-tabs
    v-model="activeKey"
    type="card"
    class="tabMenu"
    @tab-remove="removeTab"
    @tab-change="changeTab"
  >
    <el-tab-pane
      v-for="pane in panes"
      :key="pane.path"
      :name="pane.path"
      :label="pane.title"
      :closable="pane.closable !== false"
    >
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

// 页签类型
export interface tabType {
  title: string
  path: string
  closable?: boolean
}

const router = useRouter() // 全局路由对象

export interface Props {
  homeTab?: tabType
}

const props = withDefaults(defineProps<Props>(), {
  homeTab: () => ({
    title: '首页',
    path: '/home',
    closable: false,
  })
})

// 页签数组初始化
const panes = ref<Array<tabType>>([props.homeTab])

const activeKey = ref(panes.value[0].path) // 当前激活的tab页的key

// 添加tab页签，选中侧边栏菜单项时调用
const addTab = (paneObj: tabType) => {
  let oneTab = panes.value.find(i => i.path === paneObj.path)
  if (!oneTab) {
    // 页签不存在，创建页签
    panes.value.push(paneObj)
  }
  // 高亮页签
  activeKey.value = paneObj.path
}

// 关闭页签函数
const removeTab = (targetKey: string) => {
  const tabs = panes.value
  // 如关闭高亮页签，找到最近一次激活的页签并激活
  if (activeKey.value === targetKey) {
    const index = tabs.findIndex(tab => tab.path === targetKey)
    const nextTab = tabs[index + 1] || tabs[index - 1] || tabs[0]
    activeKey.value = nextTab.path
  }
  panes.value = panes.value.filter((pane) => pane.path !== targetKey)
}

// 页签变更时触发
const changeTab = (activeKeyId: string) => {
  let oneTab = panes.value.find((i: tabType) => i.path === activeKeyId)
  // 路由不相同触发页面跳转
  if (oneTab && router.currentRoute.value.path !== oneTab.path) {
    router.push(oneTab.path)
  }
}

defineExpose({ addTab }) // 定义可被父组件调用的组件

// 路由变更触发页签变更
watch(() =>
  router.currentRoute.value.path,
  (path) => {
    // 从路由配置获取页签信息
    const {
      title,
      closable = true
    } = router.currentRoute.value.meta
    addTab({
      title,
      closable,
      path
    })
  },
)
</script>

<style scoped>
:global(.tabMenu .el-tabs__header) {
  margin: 0;
}
:global(.tabMenu .is-icon-close) {
  width: 14px !important;
}

:global(.tabMenu .el-tabs__item) {
  padding: 0 15px !important;
}
</style>
