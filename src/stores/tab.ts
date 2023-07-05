import { ref } from 'vue'
import { defineStore } from 'pinia'

// 缓存需要刷新的tab集合
export const useTabStore = defineStore('tab', () => {
  const tabs = ref<string[]>([])

  // 新增需要刷新的tab
  function addTab(path: string) {
    if (!tabs.value.includes(path)) {
      tabs.value.push(path)
    }
  }

  // 删除需要刷新的tab
  function removeTab(path: string) {
    tabs.value = tabs.value.filter((i: string) => i !== path)
  }

  // 验证是否存在需要刷新的tab
  function checkPath(path: string, callback: any) {
    if (tabs.value.includes(path)) {
      removeTab(path)
      callback && callback()
    }
  }

  return { tabs, addTab, removeTab, checkPath }
})
