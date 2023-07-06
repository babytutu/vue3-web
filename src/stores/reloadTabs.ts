import { ref } from 'vue'
import { defineStore } from 'pinia'

// 缓存需要刷新的tab集合
export const useReloadTabsStore = defineStore('reloadTabs', () => {
  const reloadList = ref<string[]>([])

  // 新增需要刷新的tab
  function addReloadTab(path: string) {
    if (!reloadList.value.includes(path)) {
      reloadList.value.push(path)
    }
  }

  // 删除需要刷新的tab
  function removeReloadTab(path: string) {
    reloadList.value = reloadList.value.filter((i: string) => i !== path)
  }

  // 验证是否存在需要刷新的tab
  function checkReload(path: string, callback: any) {
    if (reloadList.value.includes(path)) {
      removeReloadTab(path)
      callback && callback()
    }
  }

  return { reloadList, addReloadTab, removeReloadTab, checkReload }
})
