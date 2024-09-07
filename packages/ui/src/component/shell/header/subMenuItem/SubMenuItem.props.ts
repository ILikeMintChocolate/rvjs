import { prop, Prop } from '@rvjs/core'
import { isBoolean, isNumber, isOptional, isProp, isString } from '@rvjs/is'

export interface SubMenuItemProps {
  href: Prop<string>
  text: Prop<string>
  isActive?: Prop<boolean>
  tabIndex?: Prop<number>
}

export const subMenuItemPropsType = {
  href: isProp(isString),
  text: isProp(isString),
  isActive: isOptional(isProp(isBoolean)),
  tabIndex: isProp(isProp(isNumber)),
}

export const subMenuItemRenderProps = {
  href: (p: string) => prop(() => p),
  text: (p: string) => prop(() => p),
  isActive: (p: boolean) => prop(() => p),
  tabIndex: (p: number) => prop(() => p),
}
