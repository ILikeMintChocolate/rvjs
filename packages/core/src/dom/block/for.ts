import { Block } from '@block/block.ts'
import {
  componentContext,
  subscribeStateContext,
} from '@context/executionContext.ts'
import { HTMLNode } from '@element/type.ts'
import { Prop } from '@hook/prop.ts'
import { GetState, isGetState } from '@hook/useState.ts'
import { isElement, isTextNode } from '@type/rvjs.ts'
import { ArrayMap } from '@util/dataStructure/arrayMap.ts'

export interface ForProps<Item> {
  dependency: Item[] | GetState<Item[]> | Prop<Item[]>
  render: (item: Item, index: number) => Block | null
}

interface IndexedObject {
  index: number
  block: Block
}

export class ForBlock<Item> extends Block {
  #dependency: ForProps<Item>['dependency']
  #render: ForProps<Item>['render']
  #orderMap: ArrayMap<Item, IndexedObject>

  constructor(props: ForProps<Item>) {
    const { dependency, render } = props
    super({ type: 'FOR' })
    this.#dependency = dependency
    this.#render = render
    this.#orderMap = new ArrayMap()
    this.#initialRender()
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
    const newItems = isGetState(this.#dependency)
      ? this.#dependency()
      : this.#dependency
    subscribeStateContext.set(null)
    const currOrderMap = new ArrayMap<Item, IndexedObject>()
    const newNodes: HTMLNode[] = []
    const newChildren: Block[] = []
    const rerenderableContexts = []
    let domIndex = 0
    let blockIndex = 0
    for (let i = 0; i < newItems.length; i++) {
      const item = newItems[i]
      const block = this.#renderItem(item, i)
      currOrderMap.push(item, { index: i, block })
      newChildren.push(block)
      block.domIndex = domIndex
      if (isElement(block) || isTextNode(block)) {
        newNodes.push(block.element)
      } else {
        newNodes.push(...block.nodes)
        block.blockIndex = blockIndex++
        rerenderableContexts.push({
          block: block,
          localDOMIndex: domIndex,
        })
      }
      domIndex += block.domLength
    }
    this.#orderMap = currOrderMap
    this.nodes = newNodes
    this.domLength = newNodes.length
    this.children = newChildren
    this.rerenderableContexts = rerenderableContexts
  }

  #reRender() {
    const prevOrderMap = this.#orderMap
    const currOrderMap = new ArrayMap<Item, IndexedObject>()
    const newItems = (this.#dependency as GetState<Item[]>)()
    const newNodes: HTMLNode[] = []
    const newChildren: Block[] = []
    const deletable = new Set(this.children)
    const rerenderableContexts = []
    let domIndex = 0
    let blockIndex = 0
    for (let i = 0; i < newItems.length; i++) {
      const item = newItems[i]
      const isExist = prevOrderMap.has(item)
      const block = isExist
        ? prevOrderMap.pop(item).block
        : this.#renderItem(item, i)
      isExist && deletable.delete(block)
      newChildren.push(block)
      currOrderMap.push(item, { index: i, block })
      block.domIndex = domIndex
      if (isElement(block) || isTextNode(block)) {
        newNodes.push(block.element)
      } else {
        newNodes.push(...block.nodes)
        block.blockIndex = blockIndex++
        rerenderableContexts.push({
          block: block,
          localDOMIndex: domIndex,
        })
      }
      domIndex += block.domLength
    }
    const increased = newNodes.length - this.domLength
    this.nodes = newNodes
    this.children = newChildren
    this.#orderMap = currOrderMap
    this.domLength = newNodes.length
    this.rerenderableContexts = rerenderableContexts
    this.parent.requestDOMSwapUpdate(
      this,
      this.parent,
      this.nodes,
      [...deletable],
      this.blockIndex,
      this.domIndex,
      this.domLength,
      increased,
    )
  }

  #renderItem(item: Item, index: number) {
    const currentComponent = componentContext.get()!
    componentContext.set(currentComponent)
    const child = this.#render(item, index)
    if (child) {
      child.parent = this
    }
    componentContext.set(null)
    return child
  }
}
