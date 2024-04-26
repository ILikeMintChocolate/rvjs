import { componentContext } from '@context/executionContext.ts'
import { Children } from '@dom/type.ts'
import { Element, isElement } from '../element/elementBlock.ts'
import { Component, isComponent } from './componentBlock.ts'

interface RootProperties {
  children: Children
}

export const root = (
  element: HTMLElement,
  propertiesFn: () => RootProperties,
) => {
  const rootComponent = new Component()
  const rootElement = new Element({ element })
  rootComponent.key = 'root'

  componentContext.set(rootComponent)
  const { children } = propertiesFn()
  rootElement.appendChildren(children)
  children.forEach((childBlock) => {
    if (isComponent(childBlock) || isElement(childBlock)) {
      childBlock.onCommit()
    }
  })
  rootComponent.pushChildren(rootElement)
  componentContext.set(null)
}
