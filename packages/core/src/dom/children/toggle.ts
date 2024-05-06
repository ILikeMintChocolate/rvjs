import { Component } from '@component/componentBlock.ts'
import { componentContext } from '@context/executionContext.ts'
import { Block } from '@dom/type.ts'
import { GetState, isGetState } from '@hook/useState.ts'
import { isFunction } from '@type/guard.ts'
import { Context } from '@util/context.ts'

export type ToggleRender = () => {
  thisComponent: Component
  getBlock: () => Block
  context: Context<ToggleContext>
}

interface ToggleContext {
  index: number
}

export const Toggle = (
  value: boolean | GetState<boolean>,
  render: (isToggle: boolean) => Block | null,
) => {
  let currentValue: boolean | null = null
  let currentBlock: Block | null = null
  const context = new Context<ToggleContext>()
  const thisComponent = componentContext.get()!

  return function toggleRender() {
    const newValue = isGetState(value) ? value() : value

    if (!newValue) {
      currentValue = newValue
      currentBlock?.triggerDestroy()
      currentBlock = null
    } else if (newValue !== currentValue) {
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
  } as ToggleRender
}

export const isToggleRender = (value: unknown): value is ToggleRender => {
  return isFunction(value) && value.name === 'toggleRender'
}
