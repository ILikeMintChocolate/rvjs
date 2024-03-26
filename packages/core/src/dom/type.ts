import { ElementBlock } from '@element/elementBlock.ts'
import { ComponentBlock } from '@component/componentBlock.ts'
import { ForRender } from '@children/for.ts'
import { SwitchRender } from '@children/switch.ts'
import { ToggleRender } from '@children/toggle.ts'

export type AnyBlock = ElementBlock | ComponentBlock
export type DynamicChildren = ForRender | SwitchRender | ToggleRender
export type Children = (AnyBlock | DynamicChildren)[]
