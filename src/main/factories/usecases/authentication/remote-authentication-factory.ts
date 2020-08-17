import { Authentication } from '@/domain/usecases'
import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client-factory'
import { makeApiUrl } from '@/main/factories/http/api-url-factory'
import { makeConfigAxios } from '../../http/config-axios-factory'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(makeApiUrl('/token/users/login'), makeAxiosHttpClient(makeConfigAxios()))
}
