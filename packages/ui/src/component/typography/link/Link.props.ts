import { ElementType } from '@rvjs/core/dom'
import { prop, Prop } from '@rvjs/core/reactive'
import { isAny, isBoolean, isOptional, isProp, isString } from '@rvjs/is'

export interface LinkProps {
  href: Prop<string>
  as?: ElementType
  text: Prop<string>
  disabled?: Prop<boolean>
  inline?: Prop<boolean>
  renderIcon?: SVGElement
  size?: Prop<'sm' | 'md' | 'lg'>
}

export const linkPropsType = {
  href: isProp(isString),
  as: isOptional(isString),
  text: isProp(isString),
  disabled: isOptional(isProp(isBoolean)),
  inline: isOptional(isProp(isBoolean)),
  renderIcon: isOptional(isAny),
  size: isOptional(isProp(isString)),
}

export const linkRenderProps = {
  href: (p: string) => prop(() => p),
  as: (p: ElementType) => p,
  text: (p: string) => prop(() => p),
  disabled: (p: boolean) => prop(() => p),
  inline: (p: boolean) => prop(() => p),
  renderIcon: (p: SVGElement) => p,
  size: (p: string) => prop(() => p),
}
