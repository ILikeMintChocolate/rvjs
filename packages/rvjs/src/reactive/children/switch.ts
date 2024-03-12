import { Context } from '../../util/context.ts'
import { GetState, isGetState } from '../hook/useState.ts'
import { AnyBlock } from '../../type/dom'
import { isFunction } from '../../type/guard.ts'
import { componentContext } from '../context/executionContext.ts'
import { ComponentBlock } from '../../component/componentBlock.ts'

export type SwitchRender = () => {
  thisComponent: ComponentBlock
  getBlock: () => AnyBlock
  context: Context<SwitchContext>
}

interface SwitchContext {
  index: number
}

export const Switch = <Value>(
  value: Value | GetState<Value>,
  render: (item: Value) => AnyBlock | null,
) => {
  let currentValue: Value | null = null
  let currentBlock: AnyBlock | null = null
  const context = new Context<SwitchContext>()
  const thisComponent = componentContext.get()!

  return function switchRender() {
    const newValue = isGetState(value) ? value() : value

    if (newValue !== currentValue) {
      currentValue = newValue
      currentBlock?.destroy()
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
