import { Children } from '@rvjs/core'

export interface SectionProps {
  children: Children
}

export const sectionRenderProps = {
  children: (p: SectionProps['children']) => p,
}
