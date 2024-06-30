import { Validator } from '../type/type.ts'
import { checkContext } from './context.ts'
import { printNoValidatorError } from './error.ts'

const checkPropsInDevelopment = (
  props: Record<string, unknown>,
  propsTypes: Record<string, Validator>,
) => {
  const propKeys = new Set(Object.keys(props))
  for (const key in propsTypes) {
    const validator = propsTypes[key]
    const value = props[key]
    checkContext.prop = { key, value }

    // @ts-ignore
    validator(value)
    propKeys.delete(key)
  }
  if (propKeys.size) {
    for (const key of propKeys) {
      // @ts-ignore
      checkContext.prop = { key, value: props[key] }
      printNoValidatorError()
    }
  }
  return props
}

export default checkPropsInDevelopment
