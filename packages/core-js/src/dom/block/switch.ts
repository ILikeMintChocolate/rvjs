import { Block } from '@block/block.ts'
import { Prop } from '@hook/prop.ts'
import { GetState, isGetState } from '@hook/useState.ts'
import { isElementBlock, isTextNodeBlock } from '@type/rvjs.ts'

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
    this.initialRender()
  }

  initialRender() {
    const item = this.getItem(true)
    this.renderChild(item)
  }

  reRender() {
    const hasPrevChild = this.child
    this.destroyBlock(this.child)
    const item = this.getItem(false)
    const { child, newNodes } = this.renderChild(item)
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

  getItem(isInitial: boolean) {
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

  renderChild(item: Item) {
    const child = this.render(item)
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
