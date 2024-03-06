import { Context } from '../../util/context.ts'
import { GetState, isGetState } from '../hook/useState.ts'
import { AnyBlock } from '../../type/dom'
import { isFunction } from '../../type/guard.ts'

export type SwitchRender = () => {
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

  return function switchRender() {
    const newValue = isGetState(value) ? value() : value

    if (newValue === currentValue) {
      return
    }
    currentValue = newValue

    if (currentBlock) {
      currentBlock.traverseChildren((child) => {
        child.cleanUp()
      })
    }

    currentBlock = render(newValue)

    return {
      getBlock: () => currentBlock,
      context,
    }
  } as SwitchRender
}

export const isSwitchRender = (value: unknown): value is SwitchRender => {
  return isFunction(value) && value.name === 'switchRender'
}
