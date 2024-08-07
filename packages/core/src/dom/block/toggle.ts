import { Block } from '@block/block.ts'
import {
  componentContext,
  subscribeStateContext,
} from '@context/executionContext.ts'
import { HTMLNode } from '@element/type.ts'
import { Prop } from '@hook/prop.ts'
import { GetState, isGetState } from '@hook/useState.ts'
import { isElement, isTextNode } from '@type/rvjs.ts'

export interface ToggleProps<Bool> {
  dependency: Bool | GetState<Bool> | Prop<Bool>
  render: () => Block | null
}

export class ToggleBlock<Bool> extends Block {
  #child: Block | null
  #dependency: ToggleProps<Bool>['dependency']
  #render: ToggleProps<Bool>['render']

  constructor(props: ToggleProps<Bool>) {
    const { dependency, render } = props
    super({ type: 'TOGGLE' })
    this.#dependency = dependency
    this.#render = render
    this.#child = null
    this.#initialRender()
  }

  get child(): Block | null {
    return this.#child
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
    const item = isGetState(this.#dependency)
      ? this.#dependency()
      : this.#dependency
    subscribeStateContext.set(null)
    const newNodes: HTMLNode[] = []
    const rerenderableContexts = []
    const block = item ? this.#renderItem() : null
    this.#child = block
    if (block) {
      block.blockIndex = 0
      block.domIndex = 0
      if (isElement(block) || isTextNode(block)) {
        newNodes.push(block.element)
      } else {
        newNodes.push(...block.nodes)
        rerenderableContexts.push({ block, localDOMIndex: 0 })
      }
    }
    this.nodes = newNodes
    this.domLength = newNodes.length
    this.rerenderableContexts = rerenderableContexts
  }

  #reRender() {
    const deletable = this.#child
    const item = (this.#dependency as GetState<Bool>)()
    const block = item ? this.#renderItem() : null
    this.#child = block
    const newNodes: HTMLNode[] = []
    const rerenderableContexts = []
    if (block) {
      if (isElement(block) || isTextNode(block)) {
        newNodes.push(block.element)
      } else {
        newNodes.push(...block.nodes)
        rerenderableContexts.push({ block, localDOMIndex: 0 })
      }
    }
    const increased = newNodes.length - this.domLength
    this.nodes = newNodes
    this.domLength = newNodes.length
    this.rerenderableContexts = rerenderableContexts
    this.parent.requestDOMSwapUpdate(
      this,
      this.parent,
      this.nodes,
      [deletable],
      this.blockIndex,
      this.domIndex,
      this.domLength,
      increased,
    )
  }

  #renderItem() {
    const currentComponent = componentContext.get()!
    componentContext.set(currentComponent)
    const child = this.#render()
    if (child) {
      child.parent = this
    }
    componentContext.set(null)
    return child
  }
}
