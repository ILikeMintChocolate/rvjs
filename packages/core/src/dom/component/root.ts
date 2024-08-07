import { ElementBlock } from '@block/element.ts'
import { Child } from '@type/type.ts'

export const root = (element: HTMLElement, child: Child) => {
  const rootElement = new ElementBlock({ element })
  rootElement.appendChildren([child])
  rootElement.triggerCommit()
}
