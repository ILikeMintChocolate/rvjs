import { Block } from '@block/block.ts'
import { LifecycleHandlers } from '@block/util/lifecycleHandlers.ts'
import { RouteContext } from '@block/util/routeContext.ts'
import { HTMLNode } from '@element/type.ts'
import { isElement, isTextNode } from '@type/rvjs.ts'

export class ComponentBlock extends RouteContext(LifecycleHandlers(Block)) {
  #key: string | null

  constructor() {
    super({ type: 'COMPONENT' })
    this.#key = null
  }

  set key(value: string | null) {
    this.#key = value
  }

  get key() {
    return this.#key
  }

  appendChild(child: Block) {
    this.child = child
    this.domLength = child.domLength
    child.parent = this
    const newNodes: HTMLNode[] = []
    const rerenderableContexts = []
    if (isElement(child) || isTextNode(child)) {
      newNodes.push(child.element)
    } else {
      newNodes.push(...child.nodes)
      rerenderableContexts.push({ block: child, localDOMIndex: 0 })
    }
    this.nodes = newNodes
    this.rerenderableContexts = rerenderableContexts
  }
}
