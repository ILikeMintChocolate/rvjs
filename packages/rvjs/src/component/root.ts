import { Children } from '../type/dom.ts'
import { ComponentBlock, isComponentBlock } from './componentBlock.ts'
import { ElementBlock, isElementBlock } from '../element/elementBlock.ts'
import { componentContext } from '../reactive/context/executionContext.ts'

interface RootProperties {
  children: Children
}

export const root = (
  element: HTMLElement,
  propertiesFn: () => RootProperties,
) => {
  const rootComponentBlock = new ComponentBlock()
  const rootElementBlock = new ElementBlock({ element })
  rootComponentBlock.key = 'root'

  componentContext.set(rootComponentBlock)
  const { children } = propertiesFn()
  rootElementBlock.appendChildren(children)
  children.forEach((childBlock) => {
    if (isComponentBlock(childBlock) || isElementBlock(childBlock)) {
      childBlock.onCommit()
    }
  })
  rootComponentBlock.pushChildren(rootElementBlock)
  componentContext.set(null)
}
