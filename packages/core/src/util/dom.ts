export const insertChildrenAtIndex = (
  parentElement: HTMLElement,
  index: number,
  newChildren: (HTMLElement | Text)[],
) => {
  const referenceNode = parentElement.children[index]

  newChildren.forEach((child) => {
    parentElement.insertBefore(child, referenceNode)
  })
}
