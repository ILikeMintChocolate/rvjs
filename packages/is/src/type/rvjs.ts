import { Component, Element } from '@rvjs/core/dom'
import { RVJS_COMPONENT, RVJS_ELEMENT } from '@rvjs/core/util'

import { isArray, isObject } from './reference.ts'

export const isElement = (value: any): value is Element => {
  // @ts-ignore
  return isObject(value) && value.$$typeof === RVJS_ELEMENT
}

export const isComponent = (value: unknown): value is Component => {
  // @ts-ignore
  return isObject(value) && value.$$typeof === RVJS_COMPONENT
}

export const isChild = (value: unknown): value is Element | Component => {
  return isElement(value) || isComponent(value)
}

export const isChildren = (
  value: unknown,
): value is (Element | Component)[] => {
  if (!value) {
    return false
  }
  return isArray(value) && value.every(isChild)
}
