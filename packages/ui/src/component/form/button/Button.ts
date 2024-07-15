import {
  button_icon_recipe,
  button_kind_recipe,
  button_size_recipe,
  button_text_recipe,
} from '@form/button/Button.css.ts'
import { ButtonProps, buttonPropsType } from '@form/button/Button.props.ts'
import Box from '@layout/box/Box.ts'
import { button, overrideElement } from '@rvjs/core/dom'
import {
  dynamic,
  isGetState,
  prop,
  useEffect,
  useRef,
} from '@rvjs/core/reactive'
import { checkProps } from '@rvjs/is'
import vars from '@theme/variable/vars.css.ts'
import Text from '@typography/text/Text.ts'
import { ifIs } from '@util/array.ts'

const Button = (props: ButtonProps) => {
  const {
    text = prop(() => ''),
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
  } = checkProps<ButtonProps>(props, buttonPropsType, {
    errorOnNoValidator: false,
  })
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

  return button({
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
        ? overrideElement(renderIcon!, {
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
    type: dynamic(() => type()),
    ...restProps,
  })
}

export default Button
