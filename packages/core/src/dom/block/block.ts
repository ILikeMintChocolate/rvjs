import { BlockRelations } from '@block/util/blockRelations.ts'
import { DOMController } from '@block/util/domController.ts'
import { Empty } from '@block/util/mixin.ts'
import { RouteContext } from '@block/util/routeContext.ts'
import { UnsubscribeState } from '@block/util/unsubscribeState.ts'
import {
  isComponent,
  isElement,
  isForFlow,
  isSwitchFlow,
  isTextNode,
  isToggleFlow,
} from '@type/rvjs.ts'
import {
  RVJS_COMPONENT_SYMBOL,
  RVJS_ELEMENT_SYMBOL,
  RVJS_FOR_FLOW_SYMBOL,
  RVJS_SWITCH_FLOW_SYMBOL,
  RVJS_TEXT_NODE_SYMBOL,
  RVJS_TOGGLE_FLOW_SYMBOL,
} from '@util/symbol.ts'

export const blockTypes = {
  COMPONENT: RVJS_COMPONENT_SYMBOL,
  ELEMENT: RVJS_ELEMENT_SYMBOL,
  FOR: RVJS_FOR_FLOW_SYMBOL,
  SWITCH: RVJS_SWITCH_FLOW_SYMBOL,
  TOGGLE: RVJS_TOGGLE_FLOW_SYMBOL,
  TEXT: RVJS_TEXT_NODE_SYMBOL,
}

export interface BlockProps {
  type: keyof typeof blockTypes
  element?: HTMLElement
}

export class Block extends RouteContext(
  UnsubscribeState(DOMController(BlockRelations(Empty))),
) {
  $$typeof: (typeof blockTypes)[keyof typeof blockTypes]

  constructor(...args: any[]) {
    // @ts-ignore
    super(...args)
    const { type } = args[0] as BlockProps
    this.$$typeof = blockTypes[type]
  }

  traverseChildren(block: Block, callback: (child: Block) => boolean) {
    const isContinue = callback(block)
    if (!isContinue) {
      return
    }
    if (isComponent(block) || isSwitchFlow(block) || isToggleFlow(block)) {
      if (block.child) {
        block.child.traverseChildren(block.child, callback)
      }
    } else if (isElement(block)) {
      block.children.flat().forEach((child) => {
        child.traverseChildren(child, callback)
      })
    } else if (isForFlow(block)) {
      block.children.flat().forEach((child) => {
        child.traverseChildren(child, callback)
      })
    }
  }

  #commit() {
    this.traverseChildren(this, (child) => {
      if (isComponent(child)) {
        if (!child.isRendered()) {
          child.triggerLazyRender()
        }
        child.triggerOnMount()
      }
      return true
    })
  }

  triggerCommit() {
    this.#commit()
  }

  #destroy() {
    this.traverseChildren(this, (child) => {
      if (isComponent(child)) {
        child.triggerOnDestroy()
        child.deleteAllContextProviders()
      }
      if (!isTextNode(child)) {
        child.cleanUpUnsubscribeState()
      }
      return true
    })
  }

  triggerDestroy() {
    this.#destroy()
  }
}
