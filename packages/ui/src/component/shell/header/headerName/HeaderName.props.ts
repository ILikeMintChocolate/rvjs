export interface HeaderNameProps {
  title: string
  href: string
  prefix?: string
}

export const headerNameRenderProps = {
  title: (p: HeaderNameProps['title']) => p,
  href: (p: HeaderNameProps['href']) => p,
  prefix: (p: HeaderNameProps['prefix']) => p,
}
