import { Block } from '@block/block.ts'
import { Constructor, Empty } from '@block/util/mixin.ts'
import { HTMLNode } from '@element/type.ts'
import { isElement, isForFlow, isTextNode } from '@type/rvjs.ts'
import { RVJS_ELEMENT_SYMBOL } from '@util/symbol.ts'

export const DOMController = <TBase extends Constructor<Empty>>(
  Base: TBase,
) => {
  return class extends Base {
    #element: HTMLElement | null
    #sameLevelNodes: HTMLNode[]
    #blockIndex: number
    #domIndex: number
    #domLength: number
    #rerenderableContexts: {
      block: Block
      localDOMIndex: number
    }[]

    constructor(...args: any[]) {
      super(...args)
      const { element } = args[0] as { element: HTMLElement }
      this.element = element
      this.#sameLevelNodes = []
      this.#blockIndex = 0
      this.#domIndex = 0
      this.#domLength = 0
    }

    get element() {
      return this.#element
    }

    set element(element: HTMLElement) {
      this.#element = element
    }

    get nodes() {
      return this.#sameLevelNodes
    }

    set nodes(nodes: HTMLNode[]) {
      this.#sameLevelNodes = nodes
    }

    get blockIndex() {
      return this.#blockIndex
    }

    set blockIndex(index: number) {
      this.#blockIndex = index
    }

    get domIndex() {
      return this.#domIndex
    }

    set domIndex(index: number) {
      this.#domIndex = index
    }

    get domLength() {
      return this.#domLength
    }

    set domLength(length: number) {
      this.#domLength = length
    }

    get rerenderableContexts() {
      return this.#rerenderableContexts
    }

    set rerenderableContexts(
      contexts: {
        block: Block
        localDOMIndex: number
      }[],
    ) {
      this.#rerenderableContexts = contexts
    }

    initialDOMUpdate(block: Block) {
      const parent = block.parent
      if (parent.$$typeof === RVJS_ELEMENT_SYMBOL) {
        parent.requestDOMPushUpdate(parent, parent.nodes)
      } else {
        parent.initialDOMUpdate(parent)
      }
    }

    requestDOMPushUpdate(block: Block, newNodes: HTMLNode[]) {
      const fragment = document.createDocumentFragment()
      fragment.append(...newNodes)
      if (block.$$typeof === RVJS_ELEMENT_SYMBOL) {
        block.#element.append(fragment)
      }
    }

    requestDOMSwapUpdate(
      caller: Block,
      me: Block,
      newNodes: HTMLNode[],
      deletable: Block[],
      blockIndex: number,
      domIndex: number,
      domLength: number,
      increased: number,
    ) {
      const parent = me.parent
      if (isElement(me)) {
        const { localDOMIndex } = me.rerenderableContexts[blockIndex]
        for (let i = 0; i < deletable.length; i++) {
          const deletableParent = deletable[i]
          const deletableElements: HTMLNode[] = []
          const findElementChild = (child: Block) => {
            if (!child) {
              return
            }
            if (isElement(child) || isTextNode(child)) {
              deletableElements.push(child.element)
            } else if (isForFlow(child)) {
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
            if (isElement(me)) {
              this.element.insertBefore(nNode, pNode)
            }
          }
        })
        if (!isElement(caller)) {
          this.rerenderableContexts.slice(blockIndex + 1).forEach((context) => {
            context.localDOMIndex += increased
          })
        }
      } else {
        const { localDOMIndex } = me.rerenderableContexts[blockIndex]
        parent.requestDOMSwapUpdate(
          me,
          parent,
          newNodes,
          deletable,
          me.blockIndex,
          domIndex + localDOMIndex,
          domLength,
          increased,
        )
        me.rerenderableContexts.slice(blockIndex + 1).forEach((context) => {
          context.localDOMIndex += increased
        })
      }
    }
  }
}
