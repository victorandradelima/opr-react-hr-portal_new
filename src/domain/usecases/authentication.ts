import { AccountModel } from '@/domain/models/account-model'

export type AuthenticationParams = {
  idType: string
  idValue: string
  password: string
  platform: string
}

export interface Authentication {
  auth (params: AuthenticationParams): Promise<AccountModel>
}
