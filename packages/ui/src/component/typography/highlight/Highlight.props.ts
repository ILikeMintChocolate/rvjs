import { Children } from '@rvjs/core'
import { isChildren } from '@rvjs/is'

export interface HighlightProps {
  children: Children
}

export const highlightPropsType = {
  children: isChildren,
}

export const highlightRenderProps = {
  children: (p: Children) => p,
}
