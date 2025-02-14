import { Children, Prop, prop } from '@rvjs/core'
import { isChildren, isOptional, isProp, isString } from '@rvjs/is'

export interface ListItemProps {
  text?: Prop<string>
  children?: Children
}

export const listItemPropsType = {
  text: isOptional(isProp(isString)),
  children: isOptional(isChildren),
}

export const listItemRenderProps = {
  text: (p: string) => prop(() => p),
  children: (p: Children) => p,
}
