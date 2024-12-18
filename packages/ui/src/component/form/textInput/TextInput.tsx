import { WarningFilledIcon } from '@content/icon/Icons.tsx'
import {
  textInput_helper_recipe,
  textInput_input_recipe,
  textInput_inputWrapper_recipe,
  textInput_invalidIcon_style,
  textInput_label_recipe,
  textInput_labelWrapper_style,
  textInput_warnIcon_style,
  textInput_wrapper_style,
} from '@form/textInput/TextInput.css.ts'
import {
  useTextInputProps,
  useTextInputValue,
} from '@form/textInput/TextInput.hook.ts'
import { TextInputProps } from '@form/textInput/TextInput.props.ts'
import { Case, Switch } from '@rvjs/core'
import vars from '@theme/variable/vars.css.ts'
import { isDefined } from '@type/guard.ts'
import Text from '@typography/text/Text.tsx'

const TextInput = (_props: TextInputProps) => {
  const props = useTextInputProps(_props)
  const onInputHandler = useTextInputValue(props)

  return (
    <div className={textInput_wrapper_style}>
      <div className={textInput_labelWrapper_style}>
        {!props.hideLabel && (
          <Text
            kind="label-01"
            color="textSecondary"
            className={textInput_label_recipe({ disabled: props.disabled })}
          >
            {props.labelText}
          </Text>
        )}
        {isDefined(props.maxCount) && (
          <Text kind="label-01" color="textSecondary">
            {props.value.length}/{props.maxCount}
          </Text>
        )}
      </div>
      <div
        className={textInput_inputWrapper_recipe({
          size: props.size,
          disabled: props.disabled,
        })}
        style={{
          'box-shadow':
            props.status === 'invalid'
              ? `inset 0 0 0 0.125rem ${vars.color.supportError}`
              : '',
        }}
      >
        <input
          type={props.type}
          className={textInput_input_recipe({ disabled: props.disabled })}
          disabled={props.disabled}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          onInput={onInputHandler}
          onClick={props.onClick}
          value={props.value}
        />
        <Switch>
          <Case is={props.status === 'invalid'}>
            <WarningFilledIcon className={textInput_invalidIcon_style} />
          </Case>
          <Case is={props.status === 'warn'}>
            <WarningFilledIcon className={textInput_warnIcon_style} />
          </Case>
        </Switch>
      </div>
      <Switch>
        <Case is={props.status === 'invalid'}>
          <Text
            kind="helper-text-01"
            className={textInput_helper_recipe({ disabled: props.disabled })}
          >
            {props.invalidText}
          </Text>
        </Case>
        <Case is={props.status === 'warn'}>
          <Text
            kind="helper-text-01"
            className={textInput_helper_recipe({ disabled: props.disabled })}
          >
            {props.warnText}
          </Text>
        </Case>
        <Case is={props.status === 'valid'}>
          <Text
            kind="helper-text-01"
            className={textInput_helper_recipe({ disabled: props.disabled })}
          >
            {props.helperText}
          </Text>
        </Case>
      </Switch>
    </div>
  )
}

export default TextInput
