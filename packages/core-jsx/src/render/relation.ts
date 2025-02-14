import { Component } from '@render/component.ts'

export const setComponentRelation = (
  parentComponent: Component,
  childComponent: Component,
) => {
  parentComponent.childComponents.push(childComponent)
  childComponent.parentComponent = parentComponent
  if (!childComponent.parentNode) {
    childComponent.parentNode = parentComponent.parentNode
  }
}
