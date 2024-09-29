import { Block } from '@block/block.ts'
import { Prop } from '@hook/prop.ts'
import { GetState, isGetState } from '@hook/useState.ts'
import { isElementBlock, isTextNodeBlock } from '@type/rvjs.ts'

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
    this.initialRender()
  }

  initialRender() {
    const bool = this.getBool(true)
    if (bool) {
      this.renderChild()
    }
  }

  reRender() {
    const hasPrevChild = this.child
    this.destroyBlock(this.child)
    const bool = this.getBool(false)
    if (bool) {
      const { child, newNodes } = this.renderChild()
      let increased = 0
      if (child) {
        increased = hasPrevChild ? 0 : 1
      } else {
        this.domLength = 0
        increased = hasPrevChild ? -1 : 0
      }
      this.parent.requestDOMUpdate(
        this.parent,
        newNodes,
        this.rerenderableIndex,
        0,
        this.domLength,
        increased,
      )
      if (child) {
        child.commit()
      }
    }
  }

  getBool(isInitial: boolean) {
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

  renderChild() {
    const child = this.render()
    this.rerenderableChildren = []
    const newNodes = []
    if (child) {
      this.addChild(child)
      child.domIndex = 0
      if (isElementBlock(child) || isTextNodeBlock(child)) {
        newNodes.push(child.element)
      } else {
        child.rerenderableIndex = 0
        this.rerenderableChildren.push(child)
        newNodes.push(...child.getChildNodes())
      }
      this.domLength = newNodes.length
    }
    return { child, newNodes }
  }
}
