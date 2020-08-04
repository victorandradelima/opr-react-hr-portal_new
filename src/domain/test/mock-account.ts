import { AuthenticationParams } from '@/domain/usecases'
import { AccountModel } from '../models'
import faker from 'faker'

export const mockAuthentication = (): AuthenticationParams => ({
  idType: 'Email',
  idValue: faker.internet.email(),
  password: faker.internet.password(),
  platform: 'web'
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid(),
  created: `${Date.now()}`,
  expiration: `${faker.date.future(1)}`
})
