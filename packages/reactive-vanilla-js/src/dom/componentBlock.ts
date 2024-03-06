import { AnyBlock } from '../type/dom'
import { ElementBlock } from './elementBlock.ts'
import { isArray } from '../type/guard.ts'

export class ComponentBlock {
  #children: ElementBlock[]
  #parent: AnyBlock | null
  #onDestoryHandler: Function | null

  constructor() {
    this.#children = []
    this.#parent = null
    this.#onDestoryHandler = null
  }

  get children() {
    return this.#children
  }

  set children(children: ElementBlock | ElementBlock[]) {
    if (isArray(children)) {
      this.#children.push(...children)
    } else {
      this.#children.push(children)
    }
  }

  get parent() {
    return this.#parent
  }

  set parent(value: AnyBlock | null) {
    this.#parent = value
  }

  set onDestoryHandler(value: Function | null) {
    this.#onDestoryHandler = value
  }

  getChildElements() {
    return this.#children.map((child) => child.element)
  }

  cleanUp() {
    if (this.#onDestoryHandler) {
      this.#onDestoryHandler()
    }
  }

  // @ts-ignore
  traverseChildren(
    callback: (child: AnyBlock) => void,
    block: AnyBlock = this,
  ) {
    if (this.#children.length === 0) {
      callback(block)
      return
    }
    this.#children.flat().forEach((child) => {
      child.traverseChildren(callback, child)
    })
    callback(block)
  }
}

export const isComponentBlock = (value: unknown): value is ComponentBlock => {
  return value instanceof ComponentBlock
}
