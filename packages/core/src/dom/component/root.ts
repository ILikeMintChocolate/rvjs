import { ComponentBlock } from '@block/component.ts'
import { ElementBlock } from '@block/element.ts'
import { componentContext } from '@context/executionContext.ts'
import { Child } from '@type/type.ts'

export const root = (element: HTMLElement, child: Child) => {
  const rootComponent = new ComponentBlock()
  const rootElement = new ElementBlock({ element })
  rootComponent.key = 'root'

  componentContext.set(rootComponent)
  rootElement.appendChildren([child])
  rootElement.triggerCommit()
  componentContext.set(null)
}
