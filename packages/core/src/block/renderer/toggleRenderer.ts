import { BlockComponent } from '@block/component/block.ts'
import { Component } from '@block/component/component.ts'
import { ToggleComponent } from '@block/component/toggle.ts'
import { Constructor, Empty } from '@block/util/mixin.ts'
import { componentContext } from '@context/component.ts'
import { stateContext } from '@context/state.ts'
import { Children } from '@type/jsx.ts'
import { convertToNodes } from '@util/block.ts'

export const ToggleRenderer = <TBase extends Constructor<Empty>>(
  Base: TBase,
) => {
  return class extends Base {
    self: ToggleComponent
    is: boolean
    startNode: Comment
    endNode: Comment
    isMounted: boolean

    constructor(...args: any[]) {
      super(...args)
      this.self = this as unknown as ToggleComponent
      this.self.startNode = document.createComment('TOGGLE-COMPONENT-START')
      this.self.endNode = document.createComment('TOGGLE-COMPONENT-END')
      this.self.isMounted = false
    }

    render(isInitial: boolean) {
      if (isInitial) {
        this.self.subscribeDependency()
      }
      if (this.self.is && this.self.isMounted) {
        return
      }
      if (!this.self.is) {
        this.self.deleteItem()
        this.self.clearDom(this.self.startNode, this.self.endNode)
        return
      }
      const children = this.self.renderFn() as Component[]
      this.self.updateDom(
        this.self.parentNode ?? this.self.startNode.parentNode,
        this.self.startNode,
        this.self.endNode,
        convertToNodes(children),
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
      this.self.isRendered = false
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
      this.self.is
      stateContext.clear()
    }
  }
}
