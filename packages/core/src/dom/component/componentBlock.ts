import { Block } from '@dom/type.ts'
import { SetState } from '@hook/useState.ts'
import { RVJS_COMPONENT } from '@util/symbol.ts'
import { isElement } from '../element/elementBlock.ts'

export class Component {
  $$typeof = RVJS_COMPONENT

  #key: string | null
  #child: Block | null
  #parent: Block | null
  #handlers: {
    onMount: Function | null
    onDestroy: Function | null
  }
  #unsubscribeGlobalStateHandlers: Function[]
  #isDestroyed: boolean
  #setOutlet: SetState<Block | null> | null
  #router: {
    pathname: string
    queryParams: Record<string, string>
    pathParam: { key: string; value: string } | null
  }

  constructor() {
    this.#key = null
    this.#child = null
    this.#parent = null
    this.#handlers = {
      onMount: null,
      onDestroy: null,
    }
    this.#unsubscribeGlobalStateHandlers = []
    this.#isDestroyed = false
    this.#setOutlet = null
    this.#router = {
      pathname: '',
      queryParams: {},
      pathParam: null,
    }
  }

  set key(value: string | null) {
    this.#key = value
  }

  get key() {
    return this.#key
  }

  get parent() {
    return this.#parent
  }

  set parent(value: Block | null) {
    this.#parent = value
  }

  get child() {
    return this.#child as Block
  }

  set child(child: Block) {
    this.#child = child
  }

  get childElement() {
    const child = this.#child as Block

    if (isElement(child)) {
      return child.element
    } else {
      let element: HTMLElement | null = null
      child.traverseChildren(child, (block) => {
        if (isElement(block)) {
          element = block.element
          return false
        }
        return true
      })
      return element as unknown as HTMLElement
    }
  }

  set onMountHandler(value: Function) {
    this.#handlers.onMount = value
  }

  set onDestroyHandler(value: Function) {
    this.#handlers.onDestroy = value
  }

  get setOutlet() {
    return this.#setOutlet as SetState<Block | null>
  }

  set setOutlet(setOutlet: SetState<Block | null>) {
    this.#setOutlet = setOutlet
  }

  get pathname() {
    return this.#router.pathname
  }

  set pathname(value: string) {
    this.#router.pathname = value
  }

  get queryParams() {
    return this.#router.queryParams
  }

  set queryParams(value: Record<string, string>) {
    this.#router.queryParams = value
  }

  get pathParam() {
    return this.#router.pathParam
  }

  set pathParam(value: { key: string; value: string } | null) {
    this.#router.pathParam = value
  }

  addUnsubscribeGlobalStateHandler(handler: Function) {
    this.#unsubscribeGlobalStateHandlers.push(handler)
  }

  #commit() {
    this.traverseChildren(this, (child) => {
      if (isComponent(child)) {
        child.triggerOnMount()
      }
      return true
    })
  }

  #onMount() {
    if (this.#handlers.onMount) {
      this.#handlers.onMount()
      this.#handlers.onMount = null
    }
  }

  #cleanUp() {
    if (this.#handlers.onDestroy) {
      this.#handlers.onDestroy()
    }
    this.#unsubscribeGlobalStateHandlers.forEach((handler) => {
      handler(this)
    })
  }

  #destroy() {
    if (this.#isDestroyed) {
      return
    }
    this.traverseChildren(this, (child) => {
      child.triggerCleanUp()
      return true
    })
  }

  #selfDestroy() {
    if (isElement(this.parent)) {
      this.parent.deleteChild(this)
    }
    this.triggerDestroy()
    this.#isDestroyed = true
  }

  triggerOnMount() {
    this.#onMount()
  }

  triggerCommit() {
    this.#commit()
  }

  triggerCleanUp() {
    this.#cleanUp()
  }

  triggerDestroy() {
    this.#destroy()
  }

  triggerSelfDestroy() {
    this.#selfDestroy()
  }

  traverseChildren(block: Block, callback: (child: Block) => boolean) {
    callback(block)
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
}

export const isComponent = (value: unknown): value is Component => {
  if (!value) {
    return false
  }

  return value instanceof Component
}
