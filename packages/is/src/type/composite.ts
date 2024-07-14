import { checkContext } from '../checkProps/context.ts'
import {
  printInvalidError,
  printNoValidatorError,
} from '../checkProps/error.ts'
import { isFunctionType, isObjectType } from './reference.ts'
import { CompositeValidator, Validator, Validators } from './type.ts'

export const isArray: CompositeValidator<Validator> =
  (validator) => (value: unknown) => {
    if (!checkContext.isContinue) {
      return false
    }
    if (!validator) {
      printNoValidatorError()
      return false
    }
    if (!Array.isArray(value)) {
      printInvalidError()
      return false
    }
    return value.every(validator) as boolean
  }

export const isFunction: CompositeValidator<Validator> =
  (validator) => (value: unknown) => {
    if (!checkContext.isContinue) {
      return false
    }
    if (!validator) {
      printNoValidatorError()
      return false
    }
    if (!isFunctionType(value)) {
      printInvalidError()
      return false
    }
    return validator(value()) as boolean
  }

export const isObject: CompositeValidator<Validators> =
  (validators) => (value: unknown) => {
    if (!checkContext.isContinue) {
      return false
    }
    if (!validators) {
      printNoValidatorError()
      return false
    }
    if (!isObjectType(value)) {
      printInvalidError()
      return false
    }
    const objectValue = value as Record<string, unknown>
    const propKeys = new Set(Object.keys(objectValue))
    for (const key in validators) {
      const validator = validators[key]
      const prop = objectValue[key]
      checkContext.prop = { key, value: prop }
      validator(prop)
      propKeys.delete(key)
    }
    if (propKeys.size) {
      for (const key of propKeys) {
        checkContext.prop = { key, value: objectValue[key] }
        printNoValidatorError()
      }
    }
    return checkContext.isContinue as boolean
  }

export const isOptional = (validator: Validator) => (value: unknown) => {
  if (!checkContext.isContinue) {
    return false
  }
  if (!validator) {
    printNoValidatorError()
    return false
  }
  if (value === undefined) {
    return true
  }
  return validator(value) as boolean
}
