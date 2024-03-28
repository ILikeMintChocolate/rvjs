import { ComponentBlock } from '@component/componentBlock.ts'
import { AnyBlock } from '@dom/type.ts'
import { DynamicRender } from '@hook/dynamic.ts'
import { Context } from '@util/context.ts'

export interface StateContext {
  block: AnyBlock
  type: 'useEffect' | 'childrenRender' | 'domProperty' | 'styleProperty'
  property: string
  value: DynamicRender | any
}

export const subscribeStateContext = new Context<StateContext>()
export const componentContext = new Context<ComponentBlock>()
