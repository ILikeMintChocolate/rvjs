import {
  shell_body_style,
  shell_bodyWrapper_style,
  shell_wrapper_style,
} from '@shell/shell/Shell.css.ts'
import { ShellProps } from '@shell/shell/Shell.props.ts'

const Shell = (props: ShellProps) => {
  return (
    <div className={shell_wrapper_style}>
      {props.header}
      <main className={shell_bodyWrapper_style}>
        {props.panel}
        <div className={shell_body_style}>{props.body}</div>
      </main>
    </div>
  )
}

export default Shell
