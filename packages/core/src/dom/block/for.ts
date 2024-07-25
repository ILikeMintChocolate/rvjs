import { Block } from '@block/block.ts'
import {
  componentContext,
  subscribeStateContext,
} from '@context/executionContext.ts'
import { FlowProps } from '@flow/type.ts'
import { GetState, isGetState } from '@hook/useState.ts'
import { isComponent, isElement } from '@type/rvjs.ts'
import { ArrayMap } from '@util/dataStructure/arrayMap.ts'

interface ForProps<Item> extends FlowProps<Item[]> {
  render: (item: Item, index: number) => Block
}

interface IndexedObject {
  index: number
  block: Block
}

export class ForBlock<Item> extends Block {
  #children: Block[]
  #dependency: ForProps<Item>['dependency']
  #render: ForProps<Item>['render']
  #index: number
  #orderMap: ArrayMap<Item, IndexedObject>

  constructor(props: ForProps<Item>) {
    const { dependency, render } = props
    super('FOR')
    this.#dependency = dependency
    this.#render = render
    this.#children = []
    this.#index = 0
    this.#orderMap = new ArrayMap()
    this.#initialRender()
  }

  get children() {
    return this.#children
  }

  get element() {
    return this.#children
      .flat(Infinity)
      .map((child) => {
        if (isElement(child) || isComponent(child)) {
          return child.element as HTMLElement
        }
      })
      .filter(Boolean)
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
    const newItems = isGetState(this.#dependency)
      ? this.#dependency()
      : this.#dependency
    subscribeStateContext.set(null)
    const currOrderMap = new ArrayMap<Item, IndexedObject>()
    const newChildren = newItems.map((item, index) => {
      const block = this.#renderItem(item, index)
      currOrderMap.push(item, { index, block })
      return block
    })
    this.#children = newChildren
    this.#orderMap = currOrderMap
  }

  #reRender() {
    const deletable = new Set(this.children)
    const prevOrderMap = this.#orderMap
    const currOrderMap = new ArrayMap<Item, IndexedObject>()
    const newItems = (this.#dependency as GetState<Item[]>)()
    const newChildren = newItems.map((item, index) => {
      const domIndex = this.#index + index
      if (prevOrderMap.has(item)) {
        const { block, index: blockIndex } = prevOrderMap.pop(item)
        deletable.delete(block)
        if (blockIndex !== index) {
          const parent = this.parent
          this.#DOMInsertAt(
            parent.element as HTMLElement,
            block.element as HTMLElement,
            domIndex,
          )
        }
        currOrderMap.push(item, { index, block })
        return block
      } else {
        const block = this.#renderItem(item, index)
        currOrderMap.push(item, { index, block })
        const parent = this.parent
        this.#DOMInsertAt(
          parent.element as HTMLElement,
          block.element as HTMLElement,
          domIndex,
        )
        return block
      }
    })

    ;[...deletable].forEach((block) => {
      block.triggerDestroy()
      block.element.remove()
    })

    this.#children = newChildren
    this.#orderMap = currOrderMap
  }

  #renderItem(item: Item, index: number) {
    const currentComponent = componentContext.get()!
    componentContext.set(currentComponent)
    const child = this.#render(item, index)
    child.parent = this
    componentContext.set(null)
    return child
  }

  #DOMInsertAt(parent: HTMLElement, newElement: HTMLElement, index: number) {
    parent.insertBefore(newElement, parent.children[index])
  }
}
