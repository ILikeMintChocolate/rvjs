import { isForRender } from '@children/for.ts'
import { isSwitchRender } from '@children/switch.ts'
import { isToggleRender, ToggleRender } from '@children/toggle.ts'
import { isComponent } from '@component/componentBlock.ts'
import { subscribeStateContext } from '@context/executionContext.ts'
import { Block, Children, Render } from '@dom/type.ts'
import { isArray } from '@type/guard.ts'
import { insertChildrenAtIndex } from '@util/dom.ts'
import { Observer } from '@util/observer.ts'
import { RVJS_ELEMENT } from '@util/symbol.ts'

interface ElementProps {
  element: HTMLElement
}

export class Element {
  $$typeof = RVJS_ELEMENT

  #element: HTMLElement
  #children: (Block | Block[])[]
  #parent: Block | null
  #stateUnsubscribeHandlers: Observer['unsubscribe'][]

  constructor(props: ElementProps) {
    const { element } = props

    this.#element = element
    this.#children = []
    this.#parent = null
    this.#stateUnsubscribeHandlers = []
  }

  get element() {
    return this.#element
  }

  set element(value: HTMLElement) {
    this.#element = value
  }

  get parent() {
    return this.#parent
  }

  set parent(value: Block | null) {
    this.#parent = value
  }

  get children() {
    return this.#children
  }

  appendChildren(children: Children) {
    const elements = this.#renderChildren(children)
    this.#updateDOM(elements)
  }

  #renderChildren(children: Children) {
    const elements: (HTMLElement | HTMLElement[])[] = []

    children.forEach((child) => {
      if (!child) {
        return
      }
      if (isComponent(child) || isElement(child)) {
        child.parent = this
        this.#children.push(child)
        if (isElement(child)) {
          elements.push(child.element)
        } else if (isComponent(child)) {
          elements.push(child.childElement)
        }
      } else {
        const childBlocks = this.#diffingChildren(child, elements.length)
        this.#children.push(childBlocks)
        const tempElements: HTMLElement[] = []
        childBlocks.forEach((childBlock: Block) => {
          if (!childBlock) {
            return
          }
          childBlock.parent = this
          if (isElement(childBlock)) {
            tempElements.push(childBlock.element)
          } else if (isComponent(childBlock)) {
            tempElements.push(childBlock.childElement)
          }
        })
        elements.push(tempElements)
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
    } else if (isSwitchRender(childrenFn)) {
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
    } else if (isToggleRender(childrenFn)) {
      const { getBlock, context } = (childrenFn as ToggleRender)()
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
    newElements: (HTMLElement | HTMLElement[])[],
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
    this.#stateUnsubscribeHandlers.push(unsubscribeHandler)
  }

  deleteChild(child: Block) {
    const newChildren: (Block | Block[])[] = []
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
    if (isElement(child)) {
      child.element.remove()
    } else if (isComponent(child)) {
      child.childElement.remove()
    }
  }

  #commit() {
    this.traverseChildren(this, (child) => {
      if (isComponent(child)) {
        child.triggerOnMount()
      }

      return true
    })
  }

  #cleanUp() {
    this.#stateUnsubscribeHandlers.forEach((unsubscribeHandler) => {
      unsubscribeHandler(this)
    })
  }

  #destroy() {
    this.traverseChildren(this, (child) => {
      child.triggerCleanUp()

      return true
    })
  }

  triggerCommit() {
    this.#commit()
  }

  triggerDestroy() {
    this.#destroy()
  }

  triggerCleanUp() {
    this.#cleanUp()
  }

  traverseChildren(block: Block, callback: (child: Block) => boolean) {
    const isContinue = callback(block)

    if (!isContinue) {
      return
    }
    if (isComponent(block)) {
      block.child.traverseChildren(block.child, callback)
    } else if (isElement(block)) {
      block.children.flat().forEach((child) => {
        child.traverseChildren(child, callback)
      })
    }
  }

  traverseParent(block: Block, callback: (parent: Block) => boolean) {
    const parent = block.parent
    if (!parent) {
      return
    }
    const isContinue = callback(parent)
    if (!isContinue) {
      return
    }
    while (parent) {
      parent.traverseParent(parent, callback)
    }
  }
}

export const isElement = (value: unknown): value is Element => {
  if (!value) {
    return false
  }

  return value instanceof Element
}
