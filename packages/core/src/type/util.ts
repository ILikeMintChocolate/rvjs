export type AddTypeToValues<T, AdditionalType> = {
  [K in keyof T]: T[K] | AdditionalType
}

export type AllOptional<T> = {
  [K in keyof T]: T[K] | undefined
}

export type NestedArray<T> = (T | T[])[]
