import { Component, Element, isTextNode } from '@rvjs/core/dom'
import { GetState, Prop } from '@rvjs/core/reactive'
import {
  RVJS_COMPONENT_SYMBOL,
  RVJS_ELEMENT_SYMBOL,
  RVJS_GET_STATE_SYMBOL,
  RVJS_PROP_SYMBOL,
} from '@rvjs/core/util'

import { isArray, isFunction, isObject } from './reference.ts'

export const isElement = (value: any): value is Element => {
  // @ts-ignore
  return isObject(value) && value.$$typeof === RVJS_ELEMENT_SYMBOL
}

export const isComponent = (value: unknown): value is Component => {
  // @ts-ignore
  return isObject(value) && value.$$typeof === RVJS_COMPONENT_SYMBOL
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
  return isArray(value) && value.every(isChild)
}

export const isGetState = (value: unknown): value is GetState => {
  // @ts-ignore
  return isFunction(value) && value?.$$typeof === RVJS_GET_STATE_SYMBOL
}

export const isProp = (value: unknown): value is Prop<unknown> => {
  if (isGetState(value)) {
    return true
  }

  // @ts-ignore
  return isFunction(value) && value?.$$typeof === RVJS_PROP_SYMBOL
}
