import { Children } from '@rvjs/core'

export interface HighlightProps {
  children: Children
}

export const highlightRenderProps = {
  children: (p: HighlightProps['children']) => p,
}
