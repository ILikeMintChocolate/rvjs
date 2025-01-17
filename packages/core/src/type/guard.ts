import { GetState, SetState } from '@hook/useState.ts'
import { Component } from '@render/component.ts'
import { RvjsObject } from '@type/rvjs.ts'
import {
  RVJS_BLOCK_COMPONENT_IDENTIFIER,
  RVJS_CASE_COMPONENT_IDENTIFIER,
  RVJS_COMPONENT_FN_IDENTIFIER,
  RVJS_COMPONENT_IDENTIFIER,
  RVJS_FOR_COMPONENT_IDENTIFIER,
  RVJS_GET_STATE_IDENTIFIER,
  RVJS_REFRESH_COMPONENT_IDENTIFIER,
  RVJS_SET_STATE_IDENTIFIER,
  RVJS_SWITCH_COMPONENT_IDENTIFIER,
  RVJS_TOGGLE_COMPONENT_IDENTIFIER,
} from '@util/identifier.ts'

export const isArray = (value: unknown): value is unknown[] => {
  return Array.isArray(value)
}

export const isFunction = (value: unknown): value is Function => {
  return typeof value === 'function'
}

export const isSvgElement = (value: unknown): value is SVGElement => {
  return value instanceof SVGElement
}

export const isNode = (value: unknown): value is Node => {
  return value instanceof Node
}

export const isString = (value: unknown): value is string => {
  return typeof value === 'string'
}

export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === 'boolean'
}

export const isRvjsFunction = (
  value: unknown,
): value is RvjsObject<Function> => {
  return typeof value === 'function' && value.hasOwnProperty('$$typeof')
}

export const isGetState = (value: unknown): value is GetState<unknown> => {
  return isRvjsFunction(value) && value.$$typeof === RVJS_GET_STATE_IDENTIFIER
}

export const isSetState = (value: unknown): value is SetState<unknown> => {
  return isRvjsFunction(value) && value.$$typeof === RVJS_SET_STATE_IDENTIFIER
}

export const isComponent = (value: unknown): value is Component => {
  return (
    !!value &&
    typeof value === 'object' &&
    '$$typeof' in value &&
    value['$$typeof'] === RVJS_COMPONENT_IDENTIFIER
  )
}

export const isBlockComponent = (value: unknown): value is Component => {
  return (
    isComponent(value) &&
    value.$$componentType === RVJS_BLOCK_COMPONENT_IDENTIFIER
  )
}

export const isSwitchComponent = (value: unknown): value is Component => {
  return (
    isComponent(value) &&
    value.$$componentType === RVJS_SWITCH_COMPONENT_IDENTIFIER
  )
}

export const isCaseComponent = (value: unknown): value is Component => {
  return (
    isComponent(value) &&
    value.$$componentType === RVJS_CASE_COMPONENT_IDENTIFIER
  )
}

export const isForComponent = (value: unknown): value is Component => {
  return (
    isComponent(value) &&
    value.$$componentType === RVJS_FOR_COMPONENT_IDENTIFIER
  )
}

export const isToggleComponent = (value: unknown): value is Component => {
  return (
    isComponent(value) &&
    value.$$componentType === RVJS_TOGGLE_COMPONENT_IDENTIFIER
  )
}

export const isRefreshComponent = (value: unknown): value is Component => {
  return (
    isComponent(value) &&
    value.$$componentType === RVJS_REFRESH_COMPONENT_IDENTIFIER
  )
}

export const isComponentFn = (value: unknown) => {
  return (
    isRvjsFunction(value) && value.$$typeof === RVJS_COMPONENT_FN_IDENTIFIER
  )
}

export const isHTMLElement = (value: unknown): value is HTMLElement => {
  return value instanceof HTMLElement
}

export const isSVGElement = (value: unknown): value is SVGElement => {
  return value instanceof SVGElement
}

export const isDefined = (value: unknown) => {
  return value !== undefined && value !== null
}
