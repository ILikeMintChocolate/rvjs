import { AnyBlock } from '../type/dom'
import { ElementBlock } from './elementBlock.ts'
import { isArray } from '../type/guard.ts'

export class ComponentBlock {
  #key: string | null
  #children: ElementBlock[]
  #parent: AnyBlock | null
  #onMountHandler: Function | null
  #onDestoryHandler: Function | null
  #shortcut: {
    parentComponent: ComponentBlock | null
    childComponents: ComponentBlock[]
  }

  constructor() {
    this.#key = null
    this.#children = []
    this.#parent = null
    this.#onMountHandler = null
    this.#onDestoryHandler = null
    this.#shortcut = {
      parentComponent: null,
      childComponents: [],
    }
  }

  set key(value: string | null) {
    this.#key = value
  }

  get key() {
    return this.#key
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

  set shortcutParentComponent(value: ComponentBlock | null) {
    this.#shortcut.parentComponent = value
  }

  get shortcutParentComponent() {
    return this.#shortcut.parentComponent
  }

  appendShortcutChildComponent(value: ComponentBlock) {
    this.#shortcut.childComponents.push(value)
  }

  get shortcutChildComponents() {
    return this.#shortcut.childComponents
  }

  set onMountHandler(value: Function | null) {
    this.#onMountHandler = value
  }

  set onDestoryHandler(value: Function | null) {
    this.#onDestoryHandler = value
  }

  getChildElements() {
    return this.#children.map((child) => child.element)
  }

  onMount() {
    if (this.#onMountHandler) {
      this.#onMountHandler()
      this.#onMountHandler = null
    }
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

  // traverse and stop when meet component block
  traverseChildrenUntilComponent(
    callback: (child: AnyBlock) => void,
    block: AnyBlock = this,
  ) {
    if (this.#children.length === 0) {
      callback(block)
      return
    }
    this.#children.flat().forEach((child) => {
      if (isComponentBlock(child)) {
        callback(child)
        return
      }
      child.traverseChildrenUntilComponent(callback, child)
    })
    callback(block)
  }
}

export const isComponentBlock = (value: unknown): value is ComponentBlock => {
  return value instanceof ComponentBlock
}
