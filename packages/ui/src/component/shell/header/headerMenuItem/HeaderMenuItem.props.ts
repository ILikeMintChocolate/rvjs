import { Prop, prop } from '@rvjs/core'
import { isBoolean, isNumber, isOptional, isProp, isString } from '@rvjs/is'

export interface HeaderMenuItemProps {
  text: Prop<string>
  href: Prop<string>
  isActive?: Prop<boolean>
  tabIndex?: Prop<number>
}

export const headerMenuItemPropsType = {
  text: isProp(isString),
  href: isProp(isString),
  isActive: isOptional(isProp(isBoolean)),
  tabIndex: isOptional(isProp(isNumber)),
}

export const headerMenuItemRenderProps = {
  text: (p: string) => prop(() => p),
  href: (p: string) => prop(() => p),
  isActive: (p: boolean) => prop(() => p),
  tabIndex: (p: number) => prop(() => p),
}
