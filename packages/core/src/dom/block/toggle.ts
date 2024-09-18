import { Block } from '@block/block.ts'
import { subscribeStateContext } from '@context/executionContext.ts'
import { HTMLNode } from '@element/type.ts'
import { Prop } from '@hook/prop.ts'
import { GetState, isGetState } from '@hook/useState.ts'
import { isElementBlock, isTextNodeBlock } from '@type/rvjs.ts'
import { NestedArray } from '@type/util.ts'

export interface ToggleProps<Bool> {
  dependency: Bool | GetState<Bool> | Prop<Bool>
  render: () => Block | null
}

export class ToggleBlock<Bool> extends Block {
  dependency: ToggleProps<Bool>['dependency']
  render: ToggleProps<Bool>['render']

  constructor(props: ToggleProps<Bool>) {
    const { dependency, render } = props
    super({ type: 'TOGGLE' })
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
    this.parent.requestDOMSwapUpdate(
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
        subscribeStateContext.set({
          block: this,
          type: 'flowRender',
          property: 'flowRender',
          value: () => {
            this.reRender()
          },
        })
        const item = isGetState(this.dependency)
          ? this.dependency()
          : this.dependency
        subscribeStateContext.set(null)
        return item
      } else {
        return (this.dependency as GetState<Bool>)()
      }
    })()
    const deletable = this.child
    const newNestedNodes: NestedArray<HTMLNode> = []
    const rerenderableChildren = []
    const child = item ? this.renderBlock() : null
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

  renderBlock() {
    const child = this.render()
    if (child) {
      child.parent = this
    }
    return child
  }
}
