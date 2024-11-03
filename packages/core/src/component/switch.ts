import { CaseComponent } from '@block/component/case.ts'
import { SwitchComponent } from '@block/component/switch.ts'
import { componentContext } from '@context/component.ts'
import { toArray } from '@util/data.ts'

interface SwitchProps {
  children: CaseComponent[]
}

export const Switch = (props: SwitchProps) => {
  const self = componentContext.get() as SwitchComponent
  self.renderItems(toArray(props.children))
  return props.children
}
