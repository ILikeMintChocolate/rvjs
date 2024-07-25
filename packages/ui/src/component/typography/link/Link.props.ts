import { Children, ElementBlock, ElementType, svg } from '@rvjs/core/dom'
import { prop, Prop } from '@rvjs/core/reactive'
import {
  isBoolean,
  isChild,
  isChildren,
  isOptional,
  isProp,
  isString,
} from '@rvjs/is'

export interface LinkProps {
  href: Prop<string>
  as?: ElementType
  text?: Prop<string>
  children?: Children
  disabled?: Prop<boolean>
  inline?: Prop<boolean>
  renderIcon?: ElementBlock
  size?: Prop<'sm' | 'md' | 'lg'>
}

export const linkPropsType = {
  href: isProp(isString),
  as: isOptional(isString),
  text: isProp(isString),
  children: isOptional(isChildren),
  disabled: isOptional(isProp(isBoolean)),
  inline: isOptional(isProp(isBoolean)),
  renderIcon: isOptional(isChild),
  size: isOptional(isProp(isString)),
}

export const linkRenderProps = {
  href: (p: string) => prop(() => p),
  as: (p: ElementType) => p,
  text: (p: string) => prop(() => p),
  children: (p: Children) => p,
  disabled: (p: boolean) => prop(() => p),
  inline: (p: boolean) => prop(() => p),
  renderIcon: (p: SVGElement) => svg(p),
  size: (p: string) => prop(() => p),
}
