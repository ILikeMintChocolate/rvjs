import { ElementBlock } from '../element/elementBlock.ts'
import { ComponentBlock } from '../component/componentBlock.ts'
import { ForRender } from '../reactive/children/for.ts'
import { SwitchRender } from '../reactive/children/switch.ts'
import { ToggleRender } from '../reactive/children/toggle.ts'

export type AnyBlock = ElementBlock | ComponentBlock
export type DynamicChildren = ForRender | SwitchRender | ToggleRender
export type Children = (AnyBlock | DynamicChildren)[]
