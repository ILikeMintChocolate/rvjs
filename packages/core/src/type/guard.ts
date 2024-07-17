import { RvjsFunction, RvjsObject } from '@type/rvjs.ts'

export const isArray = (value: unknown): value is unknown[] => {
  return Array.isArray(value)
}

export const isFunction = (value: unknown): value is Function => {
  return typeof value === 'function'
}

export const isString = (value: unknown): value is string => {
  return typeof value === 'string'
}

export const isTextNode = (value: unknown): value is Text => {
  return value instanceof Text
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
