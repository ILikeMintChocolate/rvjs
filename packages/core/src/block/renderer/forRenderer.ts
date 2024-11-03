import { BlockComponent } from '@block/component/block.ts'
import { Component } from '@block/component/component.ts'
import { ForComponent } from '@block/component/for.ts'
import { Constructor, Empty } from '@block/util/mixin.ts'
import { componentContext } from '@context/component.ts'
import { stateContext } from '@context/state.ts'
import { convertToNodes } from '@util/block.ts'

export const ForRenderer = <TBase extends Constructor<Empty>>(Base: TBase) => {
  return class extends Base {
    self: ForComponent
    each: unknown[]
    startNode: Comment
    endNode: Comment
    itemMap: Map<unknown, Component>
    deletable: Component[]
    committable: Component[]

    constructor(...args: any[]) {
      super(...args)
      this.self = this as unknown as ForComponent
      this.self.startNode = document.createComment('FOR-COMPONENT-START')
      this.self.endNode = document.createComment('FOR-COMPONENT-END')
      this.itemMap = new Map()
      this.deletable = []
      this.committable = []
    }

    render(isInitial: boolean) {
      if (isInitial) {
        this.self.subscribeDependency()
      }
      const children = this.self.renderFn() as Component[]
      this.self.childComponents = children
      this.self.deleteItems(children)
      if (children.length > 0) {
        this.self.updateDom(
          this.self.parentNode ?? this.self.startNode.parentNode,
          this.self.startNode,
          this.self.endNode,
          convertToNodes(children),
          this.self.startNode.nextSibling === this.self.endNode,
        )
        if (!isInitial) {
          this.self.commitItems()
        }
        this.committable.length = 0
      }
    }

    renderItems(renderFn: (item: unknown) => (Component | Node)[]) {
      const newItemMap = new Map()
      const children = []
      this.self.each.forEach((item) => {
        let child
        if (this.self.itemMap.has(item)) {
          child = this.self.itemMap.get(item)
        } else {
          child = new BlockComponent(() => renderFn(item), 'BLOCK_COMPONENT')
          this.self.setParentChildRelation(child)
          this.committable.push(child)
        }
        this.self.itemMap.delete(item)
        children.push(child)
        newItemMap.set(item, child)
      })
      this.self.deletable = [...this.self.itemMap.values()]
      this.self.itemMap = newItemMap
      return children
    }

    commitItems() {
      this.self.committable.forEach((child) => {
        child.renderTree(true)
      })
      this.self.committable.forEach((child) => {
        child.commit()
      })
      this.self.committable = []
    }

    deleteItems(children: Component[]) {
      if (children.length === 0) {
        this.self.deletable.forEach((child) => {
          child.destroyComponent()
        })
        this.self.clearDom(this.self.startNode, this.self.endNode)
      } else {
        this.self.deletable.forEach((child) => {
          child.destroyComponent()
          if (children.length > 0) {
            child.destroyNode()
          }
        })
      }
      this.self.deletable = []
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
      this.self.each
      stateContext.clear()
    }
  }
}
