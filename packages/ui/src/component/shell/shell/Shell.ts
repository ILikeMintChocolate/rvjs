import Flex from '@layout/flex/Flex.ts'
import { prop } from '@rvjs/core'
import { checkProps } from '@rvjs/is'
import {
  shell_body_style,
  shell_bodyWrapper_style,
  shell_style,
} from '@shell/shell/Shell.css.ts'
import { ShellProps, shellPropsType } from '@shell/shell/Shell.props.ts'
import { ifIs } from '@util/array.ts'

const Shell = (props: ShellProps) => {
  const { header, body, panel } = checkProps(props, shellPropsType)

  return Flex({
    classes: [prop(() => shell_style)],
    direction: 'column',
    children: [
      header,
      Flex({
        as: 'main',
        classes: [prop(() => shell_bodyWrapper_style)],
        children: [
          ...ifIs(panel !== undefined, () => panel!),
          Flex({
            classes: [prop(() => shell_body_style)],
            children: [body],
          }),
        ],
      }),
    ],
  })
}

export default Shell
