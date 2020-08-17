import { AxiosHttpClient } from '@/infra/http/axios-http-client/axios-http-client'
import { AxiosRequestConfig } from 'axios'

export const makeAxiosHttpClient = (config: AxiosRequestConfig): AxiosHttpClient => {
  return new AxiosHttpClient(config)
}
