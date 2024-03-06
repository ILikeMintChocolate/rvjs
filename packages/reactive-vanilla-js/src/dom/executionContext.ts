import { DynamicRender } from '../reactive/hook/dynamic.ts'
import { Context } from '../util/context.ts'
import { ComponentBlock } from './componentBlock.ts'
import { Queue } from '../util/queue.ts'
import { AnyBlock } from '../type/dom'

export interface ElementContext {
  block: AnyBlock
  property: string | null
  value: DynamicRender | any
}

export const subscribeStateContext = new Context<ElementContext>()
export const componentContext = new Context<ComponentBlock>()
export const onMountHandlerQueueContext = new Queue<() => void>()
