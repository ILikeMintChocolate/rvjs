import { Component } from '@component/componentBlock.ts'
import { componentContext } from '@context/executionContext.ts'
import { GetState, isGetState } from '@hook/useState.ts'
import { isRvjsFunction } from '@type/guard.ts'
import { RvjsFunction } from '@type/rvjs.ts'
import { Block } from '@type/type.ts'
import { Context } from '@util/context.ts'
import { RVJS_SWITCH_RENDER_SYMBOL } from '@util/symbol.ts'

export type SwitchRender = RvjsFunction<
  () => {
    thisComponent: Component
    getBlock: () => Block
    context: Context<SwitchContext>
  }
>

interface SwitchContext {
  index: number
}

export const Switch = <Value>(
  value: Value | GetState<Value>,
  render: () => Block | null,
) => {
  let currentValue: Value | null = null
  let currentBlock: Block | null = null
  const context = new Context<SwitchContext>()
  const thisComponent = componentContext.get()!

  const switchRender = () => {
    const newValue = isGetState(value) ? value() : value
    if (newValue !== currentValue) {
      currentValue = newValue
      currentBlock?.triggerDestroy()
      componentContext.set(thisComponent)
      currentBlock = render()
      componentContext.set(null)
    }
    return {
      thisComponent,
      getBlock: () => currentBlock,
      context,
    }
  }
  switchRender.$$typeof = RVJS_SWITCH_RENDER_SYMBOL

  return switchRender as SwitchRender
}

export const isSwitchRender = (value: unknown): value is SwitchRender => {
  return isRvjsFunction(value) && value?.$$typeof === RVJS_SWITCH_RENDER_SYMBOL
}
