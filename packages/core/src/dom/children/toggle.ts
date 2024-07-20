import { Component } from '@component/componentBlock.ts'
import { componentContext } from '@context/executionContext.ts'
import { GetState } from '@hook/useState.ts'
import { isFunction, isRvjsFunction } from '@type/guard.ts'
import { RvjsFunction } from '@type/rvjs.ts'
import { Block } from '@type/type.ts'
import { Context } from '@util/context.ts'
import { RVJS_TOGGLE_RENDER_SYMBOL } from '@util/symbol.ts'

export type ToggleRender = RvjsFunction<
  () => {
    thisComponent: Component
    getBlock: () => Block
    context: Context<ToggleContext>
  }
>

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

  const toggleRender = () => {
    const newValue = isFunction(value) ? value() : value
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
  }
  toggleRender.$$typeof = RVJS_TOGGLE_RENDER_SYMBOL

  return toggleRender as ToggleRender
}

export const isToggleRender = (value: unknown): value is ToggleRender => {
  return isRvjsFunction(value) && value?.$$typeof === RVJS_TOGGLE_RENDER_SYMBOL
}
