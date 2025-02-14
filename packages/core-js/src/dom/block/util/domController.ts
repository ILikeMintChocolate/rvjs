import { Block } from '@block/block.ts'
import { Constructor, Empty } from '@block/util/mixin.ts'
import { HTMLNode } from '@element/type.ts'
import {
  isComponentBlock,
  isElementBlock,
  isForFlowBlock,
  isTextNodeBlock,
} from '@type/rvjs.ts'

export const DOMController = <TBase extends Constructor<Empty>>(
  Base: TBase,
) => {
  return class extends Base {
    element: HTMLElement | null
    domIndex: number
    domLength: number
    rerenderableIndex: number
    rerenderableChildren: Block[]

    constructor(...args: any[]) {
      super(...args)
      const { element } = args[0] as { element: HTMLElement }
      this.element = element
      this.domIndex = 0
      this.domLength = 0
      this.rerenderableIndex = 0
      this.rerenderableChildren = []
    }

    getChildNodes() {
      const elements: HTMLElement[] = []
      const blockStack: Block[] = [this as unknown as Block]
      while (blockStack.length > 0) {
        const block = blockStack.pop()
        if (!block) {
          continue
        }
        if (isElementBlock(block) || isTextNodeBlock(block)) {
          elements.push(block.element)
        } else if (isForFlowBlock(block)) {
          for (let i = block.children.length - 1; i >= 0; i--) {
            blockStack.push(block.children[i])
          }
        } else if (isComponentBlock(block)) {
          if (block.lazyRenderContext.isRendered) {
            blockStack.push(block.child)
          } else {
            // @ts-ignore
            elements.push(block.tempElement)
          }
        } else {
          blockStack.push(block.child)
        }
      }
      return elements
    }

    requestRerenderableChildrenUpdate(child: Block, increased: number) {
      this.rerenderableChildren
        .slice(child.rerenderableIndex + 1)
        .forEach((child) => {
          child.domIndex += increased
        })
      this.domLength += increased
    }

    requestDOMUpdate(
      self: Block,
      newNodes: HTMLNode[],
      rerenderableIndex: number,
      domIndex: number,
      domLength: number,
      increased: number,
    ) {
      const parent = self.parent
      if (isElementBlock(self)) {
        const { domIndex: localDOMIndex } =
          self.rerenderableChildren[rerenderableIndex]
        const prevNodes = [...self.element.childNodes].slice(
          domIndex + localDOMIndex,
          domIndex + localDOMIndex + domLength,
        ) as HTMLNode[]
        this.updateDOM(self.element, prevNodes, newNodes)
        self.requestRerenderableChildrenUpdate(self, increased)
      } else {
        const { domIndex: localDOMIndex } =
          self.rerenderableChildren[rerenderableIndex]
        self.domLength += increased
        parent.requestDOMUpdate(
          parent,
          newNodes,
          self.rerenderableIndex,
          domIndex + localDOMIndex,
          domLength,
          increased,
        )
        self.requestRerenderableChildrenUpdate(self, increased)
      }
    }

    updateDOM(
      element: HTMLElement,
      oldChildren: HTMLNode[],
      newChildren: HTMLNode[],
    ) {
      let oldStart = 0
      let oldEnd = oldChildren.length - 1
      let newStart = 0
      let newEnd = newChildren.length - 1
      while (oldStart <= oldEnd && newStart <= newEnd) {
        if (oldChildren[oldStart] === newChildren[newStart]) {
          oldStart++
          newStart++
        } else if (oldChildren[oldEnd] === newChildren[newEnd]) {
          oldEnd--
          newEnd--
        } else if (oldChildren[oldStart] === newChildren[newEnd]) {
          element.insertBefore(
            oldChildren[oldStart],
            oldChildren[oldEnd].nextSibling,
          )
          oldStart++
          newEnd--
        } else if (oldChildren[oldEnd] === newChildren[newStart]) {
          element.insertBefore(oldChildren[oldEnd], oldChildren[oldStart])
          oldEnd--
          newStart++
        } else {
          element.insertBefore(newChildren[newStart], oldChildren[oldStart])
          newStart++
        }
      }
      while (newStart <= newEnd) {
        element.appendChild(newChildren[newStart])
        newStart++
      }
    }

    destroyBlock(block: Block) {
      const self = this as unknown as Block
      if (block) {
        self.removeChild(block)
        const nodes = block.getChildNodes()
        block.triggerDestroy()
        for (let i = 0; i < nodes.length; i++) {
          nodes[i].remove()
        }
      }
    }
  }
}
