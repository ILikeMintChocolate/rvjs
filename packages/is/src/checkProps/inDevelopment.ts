import {
  createInvalidTypeErrorMessage,
  createNoValidatorErrorMessage,
  createUndefinedPropErrorMessage,
} from './error.ts'

const checkPropsInDevelopment = <Props>(
  props: Props,
  types: Record<keyof Props, Function>,
) => {
  const uncheckedProps = { ...types }

  // @ts-ignore
  Object.keys(props).forEach((key) => {
    // @ts-ignore
    const value = props[key]
    // @ts-ignore
    const validator = types[key]

    if (!validator) {
      const errorMessage = createNoValidatorErrorMessage(key)
      console.error(errorMessage)
    } else if (!validator(value)) {
      const errorMessage = createInvalidTypeErrorMessage(
        key,
        value,
        validator.name,
      )
      console.error(errorMessage)
    }

    // @ts-ignore
    delete uncheckedProps[key]
  })

  Object.keys(uncheckedProps).forEach((key) => {
    const errorMessage = createUndefinedPropErrorMessage(key)
    console.error(errorMessage)
  })

  return props as Props
}

export default checkPropsInDevelopment
