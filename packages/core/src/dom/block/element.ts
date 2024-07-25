import { Block } from '@block/block.ts'
import { isTextNode } from '@type/guard.ts'
import {
  isComponent,
  isElement,
  isForFlow,
  isSwitchFlow,
  isToggleFlow,
} from '@type/rvjs.ts'
import { Children } from '@type/type.ts'
import { NestedArray } from '@type/util.ts'
import { insertChildrenAtIndex } from '@util/dom.ts'
import { Observer } from '@util/observer.ts'

interface ElementProps {
  element: HTMLElement
}

export class ElementBlock extends Block {
  #element: HTMLElement
  #unsubscribeStateHandlers: Observer['unsubscribe'][]
  #children: NestedArray<Block>

  constructor(props: ElementProps) {
    super('ELEMENT')
    const { element } = props
    this.#element = element
    this.#unsubscribeStateHandlers = []
    this.#children = []
  }

  get element() {
    return this.#element
  }

  set element(element: HTMLElement) {
    this.#element = element
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
      if (isComponent(child) || isElement(child)) {
        child.parent = this
        this.#children.push(child)
        elements.push(child.element)
      } else if (isTextNode(child)) {
        elements.push(child)
      } else if (isForFlow(child)) {
        child.parent = this
        child.index = elements.length
        elements.push(child.element)
      } else if (isSwitchFlow(child) || isToggleFlow(child)) {
        child.parent = this
        child.index = elements.length
        if (child.element) {
          elements.push(child.element)
        }
      }
    })
    return elements
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
