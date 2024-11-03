import { Component } from '@block/component/component.ts'
import { isComponent } from '@type/guard.ts'

export const convertToNodes = (children: (Node | Component)[]) => {
  const nodes = children
    .map((child) => (isComponent(child) ? child.getNodes() : child))
    .flat(Infinity) as Node[]
  return nodes
}
