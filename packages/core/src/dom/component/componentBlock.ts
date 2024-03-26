import { AnyBlock } from '@dom/type.ts'
import { DeleteProvider } from '@hook/createContext.ts'
import { isArray } from '@type/guard.ts'
import { ElementBlock, isElementBlock } from '../element/elementBlock.ts'

export class ComponentBlock {
  #key: string | null
  #children: ElementBlock[]
  #parent: AnyBlock | null
  #onMountHandler: Function | null
  #onDestoryHandler: Function | null
  #shortcut: {
    parentComponent: ComponentBlock | null
    childComponents: Set<ComponentBlock>
  }
  #contextProvider: Object | null
  #deleteContextProviderHandler: DeleteProvider | null

  #outletRender: Function | null
  #onOutletChangeHandler: Function | null
  #isDestroyed: boolean

  constructor() {
    this.#key = null
    this.#children = []
    this.#parent = null
    this.#onMountHandler = null
    this.#onDestoryHandler = null
    this.#shortcut = {
      parentComponent: null,
      childComponents: new Set(),
    }
    this.#contextProvider = null
    this.#deleteContextProviderHandler = null
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

  pushChildren(children: ElementBlock | ElementBlock[]) {
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
    this.#shortcut.childComponents.add(value)
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

  set contextProvider(value: Object) {
    this.#contextProvider = value
  }

  get contextProvider(): Object | null {
    return this.#contextProvider
  }

  set deleteContextProviderHandler(deleteHandler: DeleteProvider) {
    this.#deleteContextProviderHandler = deleteHandler
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
    return this.#children.map((child) => child.element)
  }

  onCommit() {
    this.traverseShortcutChildComponents((childComponentBlock) => {
      childComponentBlock.onMount()
    })
  }

  onMount() {
    if (this.#onMountHandler) {
      this.#onMountHandler()
      this.#onMountHandler = null
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
    if (isElementBlock(this.parent)) {
      this.parent.deleteChild(this)
    }
    this.destroy()
    this.#isDestroyed = true
  }

  cleanUp() {
    if (this.#onDestoryHandler) {
      this.#onDestoryHandler()
    }
    if (this.#deleteContextProviderHandler) {
      this.#deleteContextProviderHandler(this)
    }
    if (this.#shortcut.parentComponent) {
      this.#shortcut.parentComponent.shortcutChildComponents.delete(this)
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

  traverseChildrenUntilComponent(callback: (child: ComponentBlock) => void) {
    if (this.#children.length === 0) {
      return
    }
    this.#children.flat().forEach((child) => {
      if (isComponentBlock(child)) {
        callback(child)
        return
      }
      child.traverseChildrenUntilComponent(callback)
    })
  }

  traverseShortcutChildComponents(callback: (child: ComponentBlock) => void) {
    callback(this)
    this.#shortcut.childComponents.forEach((child) => {
      child.traverseShortcutChildComponents(callback)
    })
  }

  traverseShortcutParentComponent(
    callback: (parent: ComponentBlock) => boolean | undefined,
  ) {
    if (this.#shortcut.parentComponent) {
      const isStop = callback(this.#shortcut.parentComponent) ?? false
      if (!isStop) {
        this.#shortcut.parentComponent.traverseShortcutParentComponent(callback)
      }
    }
  }
}

export const isComponentBlock = (value: unknown): value is ComponentBlock => {
  if (!value) {
    return false
  }
  return value instanceof ComponentBlock
}
