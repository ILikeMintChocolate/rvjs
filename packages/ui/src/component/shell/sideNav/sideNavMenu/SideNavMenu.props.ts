import { Children, prop, Prop, RefObject } from '@rvjs/core'
import {
  isBoolean,
  isChildren,
  isFunction,
  isNumber,
  isObjectType,
  isOptional,
  isProp,
  isString,
} from '@rvjs/is'
import { EventHandlers } from '@type/event.ts'

export interface SideNavMenuProps {
  menuName: Prop<string>
  children: Children
  ariaLabel?: Prop<string>
  focusRef?: RefObject<HTMLButtonElement>
  onBlur?: EventHandlers['onBlur']
  onClick?: EventHandlers['onClick']
  tabIndex?: Prop<number>
  defaultShow?: Prop<boolean>
}

export const sideNavMenuPropsType = {
  menuName: isProp(isString),
  children: isChildren,
  ariaLabel: isOptional(isProp(isString)),
  focusRef: isOptional(isObjectType),
  onBlur: isOptional(isFunction),
  onClick: isOptional(isFunction),
  tabIndex: isOptional(isProp(isNumber)),
  defaultShow: isOptional(isProp(isBoolean)),
}

export const sideNavMenuRenderProps = {
  menuName: (p: string) => prop(() => p),
  children: (p: Children) => p,
  ariaLabel: (p: string) => prop(() => p),
  focusRef: (p: Object) => p,
  onBlur: (p: Function) => p,
  onClick: (p: Function) => p,
  tabIndex: (p: number) => prop(() => p),
  defaultShow: (p: boolean) => prop(() => p),
}
