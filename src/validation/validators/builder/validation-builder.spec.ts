import { RequiredFieldValidation } from '@/validation/validators'
import { ValidationBuilder as sut } from './validation-builder'
import { EmailValitation } from '../email/email-validation'
import { MinLengthValidation } from '../min-length/min-length-validation'
import faker from 'faker'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).required().build()
    expect(validations).toEqual(
      [new RequiredFieldValidation(field)]
    )
  })

  test('Should return EmailValidation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).email().build()
    expect(validations).toEqual(
      [new EmailValitation(field)]
    )
  })

  test('Should return MinLengthValidation', () => {
    const field = faker.database.column()
    const length = faker.random.number()
    const validations = sut.field(field).min(length).build()
    expect(validations).toEqual(
      [new MinLengthValidation(field, length)]
    )
  })

  test('Should return a list of validations', () => {
    const field = faker.database.column()
    const length = faker.random.number()
    const validations = sut.field(field).required().email().min(length).build()
    expect(validations).toEqual(
      [
        new RequiredFieldValidation(field),
        new EmailValitation(field),
        new MinLengthValidation(field, length)
      ]
    )
  })
})
