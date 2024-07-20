import { Children } from '@rvjs/core/dom'
import { isChildren } from '@rvjs/is'

export interface SectionProps {
  children: Children
}

export const sectionPropsType = {
  children: isChildren,
}

export const sectionRenderProps = {
  children: (p: Children) => p,
}
