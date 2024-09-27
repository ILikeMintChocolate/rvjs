import { ComponentBlock } from '@block/component.ts'
import { BlockRelations } from '@block/util/blockRelations.ts'
import { DOMController } from '@block/util/domController.ts'
import { Empty } from '@block/util/mixin.ts'
import { RouteContext } from '@block/util/routeContext.ts'
import { UnsubscribeState } from '@block/util/unsubscribeState.ts'
import { HTMLNode } from '@element/type.ts'
import {
  isComponentBlock,
  isElementBlock,
  isForFlowBlock,
  isSwitchFlowBlock,
  isTextNodeBlock,
  isToggleFlowBlock,
} from '@type/rvjs.ts'
import { Queue } from '@util/dataStructure/queue.ts'
import {
  RVJS_COMPONENT_BLOCK_SYMBOL,
  RVJS_ELEMENT_BLOCK_SYMBOL,
  RVJS_FOR_FLOW_BLOCK_SYMBOL,
  RVJS_SWITCH_FLOW_BLOCK_SYMBOL,
  RVJS_TEXT_NODE_BLOCK_SYMBOL,
  RVJS_TOGGLE_FLOW_BLOCK_SYMBOL,
} from '@util/symbol.ts'

export const blockTypes = {
  COMPONENT: RVJS_COMPONENT_BLOCK_SYMBOL,
  ELEMENT: RVJS_ELEMENT_BLOCK_SYMBOL,
  FOR: RVJS_FOR_FLOW_BLOCK_SYMBOL,
  SWITCH: RVJS_SWITCH_FLOW_BLOCK_SYMBOL,
  TOGGLE: RVJS_TOGGLE_FLOW_BLOCK_SYMBOL,
  TEXT: RVJS_TEXT_NODE_BLOCK_SYMBOL,
}

export interface BlockProps {
  type: keyof typeof blockTypes
  element?: HTMLNode
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
    if (
      isComponentBlock(block) ||
      isSwitchFlowBlock(block) ||
      isToggleFlowBlock(block)
    ) {
      if (block.child) {
        block.child.traverseChildren(block.child, callback)
      }
    } else if (isElementBlock(block)) {
      block.children.flat().forEach((child) => {
        child.traverseChildren(child, callback)
      })
    } else if (isForFlowBlock(block)) {
      block.children.flat().forEach((child) => {
        child.traverseChildren(child, callback)
      })
    }
  }

  commit() {
    const onMountQueue = new Queue<ComponentBlock>()
    this.traverseChildren(this, (child) => {
      if (isComponentBlock(child)) {
        if (!child.isRendered()) {
          child.triggerLazyRender()
        }
        onMountQueue.push(child)
      }
      return true
    })
    onMountQueue.popAll((child) => {
      child.triggerOnMount()
    })
  }

  triggerCommit() {
    this.commit()
  }

  destroy() {
    this.traverseChildren(this, (child) => {
      if (isComponentBlock(child)) {
        child.triggerOnDestroy()
        child.deleteAllContextProviders()
      }
      if (!isTextNodeBlock(child)) {
        child.cleanUpUnsubscribeState()
      }
      return true
    })
  }

  triggerDestroy() {
    this.destroy()
  }
}
