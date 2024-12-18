import { CaseComponent } from '@block/component/case.ts'
import { componentContext } from '@context/component.ts'
import { Children } from '@type/jsx.ts'
import { toArray } from '@util/data.ts'
import { copyGetter } from '@util/function.ts'
import { RVJS_COMPONENT_FN_IDENTIFIER } from '@util/identifier.ts'

interface CaseProps {
  is: boolean
  children: Children
}

export const Case = (props: CaseProps) => {
  const component = new CaseComponent(
    () => {
      const self = componentContext.get() as CaseComponent
      const child = self.renderItem(toArray(props.children))
      return child
    },
    // @ts-ignore
    props.key,
  )
  copyGetter(props, 'is', component, 'is')
  return component
}
Case.$$typeof = RVJS_COMPONENT_FN_IDENTIFIER
