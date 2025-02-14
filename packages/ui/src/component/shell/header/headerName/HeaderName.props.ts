export interface HeaderNameProps {
  title: string
  href: string
  prefix?: string
  isExternal?: boolean
  deviceType?: 'desktop' | 'mobile'
}

export const headerNameRenderProps = {
  title: (p: HeaderNameProps['title']) => p,
  href: (p: HeaderNameProps['href']) => p,
  prefix: (p: HeaderNameProps['prefix']) => p,
  isExternal: (p: HeaderNameProps['isExternal']) => p,
}
