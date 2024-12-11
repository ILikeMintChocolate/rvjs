export const isGetter = (object: Object, key: string) => {
  const descriptor = Object.getOwnPropertyDescriptor(object, key)
  return descriptor && typeof descriptor.get === 'function'
}

export const isDefined = (value: unknown) => {
  return value !== undefined && value !== null
}

export const isHTMLElement = (value: unknown): value is HTMLElement => {
  return value instanceof HTMLElement
}
