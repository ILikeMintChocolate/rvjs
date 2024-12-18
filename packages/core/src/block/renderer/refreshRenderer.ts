import { BlockComponent } from '@block/component/block.ts'
import { Component } from '@block/component/component.ts'
import { RefreshComponent } from '@block/component/refresh.ts'
import { Constructor, Empty } from '@block/util/mixin.ts'
import { componentContext } from '@context/component.ts'
import { stateContext } from '@context/state.ts'
import { GetState } from '@hook/useState.ts'
import { Children } from '@type/jsx.ts'
import { convertToNodes } from '@util/block.ts'

export const RefreshRenderer = <TBase extends Constructor<Empty>>(
  Base: TBase,
) => {
  return class extends Base {
    self: RefreshComponent
    by: GetState<unknown>
    startNode: Comment
    endNode: Comment

    constructor(...args: any[]) {
      super(...args)
      this.self = this as unknown as RefreshComponent
      this.self.startNode = document.createComment('REFRESH-COMPONENT-START')
      this.self.endNode = document.createComment('REFRESH-COMPONENT-END')
    }

    render(isInitial: boolean) {
      if (isInitial) {
        this.self.subscribeDependency()
      }
      this.self.deleteItem()
      this.self.clearDom(this.self.startNode, this.self.endNode)
      const child = (this.self.renderFn() as Component[])[0]
      if (!child) {
        return
      }
      this.self.updateDom(
        this.self.parentNode ?? this.self.startNode.parentNode,
        this.self.startNode,
        this.self.endNode,
        convertToNodes([child]),
        this.self.startNode.nextSibling === this.self.endNode,
      )
      if (!isInitial) {
        this.self.commitItem()
      }
    }

    renderItem(children: Children) {
      if (!(children as []).filter(Boolean).length) {
        return null
      }
      const child = new BlockComponent(() => children, 'BLOCK_COMPONENT')
      this.self.setParentChildRelation(child)
      return child
    }

    commitItem() {
      this.self.renderTree(false)
      this.self.commit()
    }

    deleteItem() {
      this.self.childComponents.forEach((child) => {
        child.destroyNode()
        child.destroyComponent()
      })
      this.self.childComponents = []
    }

    subscribeDependency() {
      stateContext.set({
        component: this.self,
        type: 'FLOW_EFFECT',
        effectFn: () => {
          stateContext.clear()
          const prevComponent = componentContext.get()
          componentContext.set(this.self)
          this.self.render(false)
          componentContext.set(prevComponent)
        },
      })
      this.self.by
      stateContext.clear()
    }
  }
}
