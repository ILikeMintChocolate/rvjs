import { Children, prop, Prop, RefObject } from '@rvjs/core'
import {
  isChildren,
  isFunction,
  isNumber,
  isObjectType,
  isOptional,
  isProp,
  isString,
} from '@rvjs/is'
import { EventHandlers } from '@type/event.ts'

export interface SubMenuProps {
  menuName: Prop<string>
  children: Children
  ariaLabel?: Prop<string>
  focusRef?: RefObject<HTMLButtonElement>
  onBlur?: EventHandlers['onBlur']
  onClick?: EventHandlers['onClick']
  tabIndex?: Prop<number>
}

export const subMenuPropsType = {
  menuName: isProp(isString),
  children: isChildren,
  ariaLabel: isOptional(isProp(isString)),
  focusRef: isOptional(isObjectType),
  onBlur: isOptional(isFunction),
  onClick: isOptional(isFunction),
  tabIndex: isOptional(isProp(isNumber)),
}

export const subMenuRenderProps = {
  menuName: (p: string) => prop(() => p),
  children: (p: Children) => p,
  ariaLabel: (p: string) => prop(() => p),
  focusRef: (p: Object) => p,
  onBlur: (p: Function) => p,
  onClick: (p: Function) => p,
  tabIndex: (p: number) => prop(() => p),
}
