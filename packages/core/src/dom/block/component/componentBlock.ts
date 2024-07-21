import { Block } from '@block/block.ts'
import { SetState } from '@hook/useState.ts'
import { isElement } from '@type/rvjs.ts'

export class Component extends Block {
  #key: string | null
  #child: Block | null
  #handlers: {
    onMount: Function | null
    onDestroy: Function | null
  }
  #unsubscribeGlobalStateHandlers: Function[]
  #setOutlet: SetState<Block | null> | null
  #router: {
    pathname: string
    queryParams: Record<string, string>
    pathParam: { key: string; value: string } | null
  }

  #lazyRender: {
    renderFn: Function | null
  }

  constructor() {
    super('COMPONENT')

    this.#key = null
    this.#child = null
    this.#handlers = {
      onMount: null,
      onDestroy: null,
    }
    this.#unsubscribeGlobalStateHandlers = []
    this.#setOutlet = null
    this.#router = {
      pathname: '',
      queryParams: {},
      pathParam: null,
    }
    this.#lazyRender = {
      renderFn: null,
    }
  }

  set key(value: string | null) {
    this.#key = value
  }

  get key() {
    return this.#key
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

  set lazyRenderFn(value: Function) {
    this.#lazyRender.renderFn = value
  }

  addUnsubscribeGlobalStateHandler(handler: Function) {
    this.#unsubscribeGlobalStateHandlers.push(handler)
  }

  onMount() {
    if (this.#handlers.onMount) {
      this.#handlers.onMount()
      this.#handlers.onMount = null
    }
  }

  onDestroy() {
    if (this.#handlers.onDestroy) {
      this.#handlers.onDestroy()
    }
  }

  unsubscribeDependencies() {
    this.#unsubscribeGlobalStateHandlers.forEach((unsubscribeHandler) => {
      unsubscribeHandler(this)
    })
  }

  triggerCleanUp() {
    this.onDestroy()
    this.unsubscribeDependencies()
  }
}
