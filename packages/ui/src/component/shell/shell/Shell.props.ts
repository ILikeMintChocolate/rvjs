import { Children } from '@rvjs/core'

export interface ShellProps {
  header: Children
  body: Children
  panel?: Children
}

export const shellRenderProps = {
  header: (p: ShellProps['header']) => p,
  body: (p: ShellProps['body']) => p,
  panel: (p: ShellProps['panel']) => p,
}
