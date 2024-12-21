import { BlockComponent } from '@block/component/block.ts'
import { Component } from '@block/component/component.ts'
import { DefinedComponent } from '@block/component/defined.ts'
import { Constructor, Empty } from '@block/util/mixin.ts'
import { componentContext } from '@context/component.ts'
import { stateContext } from '@context/state.ts'
import { isDefined } from '@type/guard.ts'
import { Children } from '@type/jsx.ts'
import { convertToNodes } from '@util/block.ts'

export const DefinedRenderer = <TBase extends Constructor<Empty>>(
  Base: TBase,
) => {
  return class extends Base {
    self: DefinedComponent
    value: any
    startNode: Comment
    endNode: Comment
    isMounted: boolean

    constructor(...args: any[]) {
      super(...args)
      this.self = this as unknown as DefinedComponent
      this.self.startNode = document.createComment('DEFINED-COMPONENT-START')
      this.self.endNode = document.createComment('DEFINED-COMPONENT-END')
      this.self.isMounted = false
    }

    render(isInitial: boolean) {
      if (isInitial) {
        this.self.subscribeDependency()
      }
      if (!isDefined(this.self.value)) {
        this.self.deleteItem()
        this.self.isMounted = false
        return
      }
      if (!this.self.isMounted) {
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
        this.self.isMounted = true
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
      this.self.value
      stateContext.clear()
    }
  }
}
