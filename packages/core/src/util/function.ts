export const isGetterEqual = (
  object1: Object,
  key1: string,
  object2: Object,
  key2: string,
) => {
  return (
    Object.getOwnPropertyDescriptor(object1, key1).get ===
    Object.getOwnPropertyDescriptor(object2, key2).get
  )
}

export const copyGetter = (
  source: Object,
  sourceKey: string,
  target: Object,
  targetKey: string,
) => {
  const getter = Object.getOwnPropertyDescriptor(source, sourceKey)
  Object.defineProperty(target, targetKey, getter)
}
