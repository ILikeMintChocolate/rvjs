export type AddTypeToValues<T, AdditionalType> = {
  [K in keyof T]: T[K] | AdditionalType
}

export type Required<T> = Exclude<T, undefined>
