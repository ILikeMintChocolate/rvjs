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

interface SwitchProps<Dep> extends FlowProps<Dep> {
  render: () => Block | null
}

export class SwitchBlock<Dep> extends Block {
  #child: Block
  #dependency: SwitchProps<Dep>['dependency']
  #render: SwitchProps<Dep>['render']
  #index: number

  constructor(props: SwitchProps<Dep>) {
    const { dependency, render } = props
    super('SWITCH')
    this.#dependency = dependency
    this.#render = render
    this.#child = null
    this.#index = null
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
    isGetState(this.#dependency) ? this.#dependency() : this.#dependency
    subscribeStateContext.set(null)
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

  #reRender() {
    if (isElement(this.#child) || isComponent(this.#child)) {
      this.#child.triggerDestroy()
    }
    const newChild = this.#render()
    if (!newChild) {
      this.#updateDOM(null)
    } else {
      newChild.parent = this
      if (isElement(newChild) || isComponent(newChild)) {
        this.#updateDOM(newChild.element)
      }
    }
    this.#child = newChild
  }

  #updateDOM(newChildElement: HTMLNode | null) {
    if (this.#child && !newChildElement) {
      console.log('현재 O, 새로운 X')
      this.element.replaceWith()
    } else if (!this.#child && newChildElement) {
      console.log('현재 X, 새로운 O')
      const parent = this.parent
      if (isComponent(parent) || isElement(parent)) {
        insertChildrenAtIndex(parent.element, this.#index, [newChildElement])
      }
    } else {
      console.log('현재 O, 새로운 O')
      this.element.replaceWith(newChildElement)
    }
  }
}
