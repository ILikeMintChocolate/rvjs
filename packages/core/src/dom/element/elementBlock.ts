import { isForRender } from '@children/for.ts'
import { isSwitchRender } from '@children/switch.ts'
import { isToggleRender, ToggleRender } from '@children/toggle.ts'
import { ComponentBlock, isComponentBlock } from '@component/componentBlock.ts'
import { subscribeStateContext } from '@context/executionContext.ts'
import { AnyBlock, Children, DynamicChildren } from '@dom/type.ts'
import { findFlatIndex, swapSomeParts } from '@util/array.ts'
import { Observer } from '@util/observer.ts'

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

  get children() {
    return this.#children
  }

  appendChildren(children: Children) {
    const elements = this.#renderChildren(children)
    this.#commitChildren(elements)
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
        type: 'childrenRender',
        property: 'forRender',
        value: () => {
          const { blocks, elements } = this.#diffingDynamicChildren(childrenFn)
          this.#commitChildren(elements)
          blocks.forEach((block) => {
            block.onCommit()
          })
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
        type: 'childrenRender',
        property: 'switchRender',
        value: () => {
          const { blocks, elements } = this.#diffingDynamicChildren(childrenFn)
          this.#commitChildren(elements)
          blocks.forEach((block) => {
            block.onCommit()
          })
        },
      })
      const { getBlock, context } = childrenFn()
      const childBlock = getBlock()
      context.set({ index })
      subscribeStateContext.set(null)
      return childBlock ? [childBlock] : []
    } else if (isToggleRender(childrenFn)) {
      subscribeStateContext.set({
        block: this,
        type: 'childrenRender',
        property: 'toggleRender',
        value: () => {
          const { blocks, elements } = this.#diffingDynamicChildren(childrenFn)
          this.#commitChildren(elements)
          blocks.forEach((block) => {
            block.onCommit()
          })
        },
      })
      const { getBlock, context } = (childrenFn as ToggleRender)()
      const childBlock = getBlock()
      context.set({ index })
      subscribeStateContext.set(null)
      return childBlock ? [childBlock] : []
    }
    return []
  }

  #diffingDynamicChildren(childrenFn: DynamicChildren) {
    const newBlocks: AnyBlock[] = []
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
        newBlocks.push(childBlock)
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
      } else {
        this.#children[currentIndex] = []
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
      if (newChildBlock) {
        newBlocks.push(newChildBlock)
      }
      elements.push(...swappedChildElements)
    } else if (isToggleRender(childrenFn)) {
      const { getBlock, context } = (childrenFn as ToggleRender)()
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
      } else {
        this.#children[currentIndex] = []
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
      if (newChildBlock) {
        newBlocks.push(newChildBlock)
      }
      elements.push(...swappedChildElements)
    }

    return { blocks: newBlocks, elements }
  }

  #commitChildren(elements: (HTMLElement | HTMLElement[])[]) {
    this.#element.replaceChildren(...elements.flat())
  }

  appendStateUnsubscribeHandler(unsubscribeHandler: Observer['unsubscribe']) {
    this.#stateUnsubscribeHandlers.push(unsubscribeHandler)
  }

  onCommit() {
    this.traverseChildrenUntilComponent((childComponentBlock) => {
      childComponentBlock.traverseShortcutChildComponents(
        (childComponentBlock) => {
          childComponentBlock.onMount()
        },
      )
    })
  }

  deleteChild(child: AnyBlock) {
    const newChildren: (AnyBlock | AnyBlock[])[] = []
    this.#children.forEach((children) => {
      if (Array.isArray(children)) {
        newChildren.push(children.filter((c) => c !== child))
      } else {
        if (children !== child) {
          newChildren.push(children)
        }
      }
    })
    this.#children = newChildren
    if (isElementBlock(child)) {
      child.element.remove()
    } else if (isComponentBlock(child)) {
      child.getChildElements().forEach((element) => {
        element.remove()
      })
    }
  }

  destroy() {
    this.traverseChildren((child) => {
      child.cleanUp()
    })
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

  traverseChildrenUntilComponent(callback: (child: ComponentBlock) => void) {
    if (this.#children.length === 0) {
      return
    }
    this.#children.flat().forEach((child) => {
      if (isComponentBlock(child)) {
        callback(child)
        return
      }
      child.traverseChildrenUntilComponent(callback)
    })
  }
}

export const isElementBlock = (value: unknown): value is ElementBlock => {
  if (!value) {
    return false
  }
  return value instanceof ElementBlock
}
