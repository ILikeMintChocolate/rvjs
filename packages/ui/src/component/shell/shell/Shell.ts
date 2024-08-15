import { Child, prop } from '@rvjs/core'
import { Flex, ifIs } from '@rvjs/ui'
import {
  shell_body_style,
  shell_bodyWrapper_style,
  shell_style,
} from '@shell/shell/Shell.css.ts'

interface ShellProps {
  header: Child
  body: Child
  panel?: Child
}

const Shell = (props: ShellProps) => {
  const { header, body, panel } = props

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
