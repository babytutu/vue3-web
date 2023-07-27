import { http } from '@/utils/http'

export interface Res {
  [key: string]: any
}

export const getOptions = async (): Promise<Res> => {
  let options: any = {}
  const local = sessionStorage.getItem('options')

  if (local) {
    Object.assign(options, JSON.parse(local))
  } else {
    const { result } = await http('https://5ykenqzacs.hk.aircode.run/getAllList', {
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

export const getAuth = async (path: string): Promise<Res> => {
  const {
    result: [auth],
  } = await http('https://5ykenqzacs.hk.aircode.run/getAllList', {
    type: 'auth',
    search: {
      path,
    },
  })
  return auth?.auth || ''
}

export const getItem = async (id: string): Promise<Res> => {
  const { result } = await http('https://5ykenqzacs.hk.aircode.run/getItem', {
    type: 'demoList',
    id,
  })
  return result
}