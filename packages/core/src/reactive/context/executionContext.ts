import { Block } from '@block/block.ts'
import { ComponentBlock } from '@block/component.ts'
import { Dynamic } from '@hook/dynamic.ts'
import { GetState } from '@hook/useState.ts'
import { Context } from '@util/context.ts'

export interface StateContext {
  block?: Block
  type:
    | 'useEffect'
    | 'childrenRender'
    | 'domProperty'
    | 'styleProperty'
    | 'classesProperty'
    | 'flowRender'
  property: string
  value: Dynamic | any
}

export const subscribeStateContext = new Context<StateContext>()
export const componentContext = new Context<ComponentBlock>()
export const isUsingState = new Context<GetState[]>([])
