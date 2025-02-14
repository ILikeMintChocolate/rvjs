import { ElementProps } from '@rvjs/core'

export type HTMLDivType = Partial<
  Omit<ElementProps<'div'>, 'align' | 'classes' | 'children' | 'style' | 'ref'>
>
