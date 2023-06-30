interface Res {
  data: any
  infocode?: string
  code?: number
  total?: number
  result?: any
}

export async function http(url: string, body?: any): Promise<Res> {
  console.log(body)
  return await fetch(url, {
    body: body && JSON.stringify(body),
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  }).then((res) => res.json())
}

export async function get(url: string): Promise<Res> {
  return await fetch(url, {
    method: 'GET',
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  }).then((res) => res.json())
}
