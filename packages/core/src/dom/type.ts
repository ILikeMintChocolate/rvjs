import { ForRender } from '@children/for.ts'
import { SwitchRender } from '@children/switch.ts'
import { ToggleRender } from '@children/toggle.ts'
import { Component } from '@component/componentBlock.ts'
import { Element } from '@element/elementBlock.ts'

export type ElementType = keyof HTMLElementTagNameMap
export type Block = Element | Component
export type Render = ForRender | SwitchRender | ToggleRender
export type Child = Block | Render
export type Children = (Block | Render)[]
