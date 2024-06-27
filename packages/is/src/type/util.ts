import { isFunction } from './reference.ts'

export const pipe = (validators: Function[]) => (value: unknown) => {
  let currentValue = value

  for (let i = 0; i < validators.length; i++) {
    const validator = validators[i]

    if (!validator(currentValue)) {
      return false
    }
    if (i + 1 === validators.length) {
      return true
    }
    if (!isFunction(currentValue)) {
      return false
    }

    currentValue = currentValue()
  }

  return true
}

export const checkObject =
  (validators: Record<string, Function>) =>
  (valueObject: Record<string, unknown>) => {
    if (typeof valueObject !== 'object') {
      return false
    }

    const result = Object.entries(valueObject).every(([key, value]) => {
      const validator = validators[key]

      if (!validator) {
        return false
      }

      return validator(value)
    })

    return result
  }

export const checkArray = (validator: () => boolean) => (value: unknown) => {
  if (Array.isArray(value) && value.every(validator)) {
    return true
  }

  return false
}
