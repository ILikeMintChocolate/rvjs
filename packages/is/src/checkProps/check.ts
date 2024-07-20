import { Validator } from '../type/type.ts'
import checkPropsInDevelopment from './inDevelopment.ts'
import checkPropsInProduction from './inProduction.ts'

interface StartCheckPropsOptions {
  environment: 'development' | 'production'
}

export interface checkPropsOptions {
  errorOnNoValidator: boolean
}

export let hasToCheckProps = false

export const startCheckProps = (options: StartCheckPropsOptions) => {
  const { environment } = options
  if (environment === 'development') {
    hasToCheckProps = true
  } else if (environment === 'production') {
    hasToCheckProps = false
  }
}

export const checkProps = <Props extends Record<string, any>>(
  props: Props,
  types: Partial<Record<keyof Props, Validator>>,
  options?: checkPropsOptions,
): Props => {
  if (hasToCheckProps) {
    return checkPropsInDevelopment(
      props,
      types,
      options ?? { errorOnNoValidator: true },
    ) as Props
  } else {
    return checkPropsInProduction(props) as Props
  }
}
