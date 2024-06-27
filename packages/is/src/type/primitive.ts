export const isString = (value: unknown): value is string => {
  return typeof value === 'string'
}

export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number'
}

export const isBigint = (value: unknown): value is bigint => {
  return typeof value === 'bigint'
}

export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === 'boolean'
}

export const isUndefined = (value: unknown): value is undefined => {
  return value === undefined
}

export const isSymbol = (value: unknown): value is symbol => {
  return typeof value === 'symbol'
}

export const isNull = (value: unknown): value is null => {
  return value === null
}

export const isAny = () => {
  return true
}
