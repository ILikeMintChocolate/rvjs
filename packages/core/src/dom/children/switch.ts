import { Component } from '@component/componentBlock.ts'
import { componentContext } from '@context/executionContext.ts'
import { Block } from '@dom/type.ts'
import { GetState, isGetState } from '@hook/useState.ts'
import { isFunction } from '@type/guard.ts'
import { Context } from '@util/context.ts'

export type SwitchRender = () => {
  thisComponent: Component
  getBlock: () => Block
  context: Context<SwitchContext>
}

interface SwitchContext {
  index: number
}

export const Switch = <Value>(
  value: Value | GetState<Value>,
  render: (item: Value) => Block | null,
) => {
  let currentValue: Value | null = null
  let currentBlock: Block | null = null
  const context = new Context<SwitchContext>()
  const thisComponent = componentContext.get()!

  return function switchRender() {
    const newValue = isGetState(value) ? value() : value

    if (newValue !== currentValue) {
      currentValue = newValue
      currentBlock?.triggerDestroy()
      componentContext.set(thisComponent)
      currentBlock = render(newValue)
      componentContext.set(null)
    }
    return {
      thisComponent,
      getBlock: () => currentBlock,
      context,
    }
  } as SwitchRender
}

export const isSwitchRender = (value: unknown): value is SwitchRender => {
  return isFunction(value) && value.name === 'switchRender'
}
