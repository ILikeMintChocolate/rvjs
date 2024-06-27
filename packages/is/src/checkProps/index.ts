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

export const checkProps = <Props>(
  props: Props,
  types: Record<keyof Props, Function>,
) => {
  if (hasToCheckProps) {
    return checkPropsInDevelopment(props, types)
  } else {
    return checkPropsInProduction(props, types)
  }
}
