import { Component } from '@block/component/component.ts'
import { Constructor, Empty } from '@block/util/mixin.ts'
import { componentContext } from '@context/component.ts'
import {
  isBlockComponent,
  isForComponent,
  isHTMLElement,
  isRefreshComponent,
  isSvgElement,
  isSwitchComponent,
  isToggleComponent,
} from '@type/guard.ts'
import { Children } from '@type/jsx.ts'
import { convertToNodes } from '@util/block.ts'
import { toArray } from '@util/data.ts'

export const Renderer = <TBase extends Constructor<Empty>>(Base: TBase) => {
  return class extends Base {
    self: Component
    parentNode: Node
    isRendered: boolean
    isCommited: boolean
    componentFn: (props?: Record<string, any>) => Children

    constructor(...args: any[]) {
      super(...args)
      const [componentFn] = args
      this.self = this as unknown as Component
      this.self.componentFn = componentFn
      this.self.parentNode = null
      this.self.isRendered = false
      this.self.isCommited = false
    }

    renderFn() {
      return toArray(this.self.componentFn())
    }

    getNodes() {
      const nodes: Node[] = []
      if (!this.self.isRendered) {
        if (isBlockComponent(this.self)) {
          nodes.push(this.self.tempNode)
        } else if (
          isSwitchComponent(this.self) ||
          isForComponent(this.self) ||
          isToggleComponent(this.self) ||
          isRefreshComponent(this.self)
        ) {
          nodes.push(this.self.startNode, this.self.endNode)
        }
      } else {
        if (isBlockComponent(this.self)) {
          nodes.push(...convertToNodes(this.self.childNodes))
        } else if (
          isSwitchComponent(this.self) ||
          isForComponent(this.self) ||
          isToggleComponent(this.self) ||
          isRefreshComponent(this.self)
        ) {
          let startNode = this.self.startNode
          nodes.push(this.self.startNode)
          while (startNode !== this.self.endNode) {
            nodes.push(startNode.nextSibling)
          }
          nodes.push(this.self.endNode)
        }
      }
      return nodes
    }

    renderTree(includeSelf: boolean) {
      this.self.traverseChildren((child) => {
        if (!includeSelf && child === this.self) {
          return true
        }
        if (!child.isRendered) {
          componentContext.set(child)
          // @ts-ignore
          child.render(true)
        }
        return true
      })
    }

    commit() {
      this.self.traverseChildren((child) => {
        if (child.isCommited) {
          return false
        }
        if (child.onMountHandler) {
          child.onMountHandler()
          child.isCommited = true
        }
        return true
      })
    }

    destroyNode() {
      this.self.getNodes().forEach((node) => {
        if (isHTMLElement(node)) {
          node.remove()
        } else if (isSvgElement(node)) {
          node.parentNode.removeChild(node)
        }
      })
    }

    destroyComponent() {
      this.self.traverseChildren((child) => {
        if (child.onDestroyHandler) {
          child.onDestroyHandler()
        }
        child.unsubscribeAllEffects()
        return true
      })
    }

    clearDom(startCommentNode: Node, endCommentNode: Node) {
      let startNode = startCommentNode.nextSibling
      while (startNode !== endCommentNode) {
        const nextNode = startNode.nextSibling
        startNode.remove()
        startNode = nextNode
      }
    }

    updateDom(
      element: Node,
      startCommentNode: Node,
      endCommentNode: Node,
      newNodes: Node[],
      isInitial: boolean,
    ) {
      if (isInitial) {
        const fragment = document.createDocumentFragment()
        fragment.append(...newNodes)
        element.insertBefore(fragment, endCommentNode)
      } else {
        let oldNode = startCommentNode.nextSibling as Node
        let newStart = 0
        let newEnd = newNodes.length - 1
        const removedNodes = new Set<Node>()
        while (oldNode && oldNode !== endCommentNode && newStart <= newEnd) {
          const newNode = newNodes[newStart++]
          const nextNode = oldNode.nextSibling
          if (oldNode === newNode) {
            oldNode = nextNode
            continue
          }
          element.insertBefore(newNode, oldNode)
          element.removeChild(oldNode)
          removedNodes.add(oldNode)
          removedNodes.delete(newNode)
          oldNode = nextNode
        }
        ;[...removedNodes].forEach((node) => {
          element.insertBefore(node, endCommentNode)
        })
        while (newStart <= newEnd) {
          element.insertBefore(newNodes[newStart], endCommentNode)
          newStart++
        }
      }
    }
  }
}
