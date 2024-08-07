import { Block } from '@block/block.ts'
import {
  componentContext,
  subscribeStateContext,
} from '@context/executionContext.ts'
import { HTMLNode } from '@element/type.ts'
import { Prop } from '@hook/prop.ts'
import { GetState, isGetState } from '@hook/useState.ts'
import { isElement, isTextNode } from '@type/rvjs.ts'

export interface SwitchProps<Item> {
  render: (item: Item) => Block | null
  dependency: Item | GetState<Item> | Prop<Item>
}

export class SwitchBlock<Item> extends Block {
  #child: Block | null
  #dependency: SwitchProps<Item>['dependency']
  #render: SwitchProps<Item>['render']

  constructor(props: SwitchProps<Item>) {
    const { dependency, render } = props
    super({ type: 'SWITCH' })
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
    const block = item ? this.#renderItem(item) : null
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
    const item = (this.#dependency as GetState<Item>)()
    const block = item ? this.#renderItem(item) : null
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

  #renderItem(item: Item) {
    const currentComponent = componentContext.get()!
    componentContext.set(currentComponent)
    const child = this.#render(item)
    if (child) {
      child.parent = this
    }
    componentContext.set(null)
    return child
  }
}
