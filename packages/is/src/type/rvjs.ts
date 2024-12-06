import {
  BlockComponent,
  CaseComponent,
  Component,
  ForComponent,
  GetState,
  isBlockComponent as _isBlockComponent,
  isCaseComponent as _isCaseComponent,
  isComponent as _isComponent,
  isForComponent as _isForComponent,
  isGetState as _isGetState,
  isRefreshComponent as _isRefreshComponent,
  isSetState as _isSetState,
  isSwitchComponent as _isSwitchComponent,
  isToggleComponent as _isToggleComponent,
  RefreshComponent,
  SetState,
  SwitchComponent,
  ToggleComponent,
} from '@rvjs/core'
import { checkContext } from '../checkProps/context.js'
import {
  printInvalidError,
  printNoValidatorError,
} from '../checkProps/error.js'
import { isArrayType } from './reference.ts'
import { Validator } from './type.js'

export const isElement = (value: unknown): value is HTMLElement => {
  return value instanceof HTMLElement
}

export const isComponent = (value: unknown): value is Component => {
  return _isComponent(value)
}

export const isBlockComponent = (value: unknown): value is BlockComponent => {
  return _isBlockComponent(value)
}

export const isForComponent = (value: unknown): value is ForComponent => {
  return _isForComponent(value)
}

export const isSwitchComponent = (value: unknown): value is SwitchComponent => {
  return _isSwitchComponent(value)
}

export const isCaseComponent = (value: unknown): value is CaseComponent => {
  return _isCaseComponent(value)
}

export const isToggleComponent = (value: unknown): value is ToggleComponent => {
  return _isToggleComponent(value)
}

export const isRefreshComponent = (
  value: unknown,
): value is RefreshComponent => {
  return _isRefreshComponent(value)
}

export const isChild = (value: unknown): value is Component | HTMLElement => {
  return isElement(value) || isComponent(value)
}

export const isChildren = (value: unknown): value is Component[] => {
  if (!value) {
    return false
  }
  return isArrayType(value) && value.every(isChild)
}

export const isGetStateType = (value: unknown): value is GetState<unknown> => {
  return _isGetState(value)
}

export const isSetStateType = (value: unknown): value is SetState<unknown> => {
  return _isSetState(value)
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
