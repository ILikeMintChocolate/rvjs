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

export const isString = (value: unknown): value is string => {
  return typeof value === 'string'
}

export const isArray = (value: unknown): value is unknown[] => {
  return Array.isArray(value)
}

export const isObject = (value: unknown): value is Object => {
  return typeof value === 'object'
}
