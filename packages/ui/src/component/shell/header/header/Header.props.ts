export interface HeaderProps {
  deviceType?: 'desktop' | 'mobile'
  children?: JSX.Element
}

export const headerRenderProps = {
  children: (p: HeaderProps['children']) => p,
}
