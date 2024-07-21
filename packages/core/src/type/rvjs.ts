import { Component } from '@component/componentBlock.ts'
import { Element } from '@element/elementBlock.ts'
import { RVJS_COMPONENT_SYMBOL, RVJS_ELEMENT_SYMBOL } from '@util/symbol.ts'

export type RvjsFunction<T extends Function> = T & {
  $$typeof: symbol
}

export type RvjsObject<T extends Object> = T & {
  $$typeof: symbol
}

export const isRvjsObject = (value: unknown): value is RvjsObject<Object> => {
  return (
    typeof value === 'object' &&
    value !== null &&
    value.hasOwnProperty('$$typeof')
  )
}

export const isComponent = (value: unknown): value is Component => {
  return isRvjsObject(value) && value.$$typeof === RVJS_COMPONENT_SYMBOL
}

export const isElement = (value: unknown): value is Element => {
  return isRvjsObject(value) && value.$$typeof === RVJS_ELEMENT_SYMBOL
}
