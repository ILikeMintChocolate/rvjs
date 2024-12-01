import { Component } from '@block/component/component.ts'
import { RefreshComponent } from '@block/component/refresh.ts'
import { componentContext } from '@context/component.ts'
import { GetState } from '@hook/useState.ts'
import { toArray } from '@util/data.ts'
import { copyGetter } from '@util/function.ts'
import { RVJS_COMPONENT_FN_IDENTIFIER } from '@util/identifier.ts'

interface RefreshProps {
  by: GetState<unknown>
  children: (Component | Node)[]
}

export const Refresh = (props: RefreshProps) => {
  const component = new RefreshComponent(
    () => {
      const self = componentContext.get() as RefreshComponent
      const child = self.renderItem(toArray(props.children))
      return child
    },
    // @ts-ignore
    props.key,
  )
  copyGetter(props, 'by', component, 'by')
  return component
}
Refresh.$$typeof = RVJS_COMPONENT_FN_IDENTIFIER
