import { Prop, prop } from '@rvjs/core'
import { isOptional, isProp, isString } from '@rvjs/is'
import vars from '@theme/variable/vars.css.ts'

export interface ColorChipProps {
  color: Prop<keyof typeof vars.color>
  size?: Prop<'sm' | 'md' | 'lg'>
}

export const colorChipPropsType = {
  color: isProp(isString),
  size: isOptional(isProp(isString)),
}

export const colorChipRenderProps = {
  color: (p: string) => prop(() => p),
  size: (p: string) => prop(() => p),
}
