import { Children } from '@rvjs/core'
import { isChildren } from '@rvjs/is'

export interface HeaderProps {
  children?: Children
}

export const headerPropsType = {
  children: isChildren,
}

export const headerRenderProps = {
  children: (p: Children) => p,
}
