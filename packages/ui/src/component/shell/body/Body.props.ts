import { Component } from '@rvjs/core'

export interface BodyProps {
  as?: keyof HTMLElementTagNameMap
  children: (Component | Node)[]
}

export const bodyRenderProps = {
  as: (p: BodyProps['as']) => p,
  children: (p: BodyProps['children']) => p,
}
