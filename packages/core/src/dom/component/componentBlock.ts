import { Block } from '@dom/type.ts'
import { isArray } from '@type/guard.ts'
import { RVJS_COMPONENT } from '@util/symbol.ts'
import { Element, isElement } from '../element/elementBlock.ts'

export class Component {
  $$typeof = RVJS_COMPONENT
  
  #key: string | null
  #children: Block[]
  #parent: Block | null
  #shortcut: {
    parentComponent: Component | null
    childComponents: Set<Component>
  }
  #handlers: {
    onMount: Function | null
    onDestroy: Function | null
    cleanUps: Function[]
  }
  #contextProvider: Object | null
  #outletRender: Function | null
  #onOutletChangeHandler: Function | null
  #isDestroyed: boolean

  constructor() {
    this.#key = null
    this.#children = []
    this.#parent = null
    this.#shortcut = {
      parentComponent: null,
      childComponents: new Set(),
    }
    this.#handlers = {
      onMount: null,
      onDestroy: null,
      cleanUps: [],
    }
    this.#contextProvider = null
    this.#outletRender = null
    this.#onOutletChangeHandler = null
    this.#isDestroyed = false
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

  pushChildren(children: Element | Component | Element[] | Component[]) {
    if (isArray(children)) {
      this.#children.push(...children)
    } else {
      this.#children.push(children)
    }
  }

  get parent() {
    return this.#parent
  }

  set parent(value: Block | null) {
    this.#parent = value
  }

  set shortcutParentComponent(value: Component | null) {
    this.#shortcut.parentComponent = value
  }

  get shortcutParentComponent() {
    return this.#shortcut.parentComponent
  }

  appendShortcutChildComponent(value: Component) {
    this.#shortcut.childComponents.add(value)
  }

  get shortcutChildComponents() {
    return this.#shortcut.childComponents
  }

  set onMountHandler(value: Function) {
    this.#handlers.onMount = value
  }

  set onDestoryHandler(value: Function) {
    this.#handlers.onDestroy = value
  }

  set contextProvider(value: Object) {
    this.#contextProvider = value
  }

  get contextProvider(): Object | null {
    return this.#contextProvider
  }

  get outletRender() {
    return this.#outletRender
  }

  set outletRender(outletRender: Function | null) {
    this.#outletRender = outletRender
    this.#onOutletChangeHandler?.()
  }

  set onOutletChangeHandler(value: Function | null) {
    this.#onOutletChangeHandler = value
  }

  getChildElements() {
    return this.#children.map((child) => {
      if (isElement(child)) {
        return child.element
      } else {
        let element: HTMLElement | null = null
        child.traverseChildren((block) => {
          if (isElement(block)) {
            element = block.element
          }
        })
        // @ts-ignore
        return element as HTMLElement
      }
    })
  }

  onCommit() {
    this.traverseShortcutChildComponents((childComponent) => {
      childComponent.onMount()
    })
  }

  addCleanUpHandler(handler: Function) {
    this.#handlers.cleanUps.push(handler)
  }

  onMount() {
    if (this.#handlers.onMount) {
      this.#handlers.onMount()
      this.#handlers.onMount = null
    }
  }

  destroy() {
    if (this.#isDestroyed) {
      return
    }
    this.traverseChildren((child) => {
      child.cleanUp()
    })
  }

  selfDestroy() {
    if (isElement(this.parent)) {
      this.parent.deleteChild(this)
    }
    this.destroy()
    this.#isDestroyed = true
  }

  cleanUp() {
    if (this.#handlers.onDestroy) {
      this.#handlers.onDestroy()
    }
    this.#handlers.cleanUps.forEach((handler) => {
      handler(this)
    })
    if (this.#shortcut.parentComponent) {
      this.#shortcut.parentComponent.shortcutChildComponents.delete(this)
    }
  }

  // @ts-ignore
  traverseChildren(callback: (child: Block) => void, block: Block = this) {
    if (this.#children.length === 0) {
      callback(block)
      return
    }
    this.#children.flat().forEach((child) => {
      child.traverseChildren(callback, child)
    })
    callback(block)
  }

  traverseChildrenUntilComponent(callback: (child: Component) => void) {
    if (this.#children.length === 0) {
      return
    }
    this.#children.flat().forEach((child) => {
      if (isComponent(child)) {
        callback(child)
        return
      }
      child.traverseChildrenUntilComponent(callback)
    })
  }

  traverseShortcutChildComponents(callback: (child: Component) => void) {
    callback(this)
    this.#shortcut.childComponents.forEach((child) => {
      child.traverseShortcutChildComponents(callback)
    })
  }

  traverseShortcutParentComponent(
    callback: (parent: Component) => boolean | undefined,
  ) {
    if (this.#shortcut.parentComponent) {
      const isStop = callback(this.#shortcut.parentComponent) ?? false
      if (!isStop) {
        this.#shortcut.parentComponent.traverseShortcutParentComponent(callback)
      }
    }
  }

  static isComponent(value: unknown): value is Component {
    if (!value) {
      return false
    }

    return value instanceof Component
  }
}

export const isComponent = (value: unknown): value is Component => {
  if (!value) {
    return false
  }

  return value instanceof Component
}
