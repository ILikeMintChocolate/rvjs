import {
  isUsingStateContext,
  stateContext,
  StateContext,
} from '@context/state.ts'
import { isFunction } from '@type/guard.ts'
import { RvjsObject } from '@type/rvjs.ts'
import {
  RVJS_GET_STATE_IDENTIFIER,
  RVJS_SET_STATE_IDENTIFIER,
} from '@util/identifier.ts'
import { Queue } from '@util/queue.ts'

export type StateAccessors<State> = [GetState<State>, SetState<State>]

export type GetState<State> = RvjsObject<() => State>

export type SetState<State> = RvjsObject<
  (newState: State | ((state: State) => State)) => void
>

interface Effects {
  DOM_EFFECT: Map<Node, StateContext['effectFn']>
  USE_EFFECT: StateContext['effectFn'][]
  FLOW_EFFECT: StateContext['effectFn'][]
}

export const useState = <State>(initialState: State): StateAccessors<State> => {
  let state = initialState
  let isNotifying = false
  const effects: Effects = {
    DOM_EFFECT: new Map(),
    USE_EFFECT: [],
    FLOW_EFFECT: [],
  }
  const lazySubscribeQueue = new Queue<StateContext>()

  const getState: GetState<State> = () => {
    const context = stateContext.get()
    if (context) {
      if (isNotifying) {
        lazySubscribeQueue.enqueue(context)
      } else {
        subscribeEffect(effects, context)
      }
    }
    isUsingStateContext.push(getState)
    return state
  }
  getState.$$typeof = RVJS_GET_STATE_IDENTIFIER

  const setState: SetState<State> = (newState) => {
    if (newState === state) {
      return
    }
    state = isFunction(newState) ? newState(state) : newState
    isNotifying = true
    notifyEffects(effects)
    isNotifying = false
    lazySubscribeQueue.dequeueAll((context) => {
      subscribeEffect(effects, context)
    })
  }
  setState.$$typeof = RVJS_SET_STATE_IDENTIFIER

  return [getState, setState]
}

const subscribeEffect = (effects: Effects, context: StateContext) => {
  const { component, type, effectFn, target } = context
  if (type === 'DOM_EFFECT') {
    if (effects.DOM_EFFECT.has(target)) {
      return
    }
    effects[type].set(target, effectFn)
    component.addUnsubscribeEffectHandler(() => {
      effects[type].delete(target)
    })
  } else {
    effects[type].push(effectFn)
    component.addUnsubscribeEffectHandler(() => {
      effects[type] = effects[type].filter((effect) => effect !== effectFn)
    })
  }
}

const notifyEffects = (effects: Effects) => {
  effects['DOM_EFFECT'].forEach((effect) => {
    effect()
  })
  effects['USE_EFFECT'].forEach((effect) => {
    effect()
  })
  effects['FLOW_EFFECT'].forEach((effect) => {
    effect()
  })
}
