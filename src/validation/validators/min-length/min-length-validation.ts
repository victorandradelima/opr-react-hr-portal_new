import { FieldValidation } from '@/validation/protocols/field-validation'
import { InvalidFieldError } from '@/validation/errors'

export class MinLenghtValidation implements FieldValidation {
  constructor (
    readonly field: string,
    private readonly minLength
  ) {}

  validate (value: string): Error {
    return new InvalidFieldError()
  }
}
