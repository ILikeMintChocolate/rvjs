import { Block } from '@block/block.ts'
import type { ForBlock } from '@block/for.ts'
import type { SwitchBlock } from '@block/switch.ts'
import type { ToggleBlock } from '@block/toggle.ts'

export type ElementType = keyof HTMLElementTagNameMap
export type Flow =
  | ForBlock<unknown>
  | SwitchBlock<unknown>
  | ToggleBlock<unknown>
export type Child = Block | Flow
export type Children = (Block | Flow | Text)[]
