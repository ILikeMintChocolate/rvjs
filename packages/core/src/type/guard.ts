export const isArray = (value: unknown): value is unknown[] => {
  return Array.isArray(value)
}

export const isFunction = (value: unknown): value is Function => {
  return typeof value === 'function'
}

export const isString = (value: unknown): value is string => {
  return typeof value === 'string'
}
