import {
  Component,
  Element,
  isRvjsFunction,
  isRvjsObject,
  isTextNode,
} from '@rvjs/core/dom'
import { GetState, Prop, SetState } from '@rvjs/core/reactive'
import {
  RVJS_COMPONENT_SYMBOL,
  RVJS_ELEMENT_SYMBOL,
  RVJS_GET_STATE_SYMBOL,
  RVJS_PROP_SYMBOL,
  RVJS_SET_STATE_SYMBOL,
} from '@rvjs/core/util'
import { checkContext } from '../checkProps/context.ts'
import {
  printInvalidError,
  printNoValidatorError,
} from '../checkProps/error.ts'
import { isArrayType } from './reference.ts'
import { Validator } from './type.ts'

export const isElement = (value: unknown): value is Element => {
  return isRvjsObject(value) && value.$$typeof === RVJS_ELEMENT_SYMBOL
}

export const isComponent = (value: unknown): value is Component => {
  return isRvjsObject(value) && value.$$typeof === RVJS_COMPONENT_SYMBOL
}

export const isChild = (
  value: unknown,
): value is Element | Component | Text => {
  return isElement(value) || isComponent(value) || isTextNode(value)
}

export const isChildren = (
  value: unknown,
): value is (Element | Component | Text)[] => {
  if (!value) {
    return false
  }
  return isArrayType(value) && value.every(isChild)
}

export const isGetStateType = (value: unknown): value is GetState => {
  return isRvjsFunction(value) && value?.$$typeof === RVJS_GET_STATE_SYMBOL
}

export const isPropType = (value: unknown): value is Prop<unknown> => {
  if (isGetStateType(value)) {
    return true
  }
  return isRvjsFunction(value) && value?.$$typeof === RVJS_PROP_SYMBOL
}

export const isGetState = (validator: Validator) => (value: unknown) => {
  if (!checkContext.isContinue) {
    return false
  }
  if (!validator) {
    printNoValidatorError()
    return false
  }
  if (!isGetStateType(value)) {
    printInvalidError()
    return false
  }
  return validator(value()) as boolean
}

export const isSetState = (value: unknown): value is SetState => {
  return isRvjsFunction(value) && value?.$$typeof === RVJS_SET_STATE_SYMBOL
}

export const isProp = (validator: Validator) => (value: unknown) => {
  if (!checkContext.isContinue) {
    return false
  }
  if (!validator) {
    printNoValidatorError()
    return false
  }
  if (isGetStateType(value)) {
    return validator(value()) as boolean
  }
  if (!isPropType(value)) {
    printInvalidError()
    return false
  }
  return validator(value()) as boolean
}
