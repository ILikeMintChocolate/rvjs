import { ButtonStyleProps } from '@form/button/Button.css.ts'
import { ElementBlock, prop, Prop, svg } from '@rvjs/core'
import {
  isArray,
  isBoolean,
  isChild,
  isFunctionType,
  isNumber,
  isOptional,
  isProp,
  isString,
} from '@rvjs/is'
import { EventHandlers } from '@type/event.ts'

export interface ButtonProps extends ButtonStyleProps {
  text?: Prop<string>
  classes?: Prop<string>[]
  disabled?: Prop<boolean>
  tabIndex?: Prop<number>
  type?: Prop<'button' | 'reset' | 'submit'>
  hasIconOnly?: Prop<boolean>
  renderIcon?: ElementBlock
  onBlur?: EventHandlers['onBlur']
  onClick?: EventHandlers['onClick']
  onFocus?: EventHandlers['onFocus']
  onMouseEnter?: EventHandlers['onMouseEnter']
  onMouseLeave?: EventHandlers['onMouseLeave']
}

export const buttonPropsType = {
  text: isOptional(isProp(isString)),
  classes: isOptional(isArray(isProp(isString))),
  disabled: isOptional(isProp(isBoolean)),
  tabIndex: isOptional(isProp(isNumber)),
  type: isOptional(isProp(isString)),
  hasIconOnly: isOptional(isProp(isBoolean)),
  renderIcon: isOptional(isChild),
  onBlur: isOptional(isFunctionType),
  onClick: isOptional(isFunctionType),
  onFocus: isOptional(isFunctionType),
  onMouseEnter: isOptional(isFunctionType),
  onMouseLeave: isOptional(isFunctionType),
  size: isOptional(isProp(isString)),
  kind: isOptional(isProp(isString)),
}

export const buttonRenderProps = {
  text: (p: string) => prop(() => p),
  classes: (p: string[]) => p.map((cls) => prop(() => cls)),
  disabled: (p: boolean) => prop(() => p),
  tabIndex: (p: number) => prop(() => p),
  type: (p: string) => prop(() => p),
  hasIconOnly: (p: boolean) => prop(() => p),
  renderIcon: (p: SVGElement) => svg(p),
  onBlur: (p: Function) => p,
  onClick: (p: Function) => p,
  onFocus: (p: Function) => p,
  onMouseEnter: (p: Function) => p,
  onMouseLeave: (p: Function) => p,
}
