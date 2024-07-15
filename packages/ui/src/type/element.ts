import { ElementProps } from '@rvjs/core/dom'

export type HTMLDivType = Partial<
  Omit<ElementProps<'div'>, 'align' | 'classes' | 'children' | 'style' | 'ref'>
>
