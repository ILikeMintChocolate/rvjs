import { Block } from '@block/block.ts'
import { isForRender } from '@children/for.ts'
import { isSwitchRender } from '@children/switch.ts'
import { isToggleRender } from '@children/toggle.ts'
import { subscribeStateContext } from '@context/executionContext.ts'
import { isArray, isTextNode } from '@type/guard.ts'
import { isComponent, isElement } from '@type/rvjs.ts'
import { Children, Render } from '@type/type.ts'
import { NestedArray } from '@type/util.ts'
import { insertChildrenAtIndex } from '@util/dom.ts'
import { Observer } from '@util/observer.ts'

interface ElementProps {
  element: HTMLElement
}

export class Element extends Block {
  #element: HTMLElement
  #children: NestedArray<Block>
  #unsubscribeStateHandlers: Observer['unsubscribe'][]

  constructor(props: ElementProps) {
    super('ELEMENT')
    const { element } = props
    this.#element = element
    this.#children = []
    this.#unsubscribeStateHandlers = []
  }

  get element() {
    return this.#element
  }

  set element(value: HTMLElement) {
    this.#element = value
  }

  get children() {
    return this.#children
  }

  appendChildren(children: Children) {
    const elements = this.#renderChildren(children)
    this.#updateDOM(elements)
  }

  #renderChildren(children: Children) {
    const elements: NestedArray<HTMLElement | Text> = []

    children.forEach((child) => {
      if (!child) {
        return
      }
      if (isComponent(child)) {
        child.parent = this
        this.#children.push(child)
        elements.push(child.childElement)
      } else if (isElement(child)) {
        child.parent = this
        this.#children.push(child)
        elements.push(child.element)
      } else if (isTextNode(child)) {
        elements.push(child)
      } else if (
        isForRender(child) ||
        isSwitchRender(child) ||
        isToggleRender(child)
      ) {
        const children = this.#diffingChildren(child, elements.length)
        this.#children.push(children)
        const newElements = children.map((child) => {
          child.parent = this
          if (isElement(child)) {
            return child.element
          } else if (isComponent(child)) {
            return child.childElement
          }
        })
        elements.push(newElements)
      }
    })
    return elements
  }

  #diffingChildren(childrenFn: Render, index: number) {
    subscribeStateContext.set({
      block: this,
      type: 'childrenRender',
      property: 'childrenRender',
      value: () => {
        const { blocks, elements, index, size } =
          this.#diffingDynamicChildren(childrenFn)!
        this.#updateDOM(elements, index, size)
        blocks.forEach((block) => {
          block.triggerCommit()
        })
      },
    })
    const { getBlock, context } = childrenFn()
    const childBlock = getBlock()
    context.set({ index })
    subscribeStateContext.set(null)

    return isArray(childBlock) ? childBlock : childBlock ? [childBlock] : []
  }

  #diffingDynamicChildren(childrenFn: Render) {
    const newBlocks: Block[] = []

    if (isForRender(childrenFn)) {
      const { getBlock, context } = childrenFn()
      const { index: currentIndex } = context.get()!
      const newChildBlocks = getBlock()
      const newChildElements: HTMLElement[] = []
      const oldChildElementSize = (this.#children[currentIndex] as Block[])
        .length
      newChildBlocks.forEach((childBlock: Block) => {
        if (!childBlock) {
          return
        }
        childBlock.parent = this
        if (isElement(childBlock)) {
          newChildElements.push(childBlock.element)
        } else if (isComponent(childBlock)) {
          newChildElements.push(childBlock.childElement)
        }
        newBlocks.push(childBlock)
      })
      this.#children[currentIndex] = newChildBlocks

      return {
        blocks: newBlocks,
        elements: newChildElements,
        index: currentIndex,
        size: oldChildElementSize,
      }
    } else if (isSwitchRender(childrenFn) || isToggleRender(childrenFn)) {
      const { getBlock, context } = childrenFn()
      const { index: currentIndex } = context.get()!
      const newChildBlock = getBlock()
      const newChildElements: HTMLElement[] = []
      const oldChildElementSize = (this.#children[currentIndex] as Block[])
        .length
      if (newChildBlock) {
        newChildBlock.parent = this
        if (isElement(newChildBlock)) {
          newChildElements.push(newChildBlock.element)
        } else if (isComponent(newChildBlock)) {
          newChildElements.push(newChildBlock.childElement)
        }
        this.#children[currentIndex] = [newChildBlock]
      } else {
        this.#children[currentIndex] = []
      }
      if (newChildBlock) {
        newBlocks.push(newChildBlock)
      }
      return {
        blocks: newBlocks,
        elements: newChildElements,
        index: currentIndex,
        size: oldChildElementSize,
      }
    }
  }

  #updateDOM(
    newElements: NestedArray<HTMLElement | Text>,
    index?: number,
    size?: number,
  ) {
    if (index === undefined && size === undefined) {
      this.#element.replaceChildren(...newElements.flat())
    } else {
      const removeElements = [...this.#element.children].slice(
        index,
        index! + size!,
      )
      removeElements.forEach((element) => {
        this.#element.removeChild(element)
      })
      insertChildrenAtIndex(this.#element, index!, newElements.flat())
    }
  }

  appendStateUnsubscribeHandler(unsubscribeHandler: Observer['unsubscribe']) {
    this.#unsubscribeStateHandlers.push(unsubscribeHandler)
  }

  #cleanUp() {
    this.#unsubscribeStateHandlers.forEach((unsubscribeHandler) => {
      unsubscribeHandler(this)
    })
  }

  triggerCleanUp() {
    this.#cleanUp()
  }
}
