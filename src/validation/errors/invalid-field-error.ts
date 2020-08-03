export class InvalidFieldError extends Error {
  constructor () {
    super('O campo está inválido')
  }
}
