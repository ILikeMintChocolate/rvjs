import {
  button_kind_recipe,
  button_size_recipe,
  button_text_recipe,
} from '@form/button/Button.css.ts'
import { useButtonClassName, useButtonProps } from '@form/button/Button.hook.ts'
import { ButtonProps } from '@form/button/Button.props.ts'
import vars from '@theme/variable/vars.css.ts'
import Text from '@typography/text/Text.tsx'

const Button = (_props: ButtonProps) => {
  const props = useButtonProps(_props)
  const buttonClassName = useButtonClassName(props)

  return (
    <button
      type={props.type}
      className={[
        button_kind_recipe({ kind: buttonClassName.kind }),
        button_size_recipe({ size: buttonClassName.size }),
        props.className,
      ].join(' ')}
      disabled={props.disabled}
      tabIndex={props.tabIndex}
      onBlur={props.onBlur}
      onClick={props.onClick}
      onFocus={props.onFocus}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {!props.hasIconOnly && (
        <Text
          as="span"
          kind="body-compact-01"
          className={button_text_recipe({ kind: props.kind })}
        >
          {props.text}
        </Text>
      )}
      {props.renderIcon ?? (
        <div
          style={{ width: vars.spacing['05'], height: vars.spacing['05'] }}
        />
      )}
    </button>
  )
}

export default Button
