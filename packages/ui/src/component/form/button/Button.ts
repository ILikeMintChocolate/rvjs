import {
  button_icon_recipe,
  button_kind_recipe,
  button_size_recipe,
  button_text_recipe,
  ButtonStyleProps,
} from '@form/button/Button.css.ts'
import Box from '@layout/box/Box.ts'
import { element, ElementType, svg } from '@rvjs/core/dom'
import {
  dynamic,
  isGetState,
  prop,
  Prop,
  useEffect,
  useRef,
} from '@rvjs/core/reactive'
import vars from '@theme/variable/vars.css.ts'
import Text from '@typography/text/Text.ts'
import { ifIs } from '@util/array.js'

interface ButtonProps extends ButtonStyleProps {
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

const Button = (props: ButtonProps) => {
  const {
    text = prop(() => ''),
    as = 'button',
    classes = [],
    disabled = prop(() => false),
    kind = prop(() => 'primary'),
    size = prop(() => 'md'),
    tabIndex = prop(() => 0),
    type = prop(() => 'button'),
    hasIconOnly = prop(() => false),
    renderIcon = null,
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
        button_kind_recipe({
          kind: hasIconOnly() && kind() === 'ghost' ? 'ghostIconOnly' : kind(),
        }),
      ),
      dynamic(() =>
        button_size_recipe({
          size: hasIconOnly() ? `${size()}IconOnly` : size(),
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
    children: [
      ...ifIs(!hasIconOnly(), () =>
        Text({
          as: 'span',
          text: prop(() => text()),
          kind: prop(() => 'body-compact-01'),
          classes: [prop(() => button_text_recipe({ kind: kind() }))],
        }),
      ),
      renderIcon !== null
        ? svg(renderIcon!, {
            classes: [
              dynamic(() =>
                button_icon_recipe({
                  kind:
                    hasIconOnly() && kind() === 'ghost'
                      ? 'ghostIconOnly'
                      : kind(),
                }),
              ),
            ],
          })
        : Box({
            style: {
              width: vars.spacing['05'],
              height: vars.spacing['05'],
            },
          }),
    ],
    // @ts-ignore
    type,
    ...restProps,
  })
}

export default Button
