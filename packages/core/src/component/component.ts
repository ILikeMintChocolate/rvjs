import { BlockComponent } from '@block/component/block.ts'
import { Component } from '@block/component/component.ts'
import { isComponentFn } from '@type/guard.ts'

export const createComponent = (
  componentFn: Component['componentFn'],
  props: any = {},
) => {
  let component
  if (isComponentFn(componentFn)) {
    component = componentFn(props)
  } else {
    component = new BlockComponent(() => componentFn(props), props.key)
  }
  return component
}
