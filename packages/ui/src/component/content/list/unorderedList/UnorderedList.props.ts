import { Children } from '@rvjs/core/dom'
import { Prop, prop } from '@rvjs/core/reactive'
import { isChildren, isOptional, isProp, isString } from '@rvjs/is'

export interface UnorderedListProps {
  children: Children
  type?: Prop<'disc' | 'square'>
}

export const unorderedListPropsType = {
  children: isChildren,
  type: isOptional(isProp(isString)),
}

export const unorderedListRenderProps = {
  children: (p: Children) => p,
  type: (p: string) => prop(() => p),
}
