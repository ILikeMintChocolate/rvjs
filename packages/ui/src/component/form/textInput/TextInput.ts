import {
  textInput_helper_recipe,
  textInput_input_recipe,
  textInput_inputWrapper_style,
  textInput_invalidIcon_style,
  textInput_label_style,
  textInput_style,
  textInput_warnIcon_style,
} from '@form/textInput/TextInput.css.ts'
import useTextInput from '@form/textInput/TextInput.hook.js'
import warnSvg from '@icon/warning--alt--filled.svg?element'
import invalidSvg from '@icon/warning--filled.svg?element'
import Flex from '@layout/flex/Flex.ts'
import { component, input, svg, Switch } from '@rvjs/core/dom'
import { dynamic, Prop, prop, SetState } from '@rvjs/core/reactive'
import vars from '@theme/variable/vars.css.ts'
import Text from '@typography/text/Text.ts'
import { ifIs } from '@util/array.ts'

export interface TextInputProps {
  value: Prop<string>
  setValue: SetState<string>
  size?: Prop<'sm' | 'md' | 'lg'>
  disabled?: Prop<boolean>
  enableCounter?: Prop<boolean>
  helperText?: Prop<string>
  hideLabel?: Prop<boolean>
  invalidText?: Prop<string>
  labelText?: Prop<string>
  maxCount?: Prop<number>
  onChange?: GlobalEventHandlers['oninput']
  onClick?: GlobalEventHandlers['onclick']
  placeholder?: Prop<string>
  readOnly?: Prop<boolean>
  type?: HTMLInputElement['type']
  status?: Prop<'valid' | 'invalid' | 'warn'>
  warnText?: Prop<string>
}

const TextInput = component<TextInputProps>((props) => {
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
  } = props

  const { inputRef } = useTextInput(disabled)

  return Flex({
    direction: 'column',
    classes: [prop(() => textInput_style)],
    children: [
      Flex({
        direction: 'row',
        justify: 'space-between',
        children: [
          ...ifIs(hideLabel(), () =>
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
            oninput: (event: InputEvent) => {
              const target = event.target as HTMLInputElement
              if (!!maxCount && target.value.length > maxCount()) {
                target.value = target.value.slice(0, maxCount())
              } else {
                setValue(target.value)
              }
              // @ts-ignore
              onChange && onChange(event)
            },
            onclick: onClick,
            value: value(),
          }),
          // @ts-ignore
          Switch(status!, (status) => {
            if (status === 'invalid') {
              return svg(invalidSvg, {
                classes: [textInput_invalidIcon_style],
              })
            } else if (status === 'warn') {
              return svg(warnSvg, {
                classes: [textInput_warnIcon_style],
              })
            }
          }),
        ],
      }),
      Switch(status, (status) => {
        if (status === 'invalid') {
          return Text({
            text: invalidText,
            kind: prop(() => 'helper-text-01'),
            classes: [
              prop(() => textInput_helper_recipe({ disabled: disabled() })),
            ],
          })
        } else if (status === 'warn') {
          return Text({
            text: warnText,
            kind: prop(() => 'helper-text-01'),
            classes: [
              prop(() => textInput_helper_recipe({ disabled: disabled() })),
            ],
          })
        } else if (status === 'valid' && helperText !== undefined) {
          return Text({
            text: helperText,
            kind: prop(() => 'helper-text-01'),
            classes: [
              prop(() => textInput_helper_recipe({ disabled: disabled() })),
            ],
          })
        } else {
          return null
        }
      }),
    ],
  })
})

export default TextInput
