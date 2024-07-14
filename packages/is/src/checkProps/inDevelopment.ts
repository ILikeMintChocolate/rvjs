import { Validator } from '../type/type.ts'
import { checkPropsOptions } from './check.ts'
import { checkContext } from './context.ts'
import { printNoValidatorError } from './error.ts'

const checkPropsInDevelopment = <Props extends Record<string, any>>(
  props: Props,
  types: Partial<Record<keyof Props, Validator>>,
  options: checkPropsOptions,
) => {
  const { errorOnNoValidator } = options
  const propKeys = new Set(Object.keys(props))
  for (const key in types) {
    const validator = types[key]
    const value = props[key]
    if (validator) {
      checkContext.prop = { key, value }
      validator(value)
      propKeys.delete(key)
    }
  }
  if (errorOnNoValidator && propKeys.size) {
    for (const key of propKeys) {
      checkContext.prop = { key, value: props[key] }
      printNoValidatorError()
    }
  }
  return props as Props
}

export default checkPropsInDevelopment
