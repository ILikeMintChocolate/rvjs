import { Prop, prop, SetState } from '@rvjs/core'
import {
  isBoolean,
  isFunctionType,
  isNumber,
  isOptional,
  isProp,
  isSetState,
  isString,
} from '@rvjs/is'
import { EventHandlers } from '@type/event.ts'

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
  onChange?: EventHandlers['onChange']
  onClick?: EventHandlers['onClick']
  placeholder?: Prop<string>
  readOnly?: Prop<boolean>
  type?: HTMLInputElement['type']
  status?: Prop<'valid' | 'invalid' | 'warn'>
  warnText?: Prop<string>
}

export const textInputPropsType = {
  value: isProp(isString),
  setValue: isSetState,
  size: isOptional(isProp(isString)),
  disabled: isOptional(isProp(isBoolean)),
  enableCounter: isOptional(isProp(isBoolean)),
  helperText: isOptional(isProp(isString)),
  hideLabel: isOptional(isProp(isBoolean)),
  invalidText: isOptional(isProp(isString)),
  labelText: isOptional(isProp(isString)),
  maxCount: isOptional(isProp(isNumber)),
  onChange: isOptional(isFunctionType),
  onClick: isOptional(isFunctionType),
  placeholder: isOptional(isProp(isString)),
  readOnly: isOptional(isProp(isBoolean)),
  type: isOptional(isString),
  status: isOptional(isProp(isString)),
  warnText: isOptional(isProp(isString)),
}

export const textInputRenderProps = {
  value: (p: string) => prop(() => p),
  setValue: (p: SetState) => p,
  size: (p: string) => prop(() => p),
  disabled: (p: boolean) => prop(() => p),
  enableCounter: (p: boolean) => prop(() => p),
  helperText: (p: string) => prop(() => p),
  hideLabel: (p: boolean) => prop(() => p),
  invalidText: (p: string) => prop(() => p),
  labelText: (p: string) => prop(() => p),
  maxCount: (p: number) => prop(() => p),
  onChange: (p: Function) => p,
  onClick: (p: Function) => p,
  placeholder: (p: string) => prop(() => p),
  readOnly: (p: boolean) => prop(() => p),
  type: (p: string) => p,
  status: (p: string) => prop(() => p),
  warnText: (p: string) => prop(() => p),
}
