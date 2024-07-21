import { Block } from '@block/block.ts'
import { Component } from '@component/componentBlock.ts'
import { RvjsFunction } from '@type/rvjs.ts'
import { Context } from '@util/context.ts'

export type ForRender = RvjsFunction<
  () => {
    getBlock: () => Block[]
    context: Context<RenderContext>
  }
>

export type SwitchRender = SwitchOrToggleRender

export type ToggleRender = SwitchOrToggleRender

export type SwitchOrToggleRender = RvjsFunction<
  () => {
    thisComponent: Component
    getBlock: () => Block
    context: Context<RenderContext>
  }
>

export type RenderContext = {
  index: number
}
