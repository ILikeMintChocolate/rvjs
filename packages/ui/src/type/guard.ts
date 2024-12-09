export const isGetter = (object: Object, key: string) => {
  const descriptor = Object.getOwnPropertyDescriptor(object, key)
  return descriptor && typeof descriptor.get === 'function'
}
