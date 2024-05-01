import checkPropsInDevelopment from './inDevelopment.ts'
import checkPropsInProduction from './inProduction.ts'

const checkProps = <Props>(
  props: Props,
  types: Record<keyof Props, Function>,
) => {
  if (process.env.NODE_ENV === 'production') {
    return checkPropsInProduction(props, types)
  }

  return checkPropsInDevelopment(props, types)
}

export default checkProps
