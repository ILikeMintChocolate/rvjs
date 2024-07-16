export type NormalValidator = (value: unknown) => boolean

export type CompositeValidator<T> = (
  validator: T,
) => (value: unknown) => boolean

export type Validator = NormalValidator | CompositeValidator<unknown>

export type Validators = Record<string, Validator>
