import { ComponentBlock } from '@block/component.ts'
import { GetState, StateContext } from '@hook/useState.ts'
import { Context } from '@util/context.ts'

export const componentContext = new Context<ComponentBlock>()
export const isUsingState = new Set<GetState>([])
export const dynamicContext = new Context<StateContext>()
