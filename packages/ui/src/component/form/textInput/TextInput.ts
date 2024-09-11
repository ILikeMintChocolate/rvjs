import { WarningAltFilledIcon, WarningFilledIcon } from '@content/icon/Icons.ts'
import {
  textInput_helper_recipe,
  textInput_input_recipe,
  textInput_inputWrapper_style,
  textInput_invalidIcon_style,
  textInput_label_style,
  textInput_style,
  textInput_warnIcon_style,
} from '@form/textInput/TextInput.css.ts'
import useTextInput from '@form/textInput/TextInput.hook.ts'
import {
  TextInputProps,
  textInputPropsType,
} from '@form/textInput/TextInput.props.ts'
import Flex from '@layout/flex/Flex.ts'
import {
  component,
  ComponentFn,
  dynamic,
  input,
  prop,
  Switch,
} from '@rvjs/core'
import { checkProps } from '@rvjs/is'
import vars from '@theme/variable/vars.css.ts'
import Text from '@typography/text/Text.ts'
import { ifIs } from '@util/array.ts'

const TextInput: ComponentFn = component<TextInputProps>((props) => {
  const {
    value,
    setValue,
    size = prop(() => 'md'),
    disabled = prop(() => false),
    enableCounter = prop(() => true),
    helperText,
    hideLabel = prop(() => false),
    invalidText = prop(() => ''),
    labelText = prop(() => ''),
    maxCount,
    onChange,
    onClick,
    placeholder = prop(() => ''),
    readOnly = prop(() => false),
    type = 'text',
    status = prop(() => 'valid'),
    warnText = prop(() => ''),
  } = checkProps<TextInputProps>(props, textInputPropsType)
  const { inputRef } = useTextInput(disabled)

  return Flex({
    direction: 'column',
    classes: [prop(() => textInput_style)],
    children: [
      Flex({
        direction: 'row',
        justify: 'space-between',
        children: [
          ...ifIs(!hideLabel(), () =>
            Text({
              text: labelText!,
              kind: prop(() => 'label-01'),
              color: prop(() => 'textSecondary'),
              classes: [
                prop(() => textInput_label_style({ disabled: disabled() })),
              ],
            }),
          ),
          ...ifIs(!!maxCount && enableCounter() === true, () =>
            Text({
              text: prop(() => `${value().length}/${maxCount!()}`),
              kind: prop(() => 'label-01'),
              color: prop(() => 'textSecondary'),
            }),
          ),
        ],
      }),
      Flex({
        direction: 'row',
        justify: 'space-between',
        align: 'center',
        classes: [
          prop(() =>
            textInput_inputWrapper_style({
              size: size(),
              disabled: disabled(),
            }),
          ),
        ],
        style: {
          boxShadow: dynamic(() =>
            status() === 'invalid'
              ? `inset 0 0 0 0.125rem ${vars.color.supportError}`
              : '',
          ),
        },
        children: [
          input({
            ref: inputRef,
            type,
            classes: [
              dynamic(() => textInput_input_recipe({ disabled: disabled() })),
            ],
            placeholder: dynamic(() => placeholder()),
            readOnly: dynamic(() => readOnly()),
            oninput: (event: Event) => {
              const target = event.target as HTMLInputElement
              if (!!maxCount && target.value.length > maxCount()) {
                target.value = target.value.slice(0, maxCount())
              } else {
                setValue(target.value)
              }
              if (onChange) {
                onChange(event)
              }
            },
            onclick: onClick,
            value: value(),
          }),
          Switch(status!, () => {
            if (status() === 'invalid') {
              return WarningFilledIcon({
                classes: [textInput_invalidIcon_style],
              })
            } else if (status() === 'warn') {
              return WarningAltFilledIcon({
                classes: [textInput_warnIcon_style],
              })
            }
            return null
          }),
        ],
      }),
      Switch(status, () => {
        if (status() === 'invalid') {
          return Text({
            text: invalidText,
            kind: prop(() => 'helper-text-01'),
            classes: [
              prop(() => textInput_helper_recipe({ disabled: disabled() })),
            ],
          })
        } else if (status() === 'warn') {
          return Text({
            text: warnText,
            kind: prop(() => 'helper-text-01'),
            classes: [
              prop(() => textInput_helper_recipe({ disabled: disabled() })),
            ],
          })
        } else if (status() === 'valid' && helperText !== undefined) {
          return Text({
            text: helperText,
            kind: prop(() => 'helper-text-01'),
            classes: [
              prop(() => textInput_helper_recipe({ disabled: disabled() })),
            ],
          })
        }
        return null
      }),
    ],
  })
})

export default TextInput
