import { BlockComponent } from '@block/component/block.ts'
import { Component } from '@block/component/component.ts'
import { Constructor, Empty } from '@block/util/mixin.ts'
import { isComponent } from '@type/guard.ts'
import { convertToNodes } from '@util/block.ts'

export const BlockRenderer = <TBase extends Constructor<Empty>>(
  Base: TBase,
) => {
  return class extends Base {
    self: BlockComponent
    tempNode: Comment
    childNodes: (Node | Component)[]

    constructor(...args: any[]) {
      super(...args)
      this.self = this as unknown as BlockComponent
      this.self.tempNode = document.createComment('BLOCK-COMPONENT-TEMP')
      this.self.childNodes = []
    }

    render() {
      const children = this.self.renderFn()
      children.forEach((child) => {
        if (isComponent(child)) {
          this.self.setParentChildRelation(child)
        }
      })
      const childNodes = convertToNodes(children)
      this.self.childNodes = childNodes
      this.self.replaceTempNodes(childNodes)
    }

    replaceTempNodes(nodes: Node[]) {
      this.self.isRendered = true
      this.self.tempNode.replaceWith(...nodes)
      this.self.tempNode = null
    }
  }
}
