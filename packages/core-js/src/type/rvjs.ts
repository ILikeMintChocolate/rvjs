import { ComponentBlock } from '@block/component.ts'
import { ElementBlock } from '@block/element.ts'
import { ForBlock } from '@block/for.ts'
import { SwitchBlock } from '@block/switch.ts'
import { ToggleBlock } from '@block/toggle.ts'
import { isRvjsObject } from '@type/guard.ts'
import {
  RVJS_COMPONENT_BLOCK_SYMBOL,
  RVJS_ELEMENT_BLOCK_SYMBOL,
  RVJS_FOR_FLOW_BLOCK_SYMBOL,
  RVJS_SWITCH_FLOW_BLOCK_SYMBOL,
  RVJS_TEXT_NODE_BLOCK_SYMBOL,
  RVJS_TOGGLE_FLOW_BLOCK_SYMBOL,
} from '@util/symbol.ts'

export const isComponentBlock = (value: unknown): value is ComponentBlock => {
  return isRvjsObject(value) && value.$$typeof === RVJS_COMPONENT_BLOCK_SYMBOL
}

export const isElementBlock = (value: unknown): value is ElementBlock => {
  return isRvjsObject(value) && value.$$typeof === RVJS_ELEMENT_BLOCK_SYMBOL
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

export const isTextNodeBlock = (value: unknown): value is ElementBlock => {
  return isRvjsObject(value) && value.$$typeof === RVJS_TEXT_NODE_BLOCK_SYMBOL
}
