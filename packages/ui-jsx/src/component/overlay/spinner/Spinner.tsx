import {
  spinner_recipe,
  spinner_wrapper_style,
} from '@overlay/spinner/Spinner.css.ts'
import { useSpinnerProps } from '@overlay/spinner/Spinner.hook.ts'
import { SpinnerProps } from '@overlay/spinner/Spinner.props.ts'

const Spinner = (_props: SpinnerProps) => {
  const props = useSpinnerProps(_props)

  return (
    <div className={spinner_wrapper_style}>
      <div className={spinner_recipe({ size: props.size })} />
    </div>
  )
}

export default Spinner
