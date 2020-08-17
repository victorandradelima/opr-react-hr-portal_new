import { HttpPostParams, HttpResponse, HttpPostClient } from '@/data/protocols/http'
import axios, { AxiosRequestConfig } from 'axios'

export class AxiosHttpClient implements HttpPostClient<any, any> {
  constructor (
    readonly config: AxiosRequestConfig
  ) {}

  async post (params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    try {
      const httpResponse = await axios.post(params.url, params.body, this.config)
      return {
        statusCode: httpResponse.status,
        body: httpResponse.data
      }
    } catch (error) {
      return {
        statusCode: error.response.status,
        body: error.response.data
      }
    }
  }
}
