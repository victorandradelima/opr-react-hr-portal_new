export class InvalidCredentialsError extends Error {
  constructor () {
    super('Credenciais inválidas ou não autorizadas')
    this.name = 'InvalidCredentialsError'
  }
}
