export class InvalidCredentialsError extends Error {
  constructor () {
    super('Senha inválida ou credenciais não autorizadas')
    this.name = 'InvalidCredentialsError'
  }
}
