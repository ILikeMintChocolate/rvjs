import Box from '@layout/box/Box.ts'
import {
  spinner_recipe,
  spinner_wrapper_style,
} from '@overlay/spinner/Spinner.css.ts'
import {
  SpinnerProps,
  spinnerPropsType,
} from '@overlay/spinner/Spinner.props.ts'
import { prop } from '@rvjs/core'
import { checkProps } from '@rvjs/is'

const Spinner = (props: SpinnerProps) => {
  const { size = prop(() => 'sm') } = checkProps<SpinnerProps>(
    props,
    spinnerPropsType,
  )

  return Box({
    classes: [prop(() => spinner_wrapper_style)],
    children: [
      Box({
        classes: [
          prop(() =>
            spinner_recipe({
              size: size(),
            }).split(' '),
          ),
        ],
      }),
    ],
  })
}

export default Spinner
