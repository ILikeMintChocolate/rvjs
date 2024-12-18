import { ForComponent } from '@block/component/for.ts'
import { componentContext } from '@context/component.ts'
import { GetState } from '@hook/useState.ts'
import { Children } from '@type/jsx.ts'
import { copyGetter } from '@util/function.ts'
import { RVJS_COMPONENT_FN_IDENTIFIER } from '@util/identifier.ts'

interface ForProps<T> {
  each: T[]
  children: (item: T, index?: GetState<number>) => Children
}

export const For = <T>(props: ForProps<T>) => {
  const component = new ForComponent(
    () => {
      const self = componentContext.get() as ForComponent
      const children = self.renderItems(props.children)
      return children
    },
    // @ts-ignore
    props?.key,
  )
  copyGetter(props, 'each', component, 'each')
  return component
}
For.$$typeof = RVJS_COMPONENT_FN_IDENTIFIER
