import { SpinnerStyleProps } from '@overlay/spinner/Spinner.css.ts'
import { prop } from '@rvjs/core'
import { isOptional, isProp, isString } from '@rvjs/is'

export interface SpinnerProps extends SpinnerStyleProps {}

export const spinnerPropsType = {
  size: isOptional(isProp(isString)),
}

export const spinnerRenderProps = {
  size: (p: string) => prop(() => p),
}
