export enum HttpStatusCode {
  ok = 200,
  unauthorized = 400,
  serverError = 500
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  body?: T
}
