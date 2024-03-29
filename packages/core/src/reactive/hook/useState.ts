import {
  StateContext,
  subscribeStateContext,
} from '@context/executionContext.ts'
import { AnyBlock } from '@dom/type.ts'
import { isElementBlock } from '@element/elementBlock.ts'
import { setProperty, setStyleProperty } from '@element/property.ts'
import { isArray, isFunction } from '@type/guard.ts'
import { Observer } from '@util/observer.ts'
import { Queue } from '@util/queue.ts'

export type GetState<State = unknown> = () => State
export type SetState<State = unknown> = (
  newState: State | SetStateCallback<State>,
) => void
type SetStateCallback<State = unknown> = (oldState: State) => void

export const useState = <State>(
  initialState: State,
): [GetState<State>, SetState<State>] => {
  let state = initialState
  const subscribers = new StateObserver()
  let isNotifying = false
  const lazySubscribeQueue = new Queue<StateContext>()

  const getState: GetState<State> = () => {
    if (subscribeStateContext.has()) {
      const stateContext = subscribeStateContext.get()!
      if (isNotifying) {
        lazySubscribeQueue.push(stateContext)
      } else {
        subscribers.subscribeState(stateContext)
      }
    }
    return state
  }

  const setState: SetState<State> = (
    newState: State | SetStateCallback<State>,
  ) => {
    if (newState === state) {
      return
    }
    if (isFunction(newState)) {
      state = newState(state) as State
    } else {
      state = newState
    }
    isNotifying = true
    notifyWhenStateChange(subscribers)
    isNotifying = false
    lazySubscribeQueue.popAll((stateContext) => {
      subscribers.subscribeState(stateContext)
    })
  }

  return [getState, setState]
}

const notifyWhenStateChange = (subscribers: StateObserver) => {
  const lazyUseEffectQueue: Function[][] = []
  subscribers.notify((block, values) => {
    Object.entries(values.domProperty).forEach(([property, value]) => {
      if (isElementBlock(block)) {
        setProperty(block, property as string, value)
      }
    })
    Object.entries(values.styleProperty).forEach(([property, value]) => {
      if (isElementBlock(block)) {
        setStyleProperty(block, property as string, value)
      }
    })
    values.childrenRender.forEach((render) => {
      render()
    })
    lazyUseEffectQueue.push(values.useEffect)
  })
  lazyUseEffectQueue.flat().forEach((useEffect) => {
    useEffect()
  })
}

export const isGetState = (value: unknown): value is GetState => {
  return isFunction(value) && value.name === 'getState'
}

interface StateObserverValue {
  useEffect: Function[]
  childrenRender: Function[]
  domProperty: Record<string, Function>
  styleProperty: Record<string, Function>
}

class StateObserver extends Observer<AnyBlock, StateObserverValue> {
  constructor() {
    super()
  }

  subscribeState(stateContext: StateContext) {
    const { block, type, property, value } = stateContext
    if (!this.hasValueBySubscriber(block)) {
      super.createEmptyValue(block, {
        useEffect: [],
        childrenRender: [],
        domProperty: {},
        styleProperty: {},
      } as StateObserverValue)
      if (isElementBlock(block)) {
        block.appendStateUnsubscribeHandler(this.unsubscribe.bind(this))
      }
    }
    const subscriberValue = this.getValueBySubscriber(block)!
    if (isArray(subscriberValue[type])) {
      subscriberValue[type].push(value)
    } else {
      // @ts-ignore
      subscriberValue[type][property] = value
    }
  }
}
