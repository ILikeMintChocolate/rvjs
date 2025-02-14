import { Component } from '@render/component.ts'

export interface StateContext {
  value: {
    component: Component
    type: 'USE_EFFECT' | 'DOM_EFFECT' | 'FLOW_EFFECT'
    effectFn: Function
    target?: Node
  } | null
}

export const stateContext: StateContext = {
  value: null,
}
