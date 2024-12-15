import { SetState } from '@rvjs/core'
import { EventHandlers } from '@type/event.ts'

export interface TextInputProps {
  value: string
  setValue: SetState<string>
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  helperText?: string
  hideLabel?: boolean
  invalidText?: string
  labelText?: string
  maxCount?: number
  onChange?: EventHandlers['onChange']
  onClick?: EventHandlers['onClick']
  placeholder?: string
  readOnly?: boolean
  type?: HTMLInputElement['type']
  status?: 'valid' | 'invalid' | 'warn'
  warnText?: string
}

export const textInputRenderProps = {
  value: (p: TextInputProps['value']) => p,
  setValue: (p: TextInputProps['setValue']) => p,
  size: (p: TextInputProps['size']) => p,
  disabled: (p: TextInputProps['disabled']) => p,
  helperText: (p: TextInputProps['helperText']) => p,
  hideLabel: (p: TextInputProps['hideLabel']) => p,
  invalidText: (p: TextInputProps['invalidText']) => p,
  labelText: (p: TextInputProps['labelText']) => p,
  maxCount: (p: TextInputProps['maxCount']) => p,
  onChange: (p: TextInputProps['onChange']) => p,
  onClick: (p: TextInputProps['onClick']) => p,
  placeholder: (p: TextInputProps['placeholder']) => p,
  readOnly: (p: TextInputProps['readOnly']) => p,
  type: (p: TextInputProps['type']) => p,
  status: (p: TextInputProps['status']) => p,
  warnText: (p: TextInputProps['warnText']) => p,
}
