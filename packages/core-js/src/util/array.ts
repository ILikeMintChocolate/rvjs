export const swapSomeParts = <Item = unknown>(
  array: Item[],
  start: number,
  size: number,
  newParts: Item[],
) => {
  const newArray = [...array]
  newArray.splice(start, size, ...newParts)
  return newArray
}

export const findFlatIndex = (array: any[], index: number): number => {
  let flatIndex = index
  for (let i = 0; i < index; i++) {
    if (Array.isArray(array[i])) {
      flatIndex += array[i].length - 1
    }
  }
  return flatIndex
}

export const popAllIndex = <Value>(array: Value[], index: number) => {
  return array.slice(0, index)
}
