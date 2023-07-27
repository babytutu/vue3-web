import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Auth {
  [key: string]: string
}

// 权限验证方法集合
export const useAuthStore = defineStore('auth', () => {
  // 权限集合
  const authModel = ref<Auth>({})

  // 新增权限
  function setAuth(path: string, authList: string) {
    authModel.value[path] = authList
  }

  // 删除权限
  function removeAuth(path: string) {
    delete authModel.value[path]
  }

  // 验证是否有权限
  function checkAuth(path: string, type: string): boolean {
    return Boolean(path && authModel.value[path]?.includes(type))
  }

  return { authModel, setAuth, removeAuth, checkAuth }
})
