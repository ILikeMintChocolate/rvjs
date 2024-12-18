import { CaseComponent } from '@block/component/case.ts'
import { SwitchComponent } from '@block/component/switch.ts'
import { componentContext } from '@context/component.ts'
import { Children } from '@type/jsx.ts'
import { toArray } from '@util/data.ts'
import { RVJS_COMPONENT_FN_IDENTIFIER } from '@util/identifier.ts'

interface SwitchProps {
  children: Children
}

export const Switch = (props: SwitchProps) => {
  const component = new SwitchComponent(
    () => {
      const self = componentContext.get() as SwitchComponent
      self.renderItems(toArray(props.children) as CaseComponent[])
      return props.children
    },
    // @ts-ignore
    props.key,
  )
  return component
}
Switch.$$typeof = RVJS_COMPONENT_FN_IDENTIFIER
