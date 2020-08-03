import { FieldValidation } from '@/validation/protocols/field-validation'
import { InvalidFieldError } from '@/validation/errors'

export class EmailValitation implements FieldValidation {
  constructor (
    readonly field: string
  ) {}

  validate (value: string): InvalidFieldError {
    return new InvalidFieldError()
  }
}
