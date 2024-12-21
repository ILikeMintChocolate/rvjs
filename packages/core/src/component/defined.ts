import { DefinedComponent } from '@block/component/defined.ts'
import { componentContext } from '@context/component.ts'
import { Children } from '@type/jsx.ts'
import { toArray } from '@util/data.ts'
import { copyGetter } from '@util/function.ts'
import { RVJS_COMPONENT_FN_IDENTIFIER } from '@util/identifier.ts'

interface DefinedProps {
  value: any
  children: Children
}

export const Defined = (props: DefinedProps) => {
  const component = new DefinedComponent(
    () => {
      const self = componentContext.get() as DefinedComponent
      const child = self.renderItem(toArray(props.children))
      return child
    },
    // @ts-ignore
    props.key,
  )
  copyGetter(props, 'value', component, 'value')
  return component
}
Defined.$$typeof = RVJS_COMPONENT_FN_IDENTIFIER
