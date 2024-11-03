import { Component } from '@block/component/component.ts'
import { componentContext } from '@context/component.ts'

export const root = (rootNode: HTMLElement, rootComponent: Component) => {
  componentContext.set(rootComponent)
  rootNode.append(...rootComponent.getNodes())
  rootComponent.renderTree(true)
  rootComponent.commit()
  componentContext.clear()
}
