import { Block } from '@block/block.ts'
import { HTMLNode } from '@element/type.ts'
import { Prop } from '@hook/prop.ts'
import { GetState, isGetState } from '@hook/useState.ts'
import { isElementBlock, isTextNodeBlock } from '@type/rvjs.ts'
import { NestedArray } from '@type/util.ts'

export interface SwitchProps<Item> {
  render: (item: Item) => Block | null
  dependency: Item | GetState<Item> | Prop<Item>
}

export class SwitchBlock<Item> extends Block {
  dependency: SwitchProps<Item>['dependency']
  render: SwitchProps<Item>['render']

  constructor(props: SwitchProps<Item>) {
    const { dependency, render } = props
    super({ type: 'SWITCH' })
    this.dependency = dependency
    this.render = render
    this.child = null
    this.initialRender()
  }

  initialRender() {
    this.renderByItem(true)
  }

  reRender() {
    const { newBlock, deletable, increased } = this.renderByItem(false)
    this.parent.requestDOMUpdate(
      this,
      this.parent,
      this.nodes,
      [deletable],
      this.rerenderableIndex,
      0,
      this.domLength,
      increased,
    )
    if (newBlock) {
      newBlock.triggerCommit()
    }
  }

  renderByItem(isInitial: boolean) {
    const item = (() => {
      if (isInitial) {
        const item = isGetState(this.dependency)
          ? this.dependency({
              block: this,
              type: 'flowRender',
              property: 'flowRender',
              value: () => {
                this.reRender()
              },
            })
          : this.dependency
        return item
      } else {
        return (this.dependency as GetState<Item>)()
      }
    })()
    const deletable = this.child
    const newNestedNodes: NestedArray<HTMLNode> = []
    const rerenderableChildren = []
    const child = this.renderBlock(item)
    this.child = child
    if (child) {
      if (isElementBlock(child) || isTextNodeBlock(child)) {
        newNestedNodes.push(child.element)
      } else {
        child.domIndex = 0
        child.rerenderableIndex = 0
        rerenderableChildren.push(child)
        newNestedNodes.push(child.nestedNodes)
      }
    }
    const newNestedNodesLength = (newNestedNodes as any[]).flat(Infinity).length
    const increased = newNestedNodesLength - this.domLength
    this.nestedNodes = newNestedNodes
    this.domLength = newNestedNodesLength
    this.rerenderableChildren = rerenderableChildren
    return { newBlock: child, deletable, increased }
  }

  renderBlock(item: Item) {
    const child = this.render(item)
    if (child) {
      child.parent = this
    }
    return child
  }
}
