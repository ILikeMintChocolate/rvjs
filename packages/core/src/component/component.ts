import { BlockComponent } from '@block/component/block.ts'
import { CaseComponent } from '@block/component/case.ts'
import { Component } from '@block/component/component.ts'
import { ForComponent } from '@block/component/for.ts'
import { SwitchComponent } from '@block/component/switch.ts'
import { ToggleComponent } from '@block/component/toggle.ts'
import {
  isCaseComponentFn,
  isForComponentFn,
  isSwitchComponentFn,
  isToggleComponentFn,
} from '@type/guard.ts'
import { copyGetter } from '@util/function.ts'

const components = {
  BLOCK_COMPONENT: BlockComponent,
  SWITCH_COMPONENT: SwitchComponent,
  CASE_COMPONENT: CaseComponent,
  FOR_COMPONENT: ForComponent,
  TOGGLE_COMPONENT: ToggleComponent,
}

export const createComponent = (
  componentFn: Component['componentFn'],
  props: any = {},
) => {
  const type = findComponentType(componentFn)
  const component = new components[type](
    () => componentFn(props),
    type,
    props.key,
  )
  if (type === 'CASE_COMPONENT') {
    copyGetter(props, 'is', component, 'is')
  } else if (type === 'FOR_COMPONENT') {
    copyGetter(props, 'each', component, 'each')
  } else if (type === 'TOGGLE_COMPONENT') {
    copyGetter(props, 'is', component, 'is')
  }
  return component
}

const findComponentType = (
  componentFn: Component['componentFn'],
): Component['type'] => {
  if (isSwitchComponentFn(componentFn)) {
    return 'SWITCH_COMPONENT'
  } else if (isCaseComponentFn(componentFn)) {
    return 'CASE_COMPONENT'
  } else if (isForComponentFn(componentFn)) {
    return 'FOR_COMPONENT'
  } else if (isToggleComponentFn(componentFn)) {
    return 'TOGGLE_COMPONENT'
  }
  return 'BLOCK_COMPONENT'
}
