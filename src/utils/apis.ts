import { http } from '@/utils/http'
import { apiList } from '@/utils/serve'
export interface Res {
  [key: string]: any
}

export const getOptions = async (): Promise<Res> => {
  let options: any = {}
  const local = sessionStorage.getItem('options')

  if (local) {
    Object.assign(options, JSON.parse(local))
  } else {
    const { result } = await http(apiList.getAllList, {
      type: 'options',
    })
    if (result.length) {
      result.forEach((i: any) => {
        if (!options[i.type]) {
          options[i.type] = []
        }
        options[i.type].push(i)
      })
      sessionStorage.setItem('options', JSON.stringify(options))
    }
  }
  return options
}

export const getAuth = async (path: string): Promise<string> => {
  const {
    result: [auth],
  } = await http(apiList.getAllList, {
    type: 'auth',
    search: {
      path,
    },
  })
  return auth?.auth || ''
}

export const getItem = async (data: any): Promise<Res> => {
  const { result } = await http(apiList.getItem, data)
  return result
}

export const addOption = async (data: any): Promise<Res> => {
  const { result } = await http(apiList.addOption, data)
  return result
}

export const getAllList = async (data: any): Promise<Res[]> => {
  const { result } = await http(apiList.getAllList, data)
  return result
}

export const removeItem = async (data: any): Promise<Boolean> => {
  const { success } = await http(apiList.removeItem, data)
  return success
}

export const removeItems = async (data: any): Promise<Boolean> => {
  const { success } = await http(apiList.removeItems, data)
  return success
}

export const getList = async (data: any): Promise<Res> => {
  const result = await http(apiList.getList, data)
  return result
}

export const addItem = async (data: any): Promise<Boolean> => {
  const { success } = await http(apiList.addItem, data)
  return success
}

export const editItem = async (data: any): Promise<Boolean> => {
  const { success } = await http(apiList.editItem, data)
  return success
}
