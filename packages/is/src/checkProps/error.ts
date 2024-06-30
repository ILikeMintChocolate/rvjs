import { checkContext } from './context.ts'

export const printInvalidError = () => {
  const { key, value } = checkContext.prop!

  console.error(`Invalid prop "${key}" with value ${String(value)}.`)

  checkContext.isContinue = false
}

export const printNoValidatorError = () => {
  const { key } = checkContext.prop!

  console.error(`No validator found for prop "${key}".`)

  checkContext.isContinue = false
}

export const printUndefinedError = () => {
  const { key } = checkContext.prop!

  console.error(`Undefined prop "${key}".`)

  checkContext.isContinue = false
}
