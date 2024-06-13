export type AddTypeToValues<T, AdditionalType> = {
  [K in keyof T]: T[K] | AdditionalType
}
