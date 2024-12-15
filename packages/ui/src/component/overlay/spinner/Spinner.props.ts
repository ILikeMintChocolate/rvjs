import { SpinnerStyleProps } from '@overlay/spinner/Spinner.css.ts'

export interface SpinnerProps extends SpinnerStyleProps {}

export const spinnerRenderProps = {
  size: (p: SpinnerProps['size']) => p,
}
