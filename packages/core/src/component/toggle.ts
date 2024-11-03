import { Component } from '@block/component/component.ts'
import { ToggleComponent } from '@block/component/toggle.ts'
import { componentContext } from '@context/component.ts'
import { toArray } from '@util/data.ts'

interface ToggleProps {
  is: boolean
  children: (Component | Node)[]
}

export const Toggle = (props: ToggleProps) => {
  const self = componentContext.get() as ToggleComponent
  const child = self.renderItem(toArray(props.children))
  return child
}
