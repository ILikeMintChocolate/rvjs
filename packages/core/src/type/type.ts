import { Block } from '@block/block.ts'
import { ForRender, SwitchRender, ToggleRender } from '@children/type.ts'

export type ElementType = keyof HTMLElementTagNameMap
export type { ForRender, SwitchRender, ToggleRender }
export type Render = ForRender | SwitchRender | ToggleRender
export type Child = Block | Render
export type Children = (Block | Render | Text)[]
