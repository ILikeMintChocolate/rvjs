import { Children, Prop, prop } from '@rvjs/core'
import { isChildren, isOptional, isString } from '@rvjs/is'

export interface OrderedListProps {
  children: Children
  type?: Prop<'1' | 'a' | 'A' | 'i' | 'I'>
}

export const orderedListPropsType = {
  children: isChildren,
  type: isOptional(isString),
}

export const orderedListRenderProps = {
  children: (p: Children) => p,
  type: (p: string) => prop(() => p),
}
