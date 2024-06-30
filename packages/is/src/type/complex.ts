import { checkContext } from '../checkProps/context.ts'
import {
  printInvalidError,
  printNoValidatorError,
} from '../checkProps/error.ts'
import { isFunctionType, isObjectType } from './reference.ts'
import { ComplexValidator, Validator, Validators } from './type.ts'

export const isArray: ComplexValidator<Validator> =
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

export const isFunction: ComplexValidator<Validator> =
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

export const isObject: ComplexValidator<Validators> =
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
    const propKeys = new Set(Object.keys(value))
    for (const key in validators) {
      const validator = validators[key]
      // @ts-ignore
      const prop = value[key]
      checkContext.prop = { key, value: prop }
      // @ts-ignore
      validator(prop)
      propKeys.delete(key)
    }
    if (propKeys.size) {
      for (const key of propKeys) {
        // @ts-ignore
        checkContext.prop = { key, value: value[key] }
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
