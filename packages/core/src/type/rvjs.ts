import { ComponentBlock } from '@block/component.ts'
import { ElementBlock } from '@block/element.ts'
import { ForBlock } from '@block/for.ts'
import { SwitchBlock } from '@block/switch.ts'
import { ToggleBlock } from '@block/toggle.ts'
import { isRvjsObject } from '@type/guard.ts'
import {
  RVJS_COMPONENT_SYMBOL,
  RVJS_ELEMENT_SYMBOL,
  RVJS_FOR_FLOW_SYMBOL,
  RVJS_SWITCH_FLOW_SYMBOL,
  RVJS_TEXT_NODE_SYMBOL,
  RVJS_TOGGLE_FLOW_SYMBOL,
} from '@util/symbol.ts'

export const isComponent = (value: unknown): value is ComponentBlock => {
  return isRvjsObject(value) && value.$$typeof === RVJS_COMPONENT_SYMBOL
}

export const isElement = (value: unknown): value is ElementBlock => {
  return isRvjsObject(value) && value.$$typeof === RVJS_ELEMENT_SYMBOL
}

export const isForFlow = (value: unknown): value is ForBlock<unknown> => {
  return isRvjsObject(value) && value.$$typeof === RVJS_FOR_FLOW_SYMBOL
}

export const isSwitchFlow = (value: unknown): value is SwitchBlock<unknown> => {
  return isRvjsObject(value) && value.$$typeof === RVJS_SWITCH_FLOW_SYMBOL
}

export const isToggleFlow = (value: unknown): value is ToggleBlock<unknown> => {
  return isRvjsObject(value) && value.$$typeof === RVJS_TOGGLE_FLOW_SYMBOL
}

export const isTextNode = (value: unknown): value is ElementBlock => {
  return isRvjsObject(value) && value.$$typeof === RVJS_TEXT_NODE_SYMBOL
}
