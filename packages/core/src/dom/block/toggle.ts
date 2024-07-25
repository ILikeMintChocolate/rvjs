import { Block } from '@block/block.ts'
import {
  componentContext,
  subscribeStateContext,
} from '@context/executionContext.ts'
import { HTMLNode } from '@element/type.ts'
import { FlowProps } from '@flow/type.ts'
import { isGetState } from '@hook/useState.ts'
import { isComponent, isElement } from '@type/rvjs.ts'
import { insertChildrenAtIndex } from '@util/dom.ts'

interface ToggleProps<Dep> extends FlowProps<Dep> {
  render: () => Block | null
}

export class ToggleBlock<Dep> extends Block {
  #child: Block
  #dependency: ToggleProps<Dep>['dependency']
  #render: ToggleProps<Dep>['render']
  #index: number

  constructor(props: ToggleProps<Dep>) {
    const { dependency, render } = props
    super('TOGGLE')
    this.#dependency = dependency
    this.#render = render
    this.#child = null
    this.#index = 0
    this.#initialRender()
  }

  get child() {
    return this.#child
  }

  get element() {
    if (isElement(this.#child) || isComponent(this.#child)) {
      return this.#child.element as HTMLElement
    }
  }

  set index(index: number) {
    this.#index = index
  }

  #initialRender() {
    subscribeStateContext.set({
      block: this,
      type: 'flowRender',
      property: 'flowRender',
      value: () => {
        this.#reRender()
      },
    })
    const initialValue = isGetState(this.#dependency)
      ? this.#dependency()
      : this.#dependency
    subscribeStateContext.set(null)
    if (initialValue) {
      const currentComponent = componentContext.get()!
      componentContext.set(currentComponent)
      const rendered = this.#render()
      if (!rendered) {
        return null
      }
      this.#child = rendered
      this.#child.parent = this
      componentContext.set(null)
    }
  }

  #reRender() {
    const newValue = isGetState(this.#dependency)
      ? this.#dependency()
      : this.#dependency
    if (!newValue) {
      this.#child.triggerDestroy()
      this.#updateDOM(null)
      this.#child = null
    } else {
      const newChild = this.#render()
      newChild.parent = this
      if (isElement(newChild) || isComponent(newChild)) {
        this.#updateDOM(newChild.element)
      }
      this.#child = newChild
    }
  }

  #updateDOM(newChildElement: HTMLNode | null) {
    const parent = this.parent
    if (isComponent(parent) || isElement(parent)) {
      if (this.#child && !newChildElement) {
        this.element.replaceWith()
      } else if (!this.#child && newChildElement) {
        insertChildrenAtIndex(parent.element, this.#index, [newChildElement])
      } else {
        this.element.replaceWith(newChildElement)
      }
    }
  }
}
