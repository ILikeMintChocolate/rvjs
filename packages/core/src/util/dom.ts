import { HTMLNode } from '@element/type.ts'

export const insertChildrenAtIndex = (
  parentElement: HTMLElement,
  index: number,
  newChildren: HTMLNode[],
) => {
  const referenceNode = parentElement.children[index]

  newChildren.forEach((child) => {
    parentElement.insertBefore(child, referenceNode)
  })
}
