import { button_recipe, ButtonStyleProps } from '@form/button/Button.css.ts'
import { element, ElementType } from '@rvjs/core/dom'
import {
  dynamic,
  isGetState,
  prop,
  Prop,
  useEffect,
  useRef,
} from '@rvjs/core/reactive'

interface ButtonProps extends ButtonStyleProps {
  text: Prop<string>
  as?: ElementType
  classes?: Prop<string>[]
  disabled?: Prop<boolean>
  tabIndex?: Prop<number>
  type?: Prop<'button' | 'reset' | 'submit'>
  onBlur?: GlobalEventHandlers['onblur']
  onClick?: GlobalEventHandlers['onclick']
  onFocus?: GlobalEventHandlers['onfocus']
  onMouseEnter?: GlobalEventHandlers['onmouseenter']
  onMouseLeave?: GlobalEventHandlers['onmouseleave']
}

const Button = (props: ButtonProps) => {
  const {
    text,
    as = 'button',
    classes = [],
    disabled = prop(() => false),
    kind = prop(() => 'primary'),
    size = prop(() => 'md'),
    tabIndex = prop(() => 0),
    type = prop(() => 'button'),
    onBlur,
    onClick,
    onFocus,
    onMouseEnter,
    onMouseLeave,
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
      dynamic(() =>
        button_recipe({
          size: size(),
          kind: kind(),
        }),
      ),
      ...classes.map((cls) => dynamic(() => cls())),
    ],
    onblur: onBlur,
    onclick: onClick,
    onfocus: onFocus,
    onmouseenter: onMouseEnter,
    onmouseleave: onMouseLeave,
    tabIndex,
    textContent: dynamic(() => text()),
    // @ts-ignore
    type,
    ...restProps,
  })
}

export default Button
