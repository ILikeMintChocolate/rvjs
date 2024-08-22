import {
  ComponentBlock,
  ElementBlock,
  ForBlock,
  GetState,
  isRvjsFunction,
  isRvjsObject,
  Prop,
  RVJS_COMPONENT_BLOCK_SYMBOL,
  RVJS_ELEMENT_BLOCK_SYMBOL,
  RVJS_FOR_FLOW_BLOCK_SYMBOL,
  RVJS_GET_STATE_SYMBOL,
  RVJS_PROP_SYMBOL,
  RVJS_SET_STATE_SYMBOL,
  RVJS_SWITCH_FLOW_BLOCK_SYMBOL,
  RVJS_TEXT_NODE_BLOCK_SYMBOL,
  RVJS_TOGGLE_FLOW_BLOCK_SYMBOL,
  SetState,
  SwitchBlock,
  TextNodeBlock,
  ToggleBlock,
} from '@rvjs/core'
import { checkContext } from '../checkProps/context.ts'
import {
  printInvalidError,
  printNoValidatorError,
} from '../checkProps/error.ts'
import { isArrayType } from './reference.ts'
import { Validator } from './type.ts'

export const isElementBlock = (value: unknown): value is ElementBlock => {
  return isRvjsObject(value) && value.$$typeof === RVJS_ELEMENT_BLOCK_SYMBOL
}

export const isComponentBlock = (value: unknown): value is ComponentBlock => {
  return isRvjsObject(value) && value.$$typeof === RVJS_COMPONENT_BLOCK_SYMBOL
}

export const isForFlowBlock = (value: unknown): value is ForBlock<unknown> => {
  return isRvjsObject(value) && value.$$typeof === RVJS_FOR_FLOW_BLOCK_SYMBOL
}

export const isSwitchFlowBlock = (
  value: unknown,
): value is SwitchBlock<unknown> => {
  return isRvjsObject(value) && value.$$typeof === RVJS_SWITCH_FLOW_BLOCK_SYMBOL
}

export const isToggleFlowBlock = (
  value: unknown,
): value is ToggleBlock<unknown> => {
  return isRvjsObject(value) && value.$$typeof === RVJS_TOGGLE_FLOW_BLOCK_SYMBOL
}

export const isTextNodeBlock = (value: unknown): value is TextNodeBlock => {
  return isRvjsObject(value) && value.$$typeof === RVJS_TEXT_NODE_BLOCK_SYMBOL
}

export const isChild = (
  value: unknown,
): value is
  | ElementBlock
  | ComponentBlock
  | ForBlock<unknown>
  | SwitchBlock<unknown>
  | ToggleBlock<unknown>
  | TextNodeBlock => {
  return (
    isElementBlock(value) ||
    isComponentBlock(value) ||
    isForFlowBlock(value) ||
    isSwitchFlowBlock(value) ||
    isToggleFlowBlock(value) ||
    isTextNodeBlock(value)
  )
}

export const isChildren = (
  value: unknown,
): value is (
  | ElementBlock
  | ComponentBlock
  | ForBlock<unknown>
  | SwitchBlock<unknown>
  | ToggleBlock<unknown>
  | TextNodeBlock
)[] => {
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
