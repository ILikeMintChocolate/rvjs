import { Component } from '@component/componentBlock.ts'
import { Block } from '@dom/type.ts'
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
  property: string
  value: Dynamic | any
}

export const subscribeStateContext = new Context<StateContext>()
export const componentContext = new Context<Component>()
export const isUsingState = new Context<GetState[]>([])
