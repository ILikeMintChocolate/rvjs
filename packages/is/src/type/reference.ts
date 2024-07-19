import { NormalValidator } from './type.ts'

export const isArrayType = (value: unknown): value is unknown[] => {
  return Array.isArray(value)
}

export const isObjectType = (value: unknown): value is object => {
  return typeof value === 'object' && value !== null
}

export const isFunctionType = (value: unknown): value is Function => {
  return typeof value === 'function'
}

export const isDate: NormalValidator = (value: unknown): value is Date => {
  return value instanceof Date
}

export const isRegExp: NormalValidator = (value: unknown): value is RegExp => {
  return value instanceof RegExp
}

export const isError: NormalValidator = (value: unknown): value is Error => {
  return value instanceof Error
}

export const isPromise: NormalValidator = (
  value: unknown,
): value is Promise<any> => {
  return value instanceof Promise
}

export const isSet: NormalValidator = (value: unknown): value is Set<any> => {
  return value instanceof Set
}

export const isMap: NormalValidator = (
  value: unknown,
): value is Map<any, any> => {
  return value instanceof Map
}

export const isWeakSet: NormalValidator = (
  value: unknown,
): value is WeakSet<any> => {
  return value instanceof WeakSet
}

export const isWeakMap: NormalValidator = (
  value: unknown,
): value is WeakMap<any, any> => {
  return value instanceof WeakMap
}
