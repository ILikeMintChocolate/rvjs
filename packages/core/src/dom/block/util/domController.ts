import { Block } from '@block/block.ts'
import { Constructor, Empty } from '@block/util/mixin.ts'
import { HTMLNode } from '@element/type.ts'
import { isElementBlock, isForFlowBlock, isTextNodeBlock } from '@type/rvjs.ts'
import { NestedArray } from '@type/util.ts'
import { RVJS_ELEMENT_BLOCK_SYMBOL } from '@util/symbol.ts'

export const DOMController = <TBase extends Constructor<Empty>>(
  Base: TBase,
) => {
  return class extends Base {
    element: HTMLElement | null
    nestedNodes: NestedArray<HTMLNode>
    domIndex: number
    domLength: number
    rerenderableIndex: number
    rerenderableChildren: Block[]

    constructor(...args: any[]) {
      super(...args)
      const { element } = args[0] as { element: HTMLElement }
      this.element = element
      this.nestedNodes = []
      this.domIndex = 0
      this.domLength = 0
      this.rerenderableIndex = 0
      this.rerenderableChildren = []
    }

    get nodes() {
      return (this.nestedNodes as any[]).flat(Infinity)
    }

    initialDOMUpdate(block: Block) {
      const parent = block.parent
      if (parent.$$typeof === RVJS_ELEMENT_BLOCK_SYMBOL) {
        parent.requestDOMPushUpdate(parent, parent.nodes)
      } else {
        parent.initialDOMUpdate(parent)
      }
    }

    requestDOMPushUpdate(block: Block, newNodes: HTMLNode[]) {
      const fragment = document.createDocumentFragment()
      fragment.append(...newNodes)
      if (block.$$typeof === RVJS_ELEMENT_BLOCK_SYMBOL) {
        block.element.append(fragment)
      }
    }

    requestRerenderableChildrenUpdate(child: Block, increased: number) {
      this.rerenderableChildren
        .slice(child.rerenderableIndex + 1)
        .forEach((child) => {
          child.domIndex += increased
        })
      this.domLength += increased
    }

    requestDOMSwapUpdate(
      caller: Block,
      me: Block,
      newNodes: HTMLNode[],
      deletable: Block[],
      rerenderableIndex: number,
      domIndex: number,
      domLength: number,
      increased: number,
    ) {
      const parent = me.parent
      if (isElementBlock(me)) {
        const { domIndex: localDOMIndex } =
          me.rerenderableChildren[rerenderableIndex]
        for (let i = 0; i < deletable.length; i++) {
          const deletableParent = deletable[i]
          const deletableElements: HTMLNode[] = []
          const findElementChild = (child: Block) => {
            if (!child) {
              return
            }
            if (isElementBlock(child) || isTextNodeBlock(child)) {
              deletableElements.push(child.element)
            } else if (isForFlowBlock(child)) {
              for (let i = 0; i < child.children.length; i++) {
                findElementChild(child.children[i])
              }
            } else {
              findElementChild(child.child)
            }
          }
          findElementChild(deletableParent)
          deletableParent?.triggerDestroy()
          for (let j = 0; j < deletableElements.length; j++) {
            deletableElements[j].remove()
          }
        }
        const prevNodes = [...me.element.childNodes].slice(
          domIndex + localDOMIndex,
          domIndex + localDOMIndex + domLength,
        )
        let pNodeIndex = 0
        newNodes.forEach((nNode) => {
          const pNode = prevNodes[pNodeIndex]
          if (nNode === pNode) {
            pNodeIndex++
          } else {
            if (isElementBlock(me)) {
              me.element.insertBefore(nNode, pNode)
            }
          }
        })
        me.requestRerenderableChildrenUpdate(me, increased)
      } else {
        const { domIndex: localDOMIndex } =
          me.rerenderableChildren[rerenderableIndex]
        me.nestedNodes[caller.domIndex] = caller.nestedNodes
        me.domLength += increased
        parent.requestDOMSwapUpdate(
          me,
          parent,
          newNodes,
          deletable,
          me.rerenderableIndex,
          domIndex + localDOMIndex,
          domLength,
          increased,
        )
        me.requestRerenderableChildrenUpdate(me, increased)
      }
    }
  }
}
