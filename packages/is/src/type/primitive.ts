import { printInvalidError } from '../checkProps/error.ts'
import { NormalValidator } from './type.ts'

export const isString: NormalValidator = (value: unknown): value is string => {
  return typeof value === 'string' ? true : (printInvalidError(), false)
}

export const isNumber: NormalValidator = (value: unknown): value is number => {
  return typeof value === 'number' ? true : (printInvalidError(), false)
}

export const isBigint: NormalValidator = (value: unknown): value is bigint => {
  return typeof value === 'bigint' ? true : (printInvalidError(), false)
}

export const isBoolean: NormalValidator = (
  value: unknown,
): value is boolean => {
  return typeof value === 'boolean' ? true : (printInvalidError(), false)
}

export const isUndefined: NormalValidator = (
  value: unknown,
): value is undefined => {
  return value === undefined ? true : (printInvalidError(), false)
}

export const isSymbol: NormalValidator = (value: unknown): value is symbol => {
  return typeof value === 'symbol' ? true : (printInvalidError(), false)
}

export const isNull: NormalValidator = (value: unknown): value is null => {
  return value === null ? true : (printInvalidError(), false)
}

export const isAny: NormalValidator = () => {
  return true
}
