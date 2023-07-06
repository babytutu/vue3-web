import { http } from '@/utils/http'

export const getOptions = async () => {
  let options: any = {}
  const local = sessionStorage.getItem('options')

  if (local) {
    Object.assign(options, JSON.parse(local))
  } else {
    const { result } = await http('https://5ykenqzacs.hk.aircode.run/getAllList', {
      type: 'options',
    })
    result.forEach((i: any) => {
      if (!options[i.type]) {
        options[i.type] = []
      }
      options[i.type].push(i)
    })
    sessionStorage.setItem('options', JSON.stringify(options))
  }
  return options
}
