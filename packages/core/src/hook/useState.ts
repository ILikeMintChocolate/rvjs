import { stateContext, StateContext } from '@context/state.ts'
import { RvjsObject } from '@type/rvjs.ts'
import {
  RVJS_GET_STATE_IDENTIFIER,
  RVJS_SET_STATE_IDENTIFIER,
} from '@util/identifier.ts'
import { SmallQueue } from '@util/queue.ts'

export type GetState<State> = RvjsObject<() => State>

export type SetState<State> = RvjsObject<(newState: State) => void>

interface Effects {
  DOM_EFFECT: Map<Node, StateContext['value']['effectFn']>
  USE_EFFECT: Set<StateContext['value']['effectFn']>
  FLOW_EFFECT: Set<StateContext['value']['effectFn']>
}

export const useState = <State>(
  initialState: State,
): [GetState<State>, SetState<State>] => {
  let state = initialState
  let isNotifying = false
  const effects: Effects = {
    DOM_EFFECT: new Map(),
    USE_EFFECT: new Set(),
    FLOW_EFFECT: new Set(),
  }
  const lazySubscribeQueue = new SmallQueue<StateContext['value']>()

  const getState: GetState<State> = () => {
    const context = stateContext.value
    if (context) {
      if (isNotifying) {
        lazySubscribeQueue.enqueue(context)
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
    for (const subscriber of lazySubscribeQueue.items) {
      subscribeEffect(effects, subscriber)
    }
    lazySubscribeQueue.clear()
  }
  setState.$$typeof = RVJS_SET_STATE_IDENTIFIER

  return [getState, setState]
}

const subscribeEffect = (effects: Effects, context: StateContext['value']) => {
  const { component, type, effectFn, target } = context
  if (type === 'DOM_EFFECT') {
    if (effects.DOM_EFFECT.has(target)) {
      return
    }
    effects[type].set(target, effectFn)
    component.unsubscribeEffectHandlers.push(() => {
      effects[type].delete(target)
    })
  } else {
    effects[type].add(effectFn)
    component.unsubscribeEffectHandlers.push(() => {
      effects[type].delete(effectFn)
    })
  }
}

const notifyEffects = (effects: Effects) => {
  for (const effect of effects['DOM_EFFECT']) {
    effect[1]()
  }
  for (const effect of effects['USE_EFFECT']) {
    effect()
  }
  for (const effect of effects['FLOW_EFFECT']) {
    effect()
  }
}
