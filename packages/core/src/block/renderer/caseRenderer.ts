import { BlockComponent } from '@block/component/block.ts'
import { CaseComponent } from '@block/component/case.ts'
import { Component } from '@block/component/component.ts'
import { Constructor, Empty } from '@block/util/mixin.ts'
import { componentContext } from '@context/component.ts'
import { stateContext } from '@context/state.ts'
import { Children } from '@type/jsx.ts'
import { convertToNodes } from '@util/block.ts'

export const CaseRenderer = <TBase extends Constructor<Empty>>(Base: TBase) => {
  return class extends Base {
    self: CaseComponent
    startNode: Comment | null
    endNode: Comment | null
    is: boolean
    isMounted: boolean

    constructor(...args: any[]) {
      super(...args)
      this.self = this as unknown as CaseComponent
      this.self.startNode = document.createComment('CASE-COMPONENT-START')
      this.self.endNode = document.createComment('CASE-COMPONENT-END')
      this.self.isMounted = false
    }

    render(isInitial: boolean) {
      if (isInitial) {
        this.self.subscribeDependency()
      }
      if (
        (!this.self.is && !this.isMounted) ||
        (this.self.is && this.self.isMounted)
      ) {
        return
      }
      if (!this.self.is && this.self.isMounted) {
        this.self.deleteItem()
        return
      }
      const children = this.self.renderFn() as Component[]
      this.self.isMounted = true
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
      const child = new BlockComponent(() => children, 'BLOCK_COMPONENT')
      this.self.setParentChildRelation(child)
      return child
    }

    commitItem() {
      this.self.renderTree(false)
      this.self.commit()
    }

    deleteItem() {
      this.self.isMounted = false
      this.self.clearDom(this.self.startNode, this.self.endNode)
      this.self.childComponents.forEach((child) => {
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
