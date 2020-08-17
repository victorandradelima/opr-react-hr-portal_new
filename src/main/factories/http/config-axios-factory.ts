import { AxiosRequestConfig } from 'axios'

export const makeConfigAxios = (): AxiosRequestConfig => {
  return {
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:8080'
    }
  }
}
