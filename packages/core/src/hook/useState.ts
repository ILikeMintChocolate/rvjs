import { stateContext, StateContext } from '@context/state.ts'
import { RvjsObject } from '@type/rvjs.ts'
import {
  RVJS_GET_STATE_IDENTIFIER,
  RVJS_SET_STATE_IDENTIFIER,
} from '@util/identifier.ts'

export type GetState<State> = RvjsObject<() => State>

export type SetState<State> = RvjsObject<(newState: State) => void>

interface Effects {
  DOM_EFFECT: Set<StateContext['value']['effectFn']>
  USE_EFFECT: Set<StateContext['value']['effectFn']>
  FLOW_EFFECT: Set<StateContext['value']['effectFn']>
}

export const useState = <State>(
  initialState: State,
): [GetState<State>, SetState<State>] => {
  let state = initialState
  let isNotifying = false
  const effects: Effects = {
    DOM_EFFECT: new Set(),
    USE_EFFECT: new Set(),
    FLOW_EFFECT: new Set(),
  }
  let lazySubscribeQueue: StateContext['value'][] = []

  const getState: GetState<State> = () => {
    const context = stateContext.value
    if (context) {
      if (isNotifying) {
        lazySubscribeQueue.push(context)
      } else {
        subscribeEffect(effects, context)
      }
    }
    return state
  }
  getState.$$typeof = RVJS_GET_STATE_IDENTIFIER

  const setState: SetState<State> = (newState) => {
    if (newState === state) {
      return
    }
    state = newState
    isNotifying = true
    notifyEffects(effects)
    isNotifying = false
    for (const subscriber of lazySubscribeQueue) {
      subscribeEffect(effects, subscriber)
    }
    lazySubscribeQueue = []
  }
  setState.$$typeof = RVJS_SET_STATE_IDENTIFIER

  return [getState, setState]
}

const subscribeEffect = (effects: Effects, context: StateContext['value']) => {
  const { component, type, effectFn } = context
  effects[type].add(effectFn)
  if (component) {
    component.unsubscribeEffectHandlers.push(() => {
      effects[type].delete(effectFn)
    })
  }
}

const notifyEffects = (effects: Effects) => {
  for (const effect of effects['DOM_EFFECT']) {
    effect()
  }
  for (const effect of effects['USE_EFFECT']) {
    effect()
  }
  for (const effect of effects['FLOW_EFFECT']) {
    effect()
  }
}
