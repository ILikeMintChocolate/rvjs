import { CaseComponent } from '@block/component/case.ts'
import { Component } from '@block/component/component.ts'
import { componentContext } from '@context/component.ts'
import { toArray } from '@util/data.ts'

interface CaseProps {
  is: boolean
  children: (Component | Node)[]
}

export const Case = (props: CaseProps) => {
  const self = componentContext.get() as CaseComponent
  const child = self.renderItem(toArray(props.children))
  return child
}
