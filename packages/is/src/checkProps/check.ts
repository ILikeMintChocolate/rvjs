import checkPropsInDevelopment from './inDevelopment.ts'
import checkPropsInProduction from './inProduction.ts'

interface StartCheckPropsOptions {
  environment: 'development' | 'production'
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

export interface checkPropsOptions {
  errorOnNoValidator: boolean
}

export const checkProps = <Props>(
  props: Props,
  types: Record<string, Function>,
  options?: checkPropsOptions,
): Props => {
  if (hasToCheckProps) {
    // @ts-ignore
    return checkPropsInDevelopment<Props>(props, types, options) as Props
  } else {
    return checkPropsInProduction(props) as Props
  }
}

const func = <T>(value: T) => value

func('123')
