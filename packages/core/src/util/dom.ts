export const insertChildrenAtIndex = (
  parentElement: HTMLElement,
  index: number,
  newChildren: HTMLElement[],
) => {
  const referenceNode = parentElement.children[index]

  newChildren.forEach((child) => {
    parentElement.insertBefore(child, referenceNode)
  })
}
