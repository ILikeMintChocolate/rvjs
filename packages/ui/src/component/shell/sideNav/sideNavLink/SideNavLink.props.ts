import { prop, Prop } from '@rvjs/core'
import { isBoolean, isNumber, isOptional, isProp, isString } from '@rvjs/is'

export interface SideNavLinkProps {
  text: Prop<string>
  href: Prop<string>
  isActive?: Prop<boolean>
  tabIndex?: Prop<number>
}

export const sideNavLinkPropsType = {
  text: isProp(isString),
  href: isProp(isString),
  isActive: isOptional(isProp(isBoolean)),
  tabIndex: isOptional(isProp(isProp(isNumber))),
}

export const sideNavLinkRenderProps = {
  href: (p: string) => prop(() => p),
  text: (p: string) => prop(() => p),
  isActive: (p: boolean) => prop(() => p),
  tabIndex: (p: number) => prop(() => p),
}
