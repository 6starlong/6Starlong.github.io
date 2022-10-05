import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export class API {
  service: AxiosInstance

  constructor(config?: AxiosRequestConfig) {
    this.service = axios.create(config)

    this.service.interceptors.request.use(
      (request: AxiosRequestConfig) => {
        return request
      }, (error: any) => {
        return Promise.reject(error)
      })

    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        return response.data
      }, (error: any) => {
        return Promise.reject(error.response)
      })
  }

  get<T = any>(url: string, params?: object): Promise<T> {
    return this.service.get(url, params)
  }

  post<T = any>(url: string, params?: object): Promise<T> {
    return this.service.post(url, params)
  }
}

export default new API()
