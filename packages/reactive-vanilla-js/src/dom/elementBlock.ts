import { AnyBlock, Children } from '../type/dom'
import { Observer } from '../util/observer.ts'
import { ForRender, isForRender } from '../reactive/children/for.ts'
import { isComponentBlock } from './componentBlock.ts'
import { isSwitchRender, SwitchRender } from '../reactive/children/switch.ts'
import { findFlatIndex, swapSomeParts } from '../util/array.ts'
import {
  onMountHandlerQueueContext,
  subscribeStateContext,
} from './executionContext.ts'

type DynamicChildren = ForRender | SwitchRender

interface ElementBlockProps {
  element: HTMLElement
}

export class ElementBlock {
  #element: HTMLElement
  #children: (AnyBlock | AnyBlock[])[]
  #parent: AnyBlock | null
  #stateUnsubscribeHandlers: Observer['unsubscribe'][]

  constructor(props: ElementBlockProps) {
    const { element } = props

    this.#element = element
    this.#children = []
    this.#parent = null
    this.#stateUnsubscribeHandlers = []
  }

  get element() {
    return this.#element
  }

  get parent() {
    return this.#parent
  }

  set parent(value: AnyBlock | null) {
    this.#parent = value
  }

  appendChildren(children: Children) {
    const elements = this.#renderChildren(children)
    this.#commitChildren(elements)
    onMountHandlerQueueContext.popAll((handler) => {
      handler()
    })
  }

  #renderChildren(children: Children) {
    const elements: (HTMLElement | HTMLElement[])[] = []

    children.forEach((child) => {
      if (!child) {
        return
      }
      if (isComponentBlock(child) || isElementBlock(child)) {
        child.parent = this
        this.#children.push(child)
        if (isElementBlock(child)) {
          elements.push(child.element)
        } else if (isComponentBlock(child)) {
          elements.push(child.getChildElements())
        }
      } else {
        const childBlocks = this.#diffingChildren(child, elements.length)
        this.#children.push(childBlocks)
        const tempElements: HTMLElement[] = []
        childBlocks.forEach((childBlock: AnyBlock) => {
          if (!childBlock) {
            return
          }
          childBlock.parent = this
          if (isElementBlock(childBlock)) {
            tempElements.push(childBlock.element)
          } else if (isComponentBlock(childBlock)) {
            tempElements.push(...childBlock.getChildElements())
          }
        })
        elements.push(tempElements)
      }
    })

    return elements
  }

  #diffingChildren(childrenFn: DynamicChildren, index: number) {
    if (isForRender(childrenFn)) {
      subscribeStateContext.set({
        block: this,
        property: null,
        value: () => {
          const elements = this.#diffingDynamicChildren(childrenFn)
          this.#commitChildren(elements)
        },
      })
      const { getBlocks, context } = childrenFn()
      const childBlocks = getBlocks()
      context.set({ index })
      subscribeStateContext.set(null)
      return childBlocks
    } else if (isSwitchRender(childrenFn)) {
      subscribeStateContext.set({
        block: this,
        property: null,
        value: () => {
          const elements = this.#diffingDynamicChildren(childrenFn)
          this.#commitChildren(elements)
        },
      })
      const { getBlock, context } = childrenFn()
      const childBlock = getBlock()
      context.set({ index })
      subscribeStateContext.set(null)
      return childBlock ? [childBlock] : []
    }
    return []
  }

  #diffingDynamicChildren(childrenFn: DynamicChildren) {
    const elements: (HTMLElement | HTMLElement[])[] = []

    if (isForRender(childrenFn)) {
      const { getBlocks, context } = childrenFn()
      const { index: currentIndex } = context.get()!
      const newChildBlocks = getBlocks()
      const newChildElements: HTMLElement[] = []
      const oldChildElementSize = (this.#children[currentIndex] as AnyBlock[])
        .length
      newChildBlocks.forEach((childBlock: AnyBlock) => {
        if (!childBlock) {
          return
        }
        childBlock.parent = this
        if (isElementBlock(childBlock)) {
          newChildElements.push(childBlock.element)
        } else if (isComponentBlock(childBlock)) {
          newChildElements.push(...childBlock.getChildElements())
        }
      })
      this.#children[currentIndex] = newChildBlocks
      const currentChildren = Array.from(
        this.#element.children,
      ) as HTMLElement[]
      const swappedChildElements = swapSomeParts<HTMLElement>(
        currentChildren,
        findFlatIndex(this.#children, currentIndex),
        oldChildElementSize,
        newChildElements,
      )
      elements.push(...swappedChildElements)
    } else if (isSwitchRender(childrenFn)) {
      const { getBlock, context } = childrenFn()
      const { index: currentIndex } = context.get()!
      const newChildBlock = getBlock()

      const newChildElements: HTMLElement[] = []
      const oldChildElementSize = (this.#children[currentIndex] as AnyBlock[])
        .length
      if (newChildBlock) {
        newChildBlock.parent = this
        if (isElementBlock(newChildBlock)) {
          newChildElements.push(newChildBlock.element)
        } else if (isComponentBlock(newChildBlock)) {
          newChildElements.push(...newChildBlock.getChildElements())
        }
        this.#children[currentIndex] = [newChildBlock]
      }
      const currentChildren = Array.from(
        this.#element.children,
      ) as HTMLElement[]
      const swappedChildElements = swapSomeParts<HTMLElement>(
        currentChildren,
        findFlatIndex(this.#children, currentIndex),
        oldChildElementSize,
        newChildElements,
      )
      elements.push(...swappedChildElements)
    }

    return elements
  }

  #commitChildren(elements: (HTMLElement | HTMLElement[])[]) {
    this.#element.replaceChildren(...elements.flat())
  }

  appendStateUnsubscribeHandler(unsubscribeHandler: Observer['unsubscribe']) {
    this.#stateUnsubscribeHandlers.push(unsubscribeHandler)
  }

  cleanUp() {
    this.#stateUnsubscribeHandlers.forEach((unsubscribeHandler) => {
      unsubscribeHandler(this)
    })
  }

  traverseChildren(
    callback: (child: AnyBlock) => void,
    block: AnyBlock = this,
  ) {
    if (this.#children.length === 0) {
      callback(block)
      return
    }
    this.#children.flat().forEach((child) => {
      child.traverseChildren(callback, child)
    })
    callback(block)
  }
}

export const isElementBlock = (value: unknown): value is ElementBlock => {
  return value instanceof ElementBlock
}
