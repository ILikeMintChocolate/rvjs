export type NormalValidator = (value: unknown) => boolean

export type AlwaysTrueValidator = () => true

export type CompositeValidator<T> = (
  validator: T,
) => (value: unknown) => boolean

export type Validator =
  | NormalValidator
  | CompositeValidator<unknown>
  | AlwaysTrueValidator

export type Validators = Record<string, Validator>
