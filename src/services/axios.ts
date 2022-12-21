import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
  timeout: 1000,
  responseType: 'json'
})

const onPost = (
  url: string,
  data: object | null | undefined
) => {
  return instance({
    method: 'POST',
    url: url,
    data: data
  })
}

const onGet = (
  url: string,
  params: object | null | undefined
) => {
  return instance({
    method: 'GET',
    url: url,
    params: params
  })
}

const onPatch = (
  url: string,
  data: object | null | undefined
) => {
  return instance({
    method: 'PATCH',
    url: url,
    data: data
  })
}

const onPut = (
  url: string,
  data: object | null | undefined
) => {
  return instance({
    method: 'PUT',
    url: url,
    data: data
  })
}

const onDelete = (
  url: string,
  params: object | null | undefined
) => {
  return instance({
    method: 'DELETE',
    url: url,
    params: params
  })
}

export { onPost, onGet, onPatch, onPut, onDelete }
