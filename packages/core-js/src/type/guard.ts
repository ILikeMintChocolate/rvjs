export type RvjsFunction<T extends Function> = T & {
  $$typeof: symbol
}

export type RvjsObject<T extends Object> = T & {
  $$typeof: symbol
}

export const isArray = (value: unknown): value is unknown[] => {
  return Array.isArray(value)
}

export const isFunction = (value: unknown): value is Function => {
  return typeof value === 'function'
}

export const isString = (value: unknown): value is string => {
  return typeof value === 'string'
}

export const isRvjsFunction = (
  value: unknown,
): value is RvjsFunction<Function> => {
  return typeof value === 'function' && value.hasOwnProperty('$$typeof')
}

export const isRvjsObject = (value: unknown): value is RvjsObject<Object> => {
  return (
    typeof value === 'object' &&
    value !== null &&
    value.hasOwnProperty('$$typeof')
  )
}
