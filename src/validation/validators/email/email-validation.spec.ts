import { EmailValitation } from './email-validation'
import { InvalidFieldError } from '@/validation/errors'

describe('EmailValition', () => {
  test('Should return error if email is invalid', () => {
    const sut = new EmailValitation('email')
    const error = sut.validate('')
    expect(error).toEqual(new InvalidFieldError())
  })
})
