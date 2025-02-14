import { ButtonStyleProps } from '@form/button/Button.css.ts'
import { EventHandlers } from '@type/event.ts'

export interface ButtonProps extends ButtonStyleProps {
  text?: string
  className?: string
  disabled?: boolean
  tabIndex?: number
  type?: 'button' | 'reset' | 'submit'
  hasIconOnly?: boolean
  renderIcon?: JSX.Element
  onBlur?: EventHandlers['onBlur']
  onClick?: EventHandlers['onClick']
  onFocus?: EventHandlers['onFocus']
  onMouseEnter?: EventHandlers['onMouseEnter']
  onMouseLeave?: EventHandlers['onMouseLeave']
}

export const buttonRenderProps = {
  text: (p: ButtonProps['text']) => p,
  className: (p: ButtonProps['className']) => p,
  disabled: (p: ButtonProps['disabled']) => p,
  tabIndex: (p: ButtonProps['tabIndex']) => p,
  type: (p: ButtonProps['type']) => p,
  hasIconOnly: (p: ButtonProps['hasIconOnly']) => p,
  renderIcon: (p: ButtonProps['renderIcon']) => p,
  onBlur: (p: ButtonProps['onBlur']) => p,
  onClick: (p: ButtonProps['onClick']) => p,
  onFocus: (p: ButtonProps['onFocus']) => p,
  onMouseEnter: (p: ButtonProps['onMouseEnter']) => p,
  onMouseLeave: (p: ButtonProps['onMouseLeave']) => p,
}
