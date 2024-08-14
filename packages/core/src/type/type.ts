import { Block } from '@block/block.ts'
import { ForBlock } from '@block/for.ts'
import { SwitchBlock } from '@block/switch.ts'
import { ToggleBlock } from '@block/toggle.ts'

export type ElementType = keyof HTMLElementTagNameMap
export type Flow =
  | ForBlock<unknown>
  | SwitchBlock<unknown>
  | ToggleBlock<unknown>
export type Child = Block | Flow
export type Children = (Block | Flow | null)[]
