import { buttonRecipe, ButtonStyleProps } from '@form/button/Button.css.ts'
import { element, ElementType } from '@rvjs/core/dom'
import { isGetState, Reactive, useEffect, useRef } from '@rvjs/core/reactive'

interface ButtonProps extends ButtonStyleProps {
  as?: ElementType
  classes?: Reactive<string>[]
  disabled?: Reactive<boolean>
  href?: Reactive<string>
  onBlur?: GlobalEventHandlers['onblur']
  onClick?: GlobalEventHandlers['onclick']
  onFocus?: GlobalEventHandlers['onfocus']
  onMouseEnter?: GlobalEventHandlers['onmouseenter']
  onMouseLeave?: GlobalEventHandlers['onmouseleave']
  role?: Reactive<string>
  tabIndex?: Reactive<number>
  text: string
  type?: 'button' | 'reset' | 'submit'
}

const Button = (props: ButtonProps) => {
  const {
    as = 'button',
    classes = [],
    disabled = false,
    href,
    kind = 'primary',
    onBlur,
    onClick,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    role,
    size = 'md',
    tabIndex,
    text,
    type,
    ...restProps
  } = props
  const buttonRef = useRef<HTMLButtonElement>()

  useEffect(() => {
    if (buttonRef.current) {
      if (isGetState(disabled) && disabled()) {
        buttonRef.current.setAttribute('disabled', 'disabled')
      } else {
        buttonRef.current.removeAttribute('disabled')
      }
    }
  }, [disabled])

  return element(as, {
    ref: buttonRef,
    classes: [
      buttonRecipe({
        size,
        kind,
      }),
      ...classes,
    ],
    // @ts-ignore
    href,
    onblur: onBlur,
    onclick: onClick,
    onfocus: onFocus,
    onmouseenter: onMouseEnter,
    onmouseleave: onMouseLeave,
    role,
    tabIndex,
    textContent: text,
    // @ts-ignore
    type,
    ...restProps,
  })
}

export default Button
