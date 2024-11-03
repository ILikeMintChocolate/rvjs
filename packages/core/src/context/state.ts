import { Component } from '@block/component/component.ts'
import { GetState } from '@hook/useState.ts'
import { Context } from '@util/context.ts'

export interface StateContext {
  component: Component
  type: 'USE_EFFECT' | 'DOM_EFFECT' | 'FLOW_EFFECT'
  effectFn: Function
  target?: Node
}

export const stateContext = new Context<StateContext>()

export let isUsingStateContext: GetState<unknown>[] = []
