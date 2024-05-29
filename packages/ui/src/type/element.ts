import { Dynamic } from '@rvjs/core/reactive'
import { AddTypeToValues } from '@util/type.ts'

export type HTMLDivType = Partial<
  AddTypeToValues<
    Omit<HTMLDivElement, 'align' | 'children' | 'style'>,
    Dynamic<any>
  >
>

export type HTMLButtonType = Partial<Omit<HTMLButtonElement, 'children'>>
