export type NormalValidator = (value: unknown) => boolean

export type ComplexValidator<T> = (validator: T) => (value: unknown) => boolean

export type Validator = NormalValidator | ComplexValidator<unknown>

export type Validators = Record<string, Validator>
