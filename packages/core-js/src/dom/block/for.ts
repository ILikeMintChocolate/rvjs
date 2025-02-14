import { Block } from '@block/block.ts'
import { Prop } from '@hook/prop.ts'
import { GetState, isGetState } from '@hook/useState.ts'
import { isElementBlock, isTextNodeBlock } from '@type/rvjs.ts'

export interface ForProps<Item> {
  dependency: Item[] | GetState<Item[]> | Prop<Item[]>
  render: (item: Item, index: number) => Block | null
}

export class ForBlock<Item> extends Block {
  dependency: ForProps<Item>['dependency']
  render: ForProps<Item>['render']
  itemMap: Map<Item, Block>

  constructor(props: ForProps<Item>) {
    const { dependency, render } = props
    super({ type: 'FOR' })
    this.dependency = dependency
    this.render = render
    this.itemMap = new Map()
    this.initialRender()
  }

  initialRender() {
    const items = this.getItems(true)
    this.renderChildren(items)
  }

  reRender() {
    const items = this.getItems(false)
    const { newNodes, deletable, triggerBlocks, increased } =
      this.renderChildren(items)
    const deletableBlock = [...deletable]
    for (let i = 0; i < deletableBlock.length; i++) {
      this.destroyBlock(deletableBlock[i])
    }
    this.parent.requestDOMUpdate(
      this.parent,
      newNodes,
      this.rerenderableIndex,
      0,
      this.domLength,
      increased,
    )
    for (let i = 0; i < triggerBlocks.length; i++) {
      triggerBlocks[i].commit()
    }
  }

  getItems(isInitial: boolean) {
    if (!isGetState(this.dependency)) {
      return this.dependency
    }
    if (!isInitial) {
      return this.dependency()
    }
    return this.dependency({
      block: this,
      type: 'flowRender',
      property: 'flowRender',
      value: () => {
        this.reRender()
      },
    })
  }

  renderChildren(items: Item[]) {
    let domIndex = 0
    let rerenderableIndex = 0
    let newChildrenLength = 0
    const newNodes = []
    const triggerBlocks = []
    const prevItemMap = this.itemMap
    const prevChildrenLength = this.itemMap.size
    this.itemMap = new Map()
    const deletable = new Set(this.children)
    this.rerenderableChildren = []
    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      const isExist = prevItemMap.has(item)
      let child
      if (isExist) {
        child = prevItemMap.get(item)
        deletable.delete(child)
      } else {
        child = this.render(item, i)
        this.addChildren(child)
      }
      if (child) {
        this.itemMap.set(item, child)
        this.addChildren(child)
        triggerBlocks.push(child)
        newChildrenLength++
        if (isElementBlock(child) || isTextNodeBlock(child)) {
          domIndex += 1
          newNodes.push(child.element)
        } else {
          child.rerenderableIndex = rerenderableIndex++
          child.domIndex = domIndex
          domIndex += child.domLength
          this.rerenderableChildren.push(child)
          newNodes.push(...child.getChildNodes())
        }
      }
    }
    this.domLength = newNodes.length
    return {
      newNodes,
      deletable,
      triggerBlocks,
      increased: newChildrenLength - prevChildrenLength,
    }
  }

  // renderChildren(items: Item[]) {
  //   const prevOrderMap = this.orderMap
  //   for (let i = 0; i < items.length; i++) {
  //     const item = items[i]
  //     const isExist = prevOrderMap.has(item)
  //     const child = isExist
  //       ? prevOrderMap.pop(item).block
  //       : this.renderBlock(item, i)
  //     if (isExist) {
  //       deletable.delete(child)
  //     } else {
  //       triggerBlocks.push(child)
  //     }
  //   }
  //
  //   const child = this.render(item, index)
  //   this.rerenderableChildren = []
  //   const newNodes = []
  //   if (child) {
  //     this.addChild(child)
  //     child.domIndex = 0
  //     if (isElementBlock(child) || isTextNodeBlock(child)) {
  //       newNodes.push(child.element)
  //     } else {
  //       child.rerenderableIndex = 0
  //       this.rerenderableChildren.push(child)
  //       newNodes.push(...child.getChildNodes())
  //     }
  //     this.domLength = newNodes.length
  //   }
  //   return { child, newNodes }
  // }
}
