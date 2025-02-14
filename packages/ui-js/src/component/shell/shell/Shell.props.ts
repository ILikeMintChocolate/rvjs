import { Child } from '@rvjs/core'
import { isChild, isOptional } from '@rvjs/is'

export interface ShellProps {
  header: Child
  body: Child
  panel?: Child
}

export const shellPropsType = {
  header: isChild,
  body: isChild,
  panel: isOptional(isChild),
}

export const shellRenderProps = {
  header: (p: Child) => p,
  body: (p: Child) => p,
  panel: (p: Child) => p,
}
