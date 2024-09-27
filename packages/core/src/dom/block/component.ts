import { Block } from '@block/block.ts'
import { ContextHook } from '@block/util/contextHook.ts'
import { LifecycleHandlers } from '@block/util/lifecycleHandlers.ts'
import { RouteContext } from '@block/util/routeContext.ts'
import { componentContext } from '@context/executionContext.ts'
import { HTMLNode } from '@element/type.ts'
import {
  isComponentBlock,
  isElementBlock,
  isTextNodeBlock,
} from '@type/rvjs.ts'
import { NestedArray } from '@type/util.ts'

export class ComponentBlock extends ContextHook(
  RouteContext(LifecycleHandlers(Block)),
) {
  key: string | null
  lazyRenderContext: {
    tempElement: Comment
    isRendered: boolean
    renderFn: Function
    previousComponent: Block
  }

  constructor() {
    super({ type: 'COMPONENT' })
    this.key = null
    this.lazyRenderContext = {
      tempElement: null,
      isRendered: false,
      renderFn: null,
      previousComponent: null,
    }
    this.initialRender()
  }

  set renderFn(renderFn: Function) {
    this.lazyRenderContext.renderFn = renderFn
  }

  get tempElement() {
    return this.lazyRenderContext.tempElement
  }

  initialRender() {
    const comment = document.createComment('lazy-component')
    this.lazyRenderContext.tempElement = comment
    this.nestedNodes = [comment]
    this.domLength = 1
  }

  triggerLazyRender() {
    const previousComponent = componentContext.get()
    if (previousComponent) {
      this.shortcutParent = previousComponent
      this.shortcutParent.addShortcutChild(this)
    }
    componentContext.set(this)
    const renderedChild = this.lazyRenderContext.renderFn()
    this.lazyRenderContext.renderFn = null
    this.lazyRenderContext.isRendered = true
    if (isComponentBlock(this.lazyRenderContext.previousComponent)) {
      componentContext.set(this.lazyRenderContext.previousComponent)
    }
    this.swapNodesForLazyRender(renderedChild)
    this.triggerLazySetOutlet()
  }

  isRendered() {
    return this.lazyRenderContext.isRendered
  }

  swapNodesForLazyRender(child: Block) {
    this.child = child
    this.domLength = child.domLength
    child.parent = this
    const newNestedNodes: NestedArray<HTMLNode> = []
    const rerenderableChildren = []
    if (isElementBlock(child) || isTextNodeBlock(child)) {
      newNestedNodes.push(child.element)
    } else {
      newNestedNodes.push(child.nestedNodes)
      rerenderableChildren.push(child)
    }
    this.nestedNodes = newNestedNodes
    this.rerenderableChildren = rerenderableChildren
    const fragment = document.createDocumentFragment()
    fragment.append(...this.nodes)
    this.tempElement.replaceWith(fragment)
    this.parent.requestRerenderableChildrenUpdate(this, child.domLength - 1)
  }
}
