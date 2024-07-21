import { componentContext } from '@context/executionContext.ts'
import { Child } from '@type/type.ts'
import { Element } from '../element/elementBlock.ts'
import { Component } from './componentBlock.ts'

export const root = (element: HTMLElement, child: Child) => {
  const rootComponent = new Component()
  const rootElement = new Element({ element })
  rootComponent.key = 'root'

  componentContext.set(rootComponent)
  rootElement.appendChildren([child])
  rootElement.triggerCommit()
  componentContext.set(null)
}
