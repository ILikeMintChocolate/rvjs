import {
  shell_body_style,
  shell_wrapper_style,
  shellDesktop_bodyWrapper_recipe,
} from '@shell//shell/Shell.css.ts'
import { ShellProps } from '@shell//shell/Shell.props.ts'
import { useShellProps } from '@shell/shell/Shell.hook.ts'

const Shell = (_props: ShellProps) => {
  const props = useShellProps(_props)

  return (
    <div className={shell_wrapper_style}>
      {props.header}
      <main
        className={shellDesktop_bodyWrapper_recipe({
          deviceType: props.deviceType,
        })}
      >
        {props.panel}
        <div className={shell_body_style}>{props.body}</div>
      </main>
    </div>
  )
}

export default Shell
