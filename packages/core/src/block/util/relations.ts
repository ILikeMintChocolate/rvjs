import { Component } from '@block/component/component.ts'
import { Constructor, Empty } from '@block/util/mixin.ts'

export const Relations = <TBase extends Constructor<Empty>>(Base: TBase) => {
  return class extends Base {
    parent: Component | null
    childComponents: Component[]

    constructor(...args: any[]) {
      super(...args)
      this.parent = null
      this.childComponents = []
    }

    setParentChildRelation(child: Component) {
      child.parent = this as unknown as Component
      this.childComponents.push(child)
    }

    traverseChildren(callback: (component: Component) => boolean) {
      const stack: Component[] = [this as unknown as Component]
      let isContinue = true
      while (stack.length > 0) {
        const component = stack.pop()
        isContinue = callback(component)
        if (isContinue) {
          ;[...component.childComponents].reverse().forEach((child) => {
            stack.push(child)
          })
        }
      }
    }

    traverseParent(callback: (component: Component) => boolean) {
      let component = this.parent
      let isContinue = true
      while (component && isContinue) {
        isContinue = callback(component)
        component = component.parent
      }
    }
  }
}
