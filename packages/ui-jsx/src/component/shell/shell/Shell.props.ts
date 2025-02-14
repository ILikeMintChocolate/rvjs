export interface ShellProps {
  header: JSX.Element
  body: JSX.Element
  panel?: JSX.Element
  deviceType?: 'desktop' | 'mobile'
}

export const shellRenderProps = {
  header: (p: ShellProps['header']) => p,
  body: (p: ShellProps['body']) => p,
  panel: (p: ShellProps['panel']) => p,
}
