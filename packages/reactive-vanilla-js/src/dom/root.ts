import { ElementBlock } from './elementBlock.ts'
import { Children } from '../type/dom'

interface RootProperties {
  children: Children
}

export const root = (element: HTMLElement, properties: RootProperties) => {
  const rootBlock = new ElementBlock({ element })
  const { children } = properties
  
  rootBlock.appendChildren(children)

  return rootBlock
}
