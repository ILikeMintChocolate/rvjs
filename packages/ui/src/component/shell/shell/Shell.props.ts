import { Component } from '@rvjs/core'

export interface ShellProps {
  header: Component | Node
  body: Component | Node
  panel?: Component | Node
}

export const shellRenderProps = {
  header: (p: ShellProps['header']) => p,
  body: (p: ShellProps['body']) => p,
  panel: (p: ShellProps['panel']) => p,
}
