import { isComponent, isElement } from '@type/rvjs.ts'
import { RVJS_COMPONENT_SYMBOL, RVJS_ELEMENT_SYMBOL } from '@util/symbol.ts'

export abstract class Block {
  $$typeof: typeof RVJS_COMPONENT_SYMBOL | typeof RVJS_ELEMENT_SYMBOL
  #parent: Block | null

  constructor(type: 'COMPONENT' | 'ELEMENT') {
    this.$$typeof =
      type === 'COMPONENT' ? RVJS_COMPONENT_SYMBOL : RVJS_ELEMENT_SYMBOL
    this.#parent = null
  }

  get parent() {
    return this.#parent
  }

  set parent(value: Block | null) {
    this.#parent = value
  }

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

  traverseParent(block: Block, callback: (parent: Block) => boolean) {
    const parent = block.parent
    if (!parent) {
      return
    }
    const isContinue = callback(parent)
    if (!isContinue) {
      return
    }
    while (parent) {
      parent.traverseParent(parent, callback)
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
