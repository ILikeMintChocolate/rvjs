import { Children } from '@rvjs/core'

export interface BodyProps {
  as?: keyof HTMLElementTagNameMap
  children: Children
}

export const bodyRenderProps = {
  as: (p: BodyProps['as']) => p,
  children: (p: BodyProps['children']) => p,
}
