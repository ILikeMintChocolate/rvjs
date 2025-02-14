import { Block } from '@component/block.ts'
import { Component } from '@render/component.ts'
import { isComponentFn } from '@type/guard.ts'

export type ComponentFn = (props: ComponentProps) => any

export type ComponentProps = Record<string, any>

export const createComponent = (
  componentFn: ComponentFn,
  props: ComponentProps,
): Component => {
  return isComponentFn(componentFn)
    ? componentFn(props)
    : Block(componentFn, props)
}
