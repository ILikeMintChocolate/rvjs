export const isArray = (value: unknown): value is unknown[] => {
  return Array.isArray(value)
}

export const isFunction = (value: unknown): value is Function => {
  return typeof value === 'function'
}
