import { DynamicRender } from '../hook/dynamic.ts'
import { Context } from '../../util/context.ts'
import { ComponentBlock } from '../../component/componentBlock.ts'
import { AnyBlock } from '../../type/dom.ts'

export interface ElementContext {
  block: AnyBlock
  property: string | null
  value: DynamicRender | any
}

export const subscribeStateContext = new Context<ElementContext>()
export const componentContext = new Context<ComponentBlock>()
