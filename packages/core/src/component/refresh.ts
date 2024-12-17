import { RefreshComponent } from '@block/component/refresh.ts'
import { componentContext } from '@context/component.ts'
import { Children } from '@type/jsx.ts'
import { toArray } from '@util/data.ts'
import { copyGetter } from '@util/function.ts'
import { RVJS_COMPONENT_FN_IDENTIFIER } from '@util/identifier.ts'

interface RefreshProps {
  by: any
  children: Children
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
