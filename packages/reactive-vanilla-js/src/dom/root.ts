import { ElementBlock, isElementBlock } from './elementBlock.ts'
import { Children } from '../type/dom'
import { ComponentBlock, isComponentBlock } from './componentBlock.ts'
import { componentContext } from './executionContext.ts'

interface RootProperties {
  children: Children
}

export const root = (
  element: HTMLElement,
  propertiesFn: () => RootProperties,
) => {
  const rootComponentBlock = new ComponentBlock()
  const rootElementBlock = new ElementBlock({ element })

  componentContext.set(rootComponentBlock)
  const { children } = propertiesFn()
  rootElementBlock.appendChildren(children)
  children.forEach((childBlock) => {
    if (isComponentBlock(childBlock) || isElementBlock(childBlock)) {
      childBlock.onCommit()
    }
  })
  rootComponentBlock.children = rootElementBlock
  componentContext.set(null)
}
