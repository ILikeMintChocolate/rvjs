import { CaseComponent } from '@block/component/case.ts'
import { SwitchComponent } from '@block/component/switch.ts'
import { Constructor, Empty } from '@block/util/mixin.ts'
import { convertToNodes } from '@util/block.ts'

export const SwitchRenderer = <TBase extends Constructor<Empty>>(
  Base: TBase,
) => {
  return class extends Base {
    self: SwitchComponent
    startNode: Comment
    endNode: Comment
    renderedCase: CaseComponent

    constructor(...args: any[]) {
      super(...args)
      this.self = this as unknown as SwitchComponent
      this.self.startNode = document.createComment('SWITCH-COMPONENT-START')
      this.self.endNode = document.createComment('SWITCH-COMPONENT-END')
      this.self.renderedCase = null
    }

    render() {
      const children = this.self.renderFn() as CaseComponent[]
      this.self.updateDom(
        this.self.parentNode ?? this.self.startNode.parentNode,
        this.self.startNode,
        this.self.endNode,
        convertToNodes(children),
        this.self.startNode.nextSibling === this.self.endNode,
      )
    }

    renderItems(children: CaseComponent[]) {
      children.forEach((child) => {
        this.self.setParentChildRelation(child)
      })
    }

    updateSwitchDom(nodes: Node[]) {
      this.self.updateDom(
        this.self.parentNode ?? this.self.startNode.parentNode,
        this.self.startNode,
        this.self.endNode,
        nodes,
        true,
      )
    }
  }
}
