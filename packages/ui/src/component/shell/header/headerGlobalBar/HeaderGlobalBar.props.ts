import { Children } from '@rvjs/core'
import { isChildren } from '@rvjs/is'

export interface HeaderGlobalBarProps {
  children: Children
}

export const headerGlobalPropsType = {
  children: isChildren,
}

export const headerGlobalRenderProps = {
  children: (p: Children) => p,
}
