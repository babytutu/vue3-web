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
      <template #label>
        <div
          @contextmenu="(e: MouseEvent) => contextmenu(e, pane.path)"
          v-click-outside="closeMenu"
        >
          {{ pane.title }}
        </div>
      </template>
    </el-tab-pane>
    <el-popover
      ref="tooltipRef"
      :virtual-ref="buttonRef"
      virtual-triggering
      popper-class="popperMenu"
      width="120px"
      :visible="visible"
    >
      <ul>
        <li @click="emit('reloadTab', clickMenu)">刷新页面</li>
        <li @click="closeOtherTabs">关闭其他</li>
        <li @click="closeAllTabs">关闭所有</li>
      </ul>
    </el-popover>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { type TabPaneName } from 'element-plus'

// Tab
export interface TabType {
  title: string
  path: string
  closable?: boolean
}

const router = useRouter()

export interface Props {
  homeTab?: TabType
}

const props = withDefaults(defineProps<Props>(), {
  homeTab: () => ({
    title: '首页',
    path: '/home',
    closable: false,
  }),
})

const emit = defineEmits(['reloadTab', 'delCache'])

const panes = ref<Array<TabType>>([props.homeTab])

const activeKey = ref(panes.value[0].path)

// 添加tab页签，选中侧边栏菜单项时调用
const addTab = (paneObj: TabType) => {
  let oneTab = panes.value.find((i) => i.path === paneObj.path)
  if (!oneTab) {
    // 页签不存在，创建页签
    panes.value.push(paneObj)
  }
  // 高亮页签
  activeKey.value = paneObj.path
}

// 关闭页签函数
const removeTab = (targetKey: TabPaneName) => {
  const tabs = panes.value
  // 如关闭高亮页签，找到最近一次激活的页签并激活
  if (activeKey.value === targetKey) {
    const index = tabs.findIndex((tab) => tab.path === targetKey)
    const nextTab = tabs[index + 1] || tabs[index - 1] || tabs[0]
    activeKey.value = nextTab.path
  }
  // 清除keepAlive缓存
  emit('delCache', targetKey)
  panes.value = panes.value.filter((pane) => pane.path !== targetKey)
}

// 右键菜单
const visible = ref<boolean>(false)
const clickMenu = ref<string>('')
const buttonRef = ref()

// 指令，点击其他元素后执行
const vClickOutside = {
  mounted(el: any, binding: any) {
    el.handler = function (e: any) {
      if (!el.contains(e.target)) {
        binding.value(e)
      }
    }
    document.addEventListener('click', el.handler, true)
  },
  unmounted(el: any) {
    document.removeEventListener('click', el.handler)
  },
}

// 打开右键菜单
const contextmenu = (e: MouseEvent, path: string) => {
  e.preventDefault()
  buttonRef.value = e.currentTarget
  visible.value = true
  clickMenu.value = path
}

// 关闭所有
const closeAllTabs = () => {
  closeMenu()
  panes.value = panes.value.filter((pane) => pane.closable === false)
  activeKey.value = panes.value[0].path
}

// 关闭其他
const closeOtherTabs = () => {
  closeMenu()
  panes.value = panes.value.filter(
    (pane) => clickMenu.value === pane.path || pane.closable === false
  )
  activeKey.value = clickMenu.value
}

// 关闭菜单
const closeMenu = () => {
  visible.value = false
}

// 页签变更时触发
const changeTab = (activeKeyId: TabPaneName) => {
  let oneTab = panes.value.find((i: TabType) => i.path === activeKeyId)
  // 路由不相同触发页面跳转
  if (oneTab && router.currentRoute.value.path !== oneTab.path) {
    router.push(oneTab.path)
  }
}

defineExpose({ addTab, removeTab })

// 路由变更触发页签变更
watch(
  () => router.currentRoute.value.path,
  (path) => {
    // 从路由配置获取页签信息
    const { title, closable = true } = router.currentRoute.value.meta
    addTab({
      title,
      closable,
      path,
    })
  }
)
</script>

<style lang="stylus" scoped>
:global(.tabMenu .el-tabs__header) {
  margin: 0;
}
:global(.tabMenu .is-icon-close) {
  width: 14px !important;
}

:global(.tabMenu .el-tabs__item) {
  padding: 0 14px !important;
}

:global(.popperMenu) {
  padding 0 !important
  min-width 120px !important
}
.popperMenu {
  ul {
    margin 0
    list-style none
    padding 0
    line-height 40px
    text-align center
    cursor pointer
    li:hover {
      color: #409eff
      background-color: #ecf5ff
    }
  }
}
</style>
