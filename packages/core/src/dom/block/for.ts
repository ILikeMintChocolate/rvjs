import { Block } from '@block/block.ts'
import { subscribeStateContext } from '@context/executionContext.ts'
import { HTMLNode } from '@element/type.ts'
import { Prop } from '@hook/prop.ts'
import { GetState, isGetState } from '@hook/useState.ts'
import { isElementBlock, isTextNodeBlock } from '@type/rvjs.ts'
import { NestedArray } from '@type/util.ts'
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
    this.#renderByItem(true)
  }

  #reRender() {
    const { triggerBlocks, deletable, increased } = this.#renderByItem(false)
    this.parent.requestDOMSwapUpdate(
      this,
      this.parent,
      this.nodes,
      [...deletable],
      this.rerenderableIndex,
      0,
      this.domLength,
      increased,
    )
    for (let i = 0; i < triggerBlocks.length; i++) {
      triggerBlocks[i].triggerCommit()
    }
  }

  #renderByItem(isInitial: boolean) {
    const items = (() => {
      if (isInitial) {
        subscribeStateContext.set({
          block: this,
          type: 'flowRender',
          property: 'flowRender',
          value: () => {
            this.#reRender()
          },
        })
        const items = isGetState(this.#dependency)
          ? this.#dependency()
          : this.#dependency
        subscribeStateContext.set(null)
        return items
      } else {
        return (this.#dependency as GetState<Item[]>)()
      }
    })()
    const prevOrderMap = this.#orderMap
    const currOrderMap = new ArrayMap<Item, IndexedObject>()
    const newNestedNodes: NestedArray<HTMLNode> = []
    const newChildren: Block[] = []
    const triggerBlocks = []
    const deletable = new Set(this.children)
    const rerenderableChildren = []
    let domIndex = 0
    let rerenderableIndex = 0
    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      const isExist = prevOrderMap.has(item)
      const child = isExist
        ? prevOrderMap.pop(item).block
        : this.#renderBlock(item, i)
      if (isExist) {
        deletable.delete(child)
      } else {
        triggerBlocks.push(child)
      }
      newChildren.push(child)
      currOrderMap.push(item, { index: i, block: child })
      if (isElementBlock(child) || isTextNodeBlock(child)) {
        domIndex += 1
        newNestedNodes.push(child.element)
      } else {
        child.rerenderableIndex = rerenderableIndex++
        child.domIndex = domIndex
        domIndex += child.domLength
        rerenderableChildren.push(child)
        newNestedNodes.push(child.nestedNodes)
      }
    }
    const newNestedNodesLength = (newNestedNodes as any[]).flat(Infinity).length
    const increased = newNestedNodesLength - this.domLength
    this.nestedNodes = newNestedNodes
    this.children = newChildren
    this.#orderMap = currOrderMap
    this.domLength = newNestedNodesLength
    this.rerenderableChildren = rerenderableChildren
    return { triggerBlocks, deletable, increased }
  }

  #renderBlock(item: Item, index: number) {
    const child = this.#render(item, index)
    if (child) {
      child.parent = this
    }
    return child
  }
}
