import { isComponent, isElement } from '@type/rvjs.ts'
import {
  RVJS_COMPONENT_SYMBOL,
  RVJS_ELEMENT_SYMBOL,
  RVJS_FOR_FLOW_SYMBOL,
  RVJS_SWITCH_FLOW_SYMBOL,
  RVJS_TOGGLE_FLOW_SYMBOL,
} from '@util/symbol.ts'

export const blockTypes = {
  COMPONENT: RVJS_COMPONENT_SYMBOL,
  ELEMENT: RVJS_ELEMENT_SYMBOL,
  FOR: RVJS_FOR_FLOW_SYMBOL,
  SWITCH: RVJS_SWITCH_FLOW_SYMBOL,
  TOGGLE: RVJS_TOGGLE_FLOW_SYMBOL,
}

export abstract class Block {
  $$typeof: (typeof blockTypes)[keyof typeof blockTypes]
  #parent: Block | null

  constructor(type: keyof typeof blockTypes) {
    this.$$typeof = blockTypes[type]
    this.#parent = null
  }

  get parent() {
    return this.#parent
  }

  set parent(value: Block | null) {
    this.#parent = value
  }

  abstract get element(): HTMLElement | null

  traverseChildren(block: Block, callback: (child: Block) => boolean) {
    const isContinue = callback(block)
    if (!isContinue) {
      return
    }
    if (isComponent(block)) {
      block.child.traverseChildren(block.child, callback)
    } else if (isElement(block)) {
      block.children.flat().forEach((child) => {
        child.traverseChildren(child, callback)
      })
    }
  }

  #commit() {
    this.traverseChildren(this, (child) => {
      if (isComponent(child)) {
        child.onMount()
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
        child.triggerCleanUp()
      } else if (isElement(child)) {
        child.triggerCleanUp()
      }
      return true
    })
  }

  triggerDestroy() {
    this.#destroy()
  }
}
