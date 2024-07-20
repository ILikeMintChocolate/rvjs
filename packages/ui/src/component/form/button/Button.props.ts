import { ButtonStyleProps } from '@form/button/Button.css.ts'
import { ElementType } from '@rvjs/core/dom'
import { prop, Prop } from '@rvjs/core/reactive'
import {
  isAny,
  isArray,
  isBoolean,
  isFunctionType,
  isNumber,
  isOptional,
  isProp,
  isString,
} from '@rvjs/is'

export interface ButtonProps extends ButtonStyleProps {
  text?: Prop<string>
  as?: ElementType
  classes?: Prop<string>[]
  disabled?: Prop<boolean>
  tabIndex?: Prop<number>
  type?: Prop<'button' | 'reset' | 'submit'>
  hasIconOnly?: Prop<boolean>
  renderIcon?: SVGElement
  onBlur?: GlobalEventHandlers['onblur']
  onClick?: GlobalEventHandlers['onclick']
  onFocus?: GlobalEventHandlers['onfocus']
  onMouseEnter?: GlobalEventHandlers['onmouseenter']
  onMouseLeave?: GlobalEventHandlers['onmouseleave']
}

export const buttonPropsType = {
  text: isOptional(isProp(isString)),
  as: isOptional(isString),
  classes: isOptional(isArray(isProp(isString))),
  disabled: isOptional(isProp(isBoolean)),
  tabIndex: isOptional(isProp(isNumber)),
  type: isOptional(isProp(isString)),
  hasIconOnly: isOptional(isProp(isBoolean)),
  renderIcon: isOptional(isAny),
  onBlur: isOptional(isFunctionType),
  onClick: isOptional(isFunctionType),
  onFocus: isOptional(isFunctionType),
  onMouseEnter: isOptional(isFunctionType),
  onMouseLeave: isOptional(isFunctionType),
}

export const buttonRenderProps = {
  text: (p: string) => prop(() => p),
  as: (p: ElementType) => p,
  classes: (p: string[]) => p.map((cls) => prop(() => cls)),
  disabled: (p: boolean) => prop(() => p),
  tabIndex: (p: number) => prop(() => p),
  type: (p: string) => prop(() => p),
  hasIconOnly: (p: boolean) => prop(() => p),
  renderIcon: (p: SVGElement) => p,
  onBlur: (p: any) => p,
  onClick: (p: any) => p,
  onFocus: (p: any) => p,
  onMouseEnter: (p: any) => p,
  onMouseLeave: (p: any) => p,
}
