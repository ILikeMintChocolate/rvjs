import { Component } from '@rvjs/core'

export interface HighlightProps {
  children: (Component | Node)[]
}

export const highlightRenderProps = {
  children: (p: HighlightProps['children']) => p,
}
