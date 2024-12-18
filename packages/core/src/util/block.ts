import { isComponent } from '@type/guard.ts'
import { Children } from '@type/jsx.ts'

export const convertToNodes = (children: Children) => {
  const nodes = (children as [])
    // @ts-ignore
    .map((child) => (isComponent(child) ? child.getNodes() : child))
    .flat(Infinity) as Node[]
  return nodes
}
