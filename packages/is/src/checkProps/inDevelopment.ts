import { Validator } from '../type/type.ts'
import { checkPropsOptions } from './check.ts'
import { checkContext } from './context.ts'
import { printNoValidatorError } from './error.ts'

const checkPropsInDevelopment = <Props>(
  props: Record<string, unknown>,
  propsTypes: Record<string, Validator>,
  options: checkPropsOptions,
) => {
  const { errorOnNoValidator } = options ?? { errorOnNoValidator: true }
  const propKeys = new Set(Object.keys(props))

  for (const key in propsTypes) {
    const validator = propsTypes[key]
    const value = props[key]
    checkContext.prop = { key, value }

    // @ts-ignore
    validator(value)
    propKeys.delete(key)
  }
  if (errorOnNoValidator && propKeys.size) {
    for (const key of propKeys) {
      // @ts-ignore
      checkContext.prop = { key, value: props[key] }
      printNoValidatorError()
    }
  }

  return props as Props
}

export default checkPropsInDevelopment
