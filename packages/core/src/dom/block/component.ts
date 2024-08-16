import { Block } from '@block/block.ts'
import { LifecycleHandlers } from '@block/util/lifecycleHandlers.ts'
import { RouteContext } from '@block/util/routeContext.ts'
import { componentContext } from '@context/executionContext.ts'
import { isComponent, isElement, isTextNode } from '@type/rvjs.ts'

export class ComponentBlock extends RouteContext(LifecycleHandlers(Block)) {
  #key: string | null
  #lazyRenderContext: {
    tempElement: Comment
    isRendered: boolean
    renderFn: Function
    previousComponent: Block
  }

  constructor() {
    super({ type: 'COMPONENT' })
    this.#key = null
    this.#lazyRenderContext = {
      tempElement: null,
      isRendered: false,
      renderFn: null,
      previousComponent: null,
    }
    this.#initialRender()
  }

  set key(value: string | null) {
    this.#key = value
  }

  get key() {
    return this.#key
  }

  set renderFn(renderFn: Function) {
    this.#lazyRenderContext.renderFn = renderFn
  }

  get tempElement() {
    return this.#lazyRenderContext.tempElement
  }

  #initialRender() {
    const comment = document.createComment('lazy-component')
    this.#lazyRenderContext.tempElement = comment
    this.nodes = [comment]
  }

  triggerLazyRender() {
    componentContext.set(this)
    const renderedChild = this.#lazyRenderContext.renderFn()
    this.#lazyRenderContext.renderFn = null
    this.#lazyRenderContext.isRendered = true
    if (isComponent(this.#lazyRenderContext.previousComponent)) {
      componentContext.set(this.#lazyRenderContext.previousComponent)
    }
    this.#swapNodesForLazyRender(renderedChild)
  }

  isRendered() {
    return this.#lazyRenderContext.isRendered
  }

  #swapNodesForLazyRender(child: Block) {
    this.child = child
    this.domLength = child.domLength
    child.parent = this
    const rerenderableContexts = []
    if (!(isElement(child) || isTextNode(child))) {
      rerenderableContexts.push({ block: child, localDOMIndex: 0 })
    }
    this.rerenderableContexts = rerenderableContexts
    const fragment = document.createDocumentFragment()
    if (isElement(child) || isTextNode(child)) {
      fragment.append(child.element)
    } else {
      fragment.append(...child.nodes)
    }
    this.tempElement.replaceWith(fragment)
  }
}
