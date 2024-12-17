import { ToggleComponent } from '@block/component/toggle.ts'
import { componentContext } from '@context/component.ts'
import { Children } from '@type/jsx.ts'
import { toArray } from '@util/data.ts'
import { copyGetter } from '@util/function.ts'
import { RVJS_COMPONENT_FN_IDENTIFIER } from '@util/identifier.ts'

interface ToggleProps {
  is: boolean
  children: Children
}

export const Toggle = (props: ToggleProps) => {
  const component = new ToggleComponent(
    () => {
      const self = componentContext.get() as ToggleComponent
      // @ts-ignore
      const child = self.renderItem(toArray(props.children))
      return child
    },
    // @ts-ignore
    props.key,
  )
  copyGetter(props, 'is', component, 'is')
  return component
}
Toggle.$$typeof = RVJS_COMPONENT_FN_IDENTIFIER
